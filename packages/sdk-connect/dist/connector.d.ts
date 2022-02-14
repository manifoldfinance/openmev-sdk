import { BigNumberish } from '@ethersproject/bignumber';
/**
 * @exports provider
 * @const getDefaultProvider
 * @
 */
export declare const provider: import("@ethersproject/providers").BaseProvider;
export declare enum Event {
    FEES_CHANGE = "FEES_CHANGE",
    SOCKET_SESSION = "SOCKET_SESSION",
    SOCKET_ERR = "SOCKET_ERR",
    BUNDLE_REQUEST = "BUNDLE_REQUEST",
    OPENMEV_BUNDLE_REQUEST = "OPENMEV_BUNDLE_REQUEST",
    BUNDLE_STATUS_REQUEST = "BUNDLE_STATUS_REQUEST",
    BUNDLE_RESPONSE = "BUNDLE_RESPONSE",
    BUNDLE_CANCEL_REQUEST = "BUNDLE_CANCEL_REQUEST"
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
export declare enum Status {
    PENDING_BUNDLE = "PENDING_BUNDLE",
    FAILED_BUNDLE = "FAILED_BUNDLE",
    SUCCESSFUL_BUNDLE = "SUCCESSFUL_BUNDLE",
    REPLACE_BUNDLE_SUCCESSFUL = "REPLACE_BUNDLE_SUCCESSFUL",
    BUNDLE_NOT_FOUND = "BUNDLE_NOT_FOUND"
}
export declare const STATUS_LOCALES: Record<string, string>;
export declare enum Debug {
    BLOCKTYPE_FLASHBOTS = "BLOCKTYPE_FLASHBOTS",
    BLOCKTYPE_EDENNETWORK = "BLOCKTYPE_EDENNETWORK",
    BUNDLE_OUTBID = "BUNDLE_OUTBID",
    ERROR_BLOCKHEAD = "ERROR_BLOCKHEAD",
    ERROR_BLOCKDATA = "ERROR_BLOCKDATA",
    ERROR_UNKNOWN = "ERROR_UNKNOWN"
}
export declare type ConnectionInfo = {
    url: string;
    headers?: {
        [key: string]: string | number;
    };
    user?: string;
    password?: string;
    allowInsecureAuthentication?: boolean;
    allowGzip?: boolean;
    throttleLimit?: number;
    throttleSlotInterval?: number;
    throttleCallback?: (attempt: number, url: string) => Promise<boolean>;
    timeout?: number;
};
export interface OnceBlockable {
    once(eventName: 'block', handler: () => void): void;
}
export interface OncePollable {
    once(eventName: 'poll', handler: () => void): void;
}
export declare type PollOptions = {
    timeout?: number;
    floor?: number;
    ceiling?: number;
    interval?: number;
    retryLimit?: number;
    onceBlock?: OnceBlockable;
    oncePoll?: OncePollable;
};
export interface platformVersion {
    api: number;
    client: string;
}
export interface SocketSession {
    token: string;
    version: platformVersion | any;
}
/**
 * @export
 * @interface TransactionReq
 */
export interface TransactionReq {
    serialized: string;
    raw: SwapRequest | undefined;
    estimatedGas?: number;
    estimatedEffectiveGasPrice?: number;
}
/**
 * @export
 * @interface TransactionProcessed
 */
export interface TransactionProcessed {
    serialized: string;
    bundle: string;
    raw: SwapRequest | undefined;
    estimatedGas: number;
    estimatedEffectiveGasPrice: number;
}
/**
 * @export
 * @interface BundleRequest
 */
export interface BundleRequest {
    transactions: TransactionReq[] | string[];
    chainId?: number;
    bribe?: string;
    from?: string;
    deadline?: BigNumberish;
    simulateOnly?: boolean;
}
/**
 *
 * @interface SwapRequest
 * @param {amount0, amount1, path, to}
 */
export interface SwapRequest {
    amount0: BigNumberish;
    amount1: BigNumberish;
    path: Array<string>;
    to: string;
}
/**
 * @export
 * @interface Backrun
 */
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
/**
 *
 * @interface BundleProcessed
 */
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
/**
 *
 * @interface BundleProcessed
 */
export interface BundleResponse {
    bundle: BundleProcessed;
    status: string;
    message: string;
    error: string;
}
export interface BundleResponseApi {
    bundle: {
        id: string;
        transactions: string[];
    };
    status: string;
    message: string;
    error: string;
}
interface SocketOptions {
    onConnect?: () => void;
    onConnectError?: (err: any) => void;
    onDisconnect?: (err: any) => void;
    onError?: (err: any) => void;
    onFeesChange?: (fees: Fees) => void;
    onSocketSession?: (session: any) => void;
    onTransactionResponse?: (response: BundleResponse | BundleResponseApi) => void;
}
export declare class OpenMEVSocket {
    private socket;
    constructor(serverUrl?: string);
    private disconnect;
    closeConnection(): void;
    init({ onConnect, onConnectError, onDisconnect, onError, onFeesChange, onSocketSession, onTransactionResponse, }: SocketOptions): () => void;
    emitBundleRequest(bundle: BundleRequest): void;
    emitTransactionRequest(bundle: BundleRequest): void;
    emitStatusRequest(id: string): void;
    emitTransactionCancellation(id: string): void;
}
export {};
/** @exports connector */
