import { io, Socket } from 'socket.io-client';
import { BigNumberish } from '@ethersproject/bignumber';

export enum Event {
  FEES_CHANGE = 'FEES_CHANGE',
  SOCKET_SESSION = 'SOCKET_SESSION',
  SOCKET_ERR = 'SOCKET_ERR',
  BUNDLE_REQUEST = 'BUNDLE_REQUEST',
  OPENMEV_BUNDLE_REQUEST = 'OPENMEV_BUNDLE_REQUEST',
  BUNDLE_STATUS_REQUEST = 'BUNDLE_STATUS_REQUEST',
  BUNDLE_RESPONSE = 'BUNDLE_RESPONSE',
  BUNDLE_CANCEL_REQUEST = 'BUNDLE_CANCEL_REQUEST',
}

export interface Fee {
  maxFeePerGas: BigNumberish;
  maxPriorityFeePerGas: BigNumberish;
}
export interface Fees {
  block: number;
  baseFeePerGas: BigNumberish;
  default: Fee;
  low: Fee;
  med: Fee;
  high: Fee;
}

export enum Status {
  PENDING_BUNDLE = 'PENDING_BUNDLE',
  FAILED_BUNDLE = 'FAILED_BUNDLE',
  SUCCESSFUL_BUNDLE = 'SUCCESSFUL_BUNDLE',
  CANCEL_BUNDLE_SUCCESSFUL = 'CANCEL_BUNDLE_SUCCESSFUL',
  BUNDLE_NOT_FOUND = 'BUNDLE_NOT_FOUND',
}

export const STATUS_LOCALES: Record<string, string> = {
  PENDING_BUNDLE: 'Transaction accepted, working on including your swap',
  FAILED_BUNDLE: 'Failed',
  SUCCESSFUL_BUNDLE: 'Success',
  CANCEL_BUNDLE_SUCCESSFUL: 'Cancelled',
  BUNDLE_NOT_FOUND: 'Failed',
};

export enum Debug {
  BLOCKTYPE_FLASHBOTS = 'BLOCKTYPE_FLASHBOTS',
  BLOCKTYPE_EDENNETWORK = 'BLOCKTYPE_EDENNETWORK',
  BUNDLE_OUTBID = 'BUNDLE_OUTBID',
  ERROR_BLOCKHEAD = 'ERROR_BLOCKHEAD',
  ERROR_BLOCKDATA = 'ERROR_BLOCKDATA',
  ERROR_UNKNOWN = 'ERROR_UNKNOWN',
}

export interface OpenMEVsemver {
  api: number;
  client: string;
}

export interface SocketSession {
  token: string;
  version: OpenMEVsemver | undefined;
}

export interface TransactionReq {
  serialized: string;
  raw: SwapReq | undefined;
  estimatedGas?: number;
  estimatedEffectiveGasPrice?: number;
}

export interface TransactionProcessed {
  serialized: string;
  bundle: string;
  raw: SwapReq | undefined;
  estimatedGas: number;
  estimatedEffectiveGasPrice: number;
}

export interface BundleReq {
  transactions: TransactionReq[] | string[];
  chainId?: number;
  bribe?: string;
  from?: string;
  deadline?: BigNumberish;
  simulateOnly?: boolean;
}

export interface SwapReq {
  amount0: BigNumberish;
  amount1: BigNumberish;
  path: Array<string>;
  to: string;
}

export interface Backrun {
  best: {
    backrunner: string;
    count: number;
    duration: number;
    totalGasLimit: BigNumberish;
    totalGasPrice: BigNumberish;
    totalMaxFeePerGas: BigNumberish;
    totalMaxPriorityFeePerGas: BigNumberish;
    transactions: any[];
  };
}

export interface BundleProcessed {
  id: string;
  transactions: TransactionProcessed[];
  bribe: BigNumberish;
  sessionToken: string;
  chainId: number;
  timestamp: number;
  totalEstimatedGas: number;
  totalEstimatedEffectiveGasPrice: number;
  from: string;
  deadline: BigNumberish;
  simulateOnly: boolean;
  backrun: Backrun;
}

export interface BundleRes {
  bundle: BundleProcessed;
  status: string;
  message: string;
  error: string;
}

export interface BundleResApi {
  bundle: {
    id: string;
    transactions: string[];
  };
  status: string;
  message: string;
  error: string;
}

interface QuoteEventsMap {
  [Event.SOCKET_SESSION]: (response: SocketSession) => void;
  [Event.SOCKET_ERR]: (err: any) => void;
  [Event.FEES_CHANGE]: (response: Fees) => void;
  [Event.BUNDLE_REQUEST]: (response: any) => void;
  [Event.OPENMEV_BUNDLE_REQUEST]: (response: any) => void;
  [Event.BUNDLE_RESPONSE]: (response: BundleRes | BundleResApi) => void;
  [Event.BUNDLE_CANCEL_REQUEST]: (serialized: any) => void;
  [Event.BUNDLE_STATUS_REQUEST]: (serialized: any) => void;
}

interface SocketOptions {
  onConnect?: () => void;
  onConnectError?: (err: any) => void;
  onDisconnect?: (err: any) => void;
  onError?: (err: any) => void;
  onFeesChange?: (fees: Fees) => void;
  onSocketSession?: (session: any) => void;
  onTransactionResponse?: (response: BundleRes | BundleResApi) => void;
}

const defaultServerUrl = 'https://api.sushirelay.com/v1';
const tokenKey = `SESSION_TOKEN`;

export class OpenMEVSocket {
  private socket: Socket<QuoteEventsMap, QuoteEventsMap>;

  constructor(serverUrl: string = defaultServerUrl) {
    const token = localStorage.getItem(tokenKey);
    const socket: Socket<QuoteEventsMap, QuoteEventsMap> = io(serverUrl, {
      transports: ['websocket'],
      auth: { token },
      reconnection: true,
      reconnectionDelay: 5000,
      autoConnect: true,
    });
    this.socket = socket;
  }

  private disconnect() {
    this.socket.off('connect');
    this.socket.off('connect_error');
    this.socket.off(Event.SOCKET_ERR);
    this.socket.off(Event.SOCKET_SESSION);
    this.socket.off(Event.FEES_CHANGE);
    this.socket.off(Event.BUNDLE_RESPONSE);
  }

  public closeConnection() {
    this.socket.disconnect();
  }

  public init({
    onConnect,
    onConnectError,
    onDisconnect,
    onError,
    onFeesChange,
    onSocketSession,
    onTransactionResponse,
  }: SocketOptions): () => void {
    /**
     * onConnect
     */
    this.socket.on('connect', () => {
      if (onConnect) onConnect();
    });

    /**
     * onConnectError
     */
    this.socket.on('connect_error', (err: any) => {
      if (onConnectError) onConnectError(err);
    });

    /**
     * onDisconnect
     */
    this.socket.on('disconnect', (err: any) => {
      if (onDisconnect) onDisconnect(err);
    });

    /**
     * onError
     */
    this.socket.on(Event.SOCKET_ERR, (err: any) => {
      if (onError) onError(err);
    });

    /**
     * onSocketSession
     * - Store the session token in the browser local storage
     */
    this.socket.on(Event.SOCKET_SESSION, (session: any) => {
      localStorage.setItem(tokenKey, session.token);
      if (onSocketSession) onSocketSession(session);
    });

    /**
     * onFeesChange
     */
    this.socket.on(Event.FEES_CHANGE, (response: Fees) => {
      if (onFeesChange) onFeesChange(response);
    });

    /**
     * onTransactionResponse
     */
    this.socket.on(
      Event.BUNDLE_RESPONSE,
      (response: BundleRes | BundleResApi) => {
        if (onTransactionResponse) onTransactionResponse(response);
      },
    );

    /**
     * Returns function used to stop listening to all connected socket events.
     */
    return () => {
      this.disconnect();
    };
  }

  public emitBundleRequest(bundle: BundleReq) {
    this.socket.emit(Event.BUNDLE_REQUEST, bundle);
  }

  public emitTransactionRequest(bundle: BundleReq) {
    this.socket.emit(Event.OPENMEV_BUNDLE_REQUEST, bundle);
  }

  public emitStatusRequest(id: string) {
    this.socket.emit(Event.BUNDLE_STATUS_REQUEST, { id });
  }

  public emitTransactionCancellation(id: string) {
    this.socket.emit(Event.BUNDLE_CANCEL_REQUEST, { id });
  }
}
