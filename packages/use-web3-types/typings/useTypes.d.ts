import type { State, StoreApi } from 'zustand/vanilla'
import type { EventEmitter } from 'node:events'

// TODO: EventEmitter
//import mitt from 'mitt';
//const EventEmitter = mitt<Events>();

/** @interface Web3ReactState  */
export interface Web3ReactState extends State {
  chainId: number | undefined
  accounts: string[] | undefined
  activating: boolean
  error: Error | undefined
}

export type Web3ReactStore = StoreApi<Web3ReactState>

/** @interface  Web3ReactStateUpdate */
export interface Web3ReactStateUpdate {
  chainId?: number
  accounts?: string[]
}

/** @interface Actions */
export interface Actions {
  startActivation: () => void
  update: (stateUpdate: Web3ReactStateUpdate) => void
  reportError: (error: Error) => void
  reset: () => void
}

// per EIP-1193
/** @interface  RequestArguments */
export interface RequestArguments {
  readonly method: string
  readonly params?: readonly unknown[] | object
}

// per EIP-1193
/** @interface  Provider */
export interface Provider extends EventEmitter {
  request(args: RequestArguments): Promise<unknown>
}

/** @class Connector */
export abstract class Connector {
  public provider: Provider | undefined

  /** @readonly actions  */
  protected readonly actions: Actions

  constructor(actions: Actions) {
    this.actions = actions
  }


  public abstract activate(...args: any[]): Promise<void> | void
  public deactivate?(...args: any[]): Promise<void> | void
}
