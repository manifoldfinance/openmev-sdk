# `use-react-wallet`

> React hook for connecting and interacting with Web3 Wallet Providers via
> OpenMEV RPC or any other RPC

## Overview

- [Web3Modal](https://github.com/Web3Modal/web3modal)
- [Zustand](https://github.com/pmndrs/zustand)

### Examples

- [see codesandbox](#)

#### Connect / Disconnect button

```ts
const ConnectWalletButton = () => {
  const { account, connect, disconnect } = useWallet();
  return (
    <>
      {!account ? (
        <button onClick={() => connect()}>Connect Wallet</button>
      ) : (
        <button onClick={() => disconnect()}>Disconnect Wallet</button>
      )}
    </>
  );
};
```

##### Connecting

The `connect` function passes along an optional config to a
[Web3Modal instance for additional customization](https://github.com/Web3Modal/web3modal#usage).

You can use the account information from useWallet anywhere inside your React
app, without any extra set up.

```ts
const UserAddress = () => {
  const { account } = useWallet();
  if (!account) return null;
  return <>{account}</>;
};
```

##### Transaction Signing

To run a transaction or sign a message, use the `provider` object returned by
the hook for connected wallets.

This is a standard
[Ethers.js Provider](https://docs.ethers.io/v5/api/providers/provider/).

```ts
const SignMessageButton = () => {
  const { account, provider } = useWallet();
    if (!account) return null;
        const signMessage = async () => {
            const signature = await provider.getSigner().signMessage("Hello!");
            console.log(signature);
  }
  return <button onClick={signMessage}>Sign Message</>;
}
```


<!-- @START DOCUMENTATION -->


## "API" | use-react-wallet

> Documentation for use-react-wallet

Public

-   Public
-   Public/Protected
-   All

## Web3ReactState | use-react-wallet

> ## Excerpt
> Documentation for use-react-wallet


### Hierarchy

-   object
    -   Web3ReactState

### Index

### Properties

-   [accounts](../web3reactstate.html#accounts)
-   [activating](../web3reactstate.html#activating)
-   [chainId](../web3reactstate.html#chainid)
-   [error](../web3reactstate.html#error)

## Properties

### accounts

accounts: string\[\] | undefined

### activating

activating: boolean

### chainId

chainId: number | undefined

### error

error: Error | undefined // FIXME

## Web3ReactStateUpdate | @use-react-wallet

> ## Excerpt
> Documentation for use-react-wallet

---
### Hierarchy

-   Web3ReactStateUpdate

## Index

### Properties

-   [accounts](../web3reactstateupdate.html#accounts)
-   [chainId](../web3reactstateupdate.html#chainid)

## Properties

### Optional accounts

accounts: string\[\]

### Optional chainId

chainId: undefined | number // non-zero padded hex


## RequestArguments | @use-react-wallet

> ## Excerpt
> Documentation for use-react-wallet

---
### Hierarchy

-   RequestArguments

## Index

### Properties

-   [method](../requestarguments.html#method)
-   [params](../requestarguments.html#params)

## Properties

### Readonly method

method: string

### Optional Readonly params

params: readonly unknown[] | object

## Provider | use-react-wallet

> ## Excerpt
> Documentation for use-react-wallet


### Hierarchy

-   EventEmitter
    -   Provider

## Index

## Constructors

### constructor

-   new Provider(options?: EventEmitterOptions): [Provider](../provider.html)

-   #### Parameters

    -   ##### Optional options: EventEmitterOptions


    #### Returns [Provider](../provider.html)


## Properties

### Static Readonly captureRejectionSymbol

captureRejectionSymbol: unique symbol

### Static captureRejections

captureRejections: boolean

### Static defaultMaxListeners

defaultMaxListeners: number

### Static Readonly errorMonitor

errorMonitor: unique symbol

## Methods

### addListener

-   addListener(eventName: string | symbol, listener: (...args: any\[\]) => void): this

-   #### Parameters

    -   ##### eventName: string | symbol

    -   ##### listener: (...args: any\[\]) => void

        -   -   (...args: any\[\]): void

            -   #### Parameters

                -   ##### Rest ...args: any\[\]


                #### Returns void


    #### Returns this


### emit

-   emit(eventName: string | symbol, ...args: any\[\]): boolean

-   #### Parameters

    -   ##### eventName: string | symbol

    -   ##### Rest ...args: any\[\]


    #### Returns boolean


### eventNames

-   eventNames(): Array<string | symbol\>

-   #### Returns Array<string | symbol\>


### getMaxListeners

-   getMaxListeners(): number

-   #### Returns number


### listenerCount

-   listenerCount(eventName: string | symbol): number

-   #### Parameters

    -   ##### eventName: string | symbol


    #### Returns number


### listeners

-   listeners(eventName: string | symbol): Function\[\]

-   #### Parameters

    -   ##### eventName: string | symbol


    #### Returns Function\[\]


### off

-   off(eventName: string | symbol, listener: (...args: any\[\]) => void): this

-   #### Parameters

    -   ##### eventName: string | symbol

    -   ##### listener: (...args: any\[\]) => void

        -   -   (...args: any\[\]): void

            -   #### Parameters

                -   ##### Rest ...args: any\[\]


                #### Returns void


    #### Returns this


### on

-   on(eventName: string | symbol, listener: (...args: any\[\]) => void): this

-   #### Parameters

    -   ##### eventName: string | symbol

    -   ##### listener: (...args: any\[\]) => void

        -   -   (...args: any\[\]): void

            -   #### Parameters

                -   ##### Rest ...args: any\[\]


                #### Returns void


    #### Returns this


### once

-   once(eventName: string | symbol, listener: (...args: any\[\]) => void): this

-   #### Parameters

    -   ##### eventName: string | symbol

    -   ##### listener: (...args: any\[\]) => void

        -   -   (...args: any\[\]): void

            -   #### Parameters

                -   ##### Rest ...args: any\[\]


                #### Returns void


    #### Returns this


### prependListener

-   prependListener(eventName: string | symbol, listener: (...args: any\[\]) => void): this

-   #### Parameters

    -   ##### eventName: string | symbol

    -   ##### listener: (...args: any\[\]) => void

        -   -   (...args: any\[\]): void

            -   #### Parameters

                -   ##### Rest ...args: any\[\]


                #### Returns void


    #### Returns this


### prependOnceListener

-   prependOnceListener(eventName: string | symbol, listener: (...args: any\[\]) => void): this

-   #### Parameters

    -   ##### eventName: string | symbol

    -   ##### listener: (...args: any\[\]) => void

        -   -   (...args: any\[\]): void

            -   #### Parameters

                -   ##### Rest ...args: any\[\]


                #### Returns void


    #### Returns this


### rawListeners

-   rawListeners(eventName: string | symbol): Function\[\]

-   #### Parameters

    -   ##### eventName: string | symbol


    #### Returns Function\[\]


### removeAllListeners

-   removeAllListeners(event?: string | symbol): this

-   #### Parameters

    -   ##### Optional event: string | symbol


    #### Returns this


### removeListener

-   removeListener(eventName: string | symbol, listener: (...args: any\[\]) => void): this

-   #### Parameters

    -   ##### eventName: string | symbol

    -   ##### listener: (...args: any\[\]) => void

        -   -   (...args: any\[\]): void

            -   #### Parameters

                -   ##### Rest ...args: any\[\]


                #### Returns void


    #### Returns this


### request

-   request(args: [RequestArguments](../requestarguments.html)): Promise<unknown\>

-   #### Parameters

    -   ##### args: [RequestArguments](../requestarguments.html)


    #### Returns Promise<unknown\>


### setMaxListeners

-   setMaxListeners(n: number): this

-   #### Parameters

    -   ##### n: number


    #### Returns this


### Static getEventListeners

-   getEventListeners(emitter: DOMEventTarget | EventEmitter, name: string | symbol): Function\[\]

-   #### Parameters

    -   ##### emitter: DOMEventTarget | EventEmitter

    -   ##### name: string | symbol


    #### Returns Function\[\]


### Static listenerCount

-   listenerCount(emitter: EventEmitter, eventName: string | symbol): number

-   #### Parameters

    -   ##### emitter: EventEmitter

    -   ##### eventName: string | symbol


    #### Returns number


### Static on

-   on(emitter: EventEmitter, eventName: string, options?: StaticEventEmitterOptions): AsyncIterableIterator<any\>

-   #### Parameters

    -   ##### emitter: EventEmitter

    -   ##### eventName: string

    -   ##### Optional options: StaticEventEmitterOptions


    #### Returns AsyncIterableIterator<any\>

    that iterates `eventName` events emitted by the `emitter`


### Static once

-   once(emitter: NodeEventTarget, eventName: string | symbol, options?: StaticEventEmitterOptions): Promise<any\[\]\>

-   #### Parameters

    -   ##### emitter: NodeEventTarget

    -   ##### eventName: string | symbol

    -   ##### Optional options: StaticEventEmitterOptions


    #### Returns Promise<any\[\]\>



## Connector | use-react-wallet

> ## Excerpt
> Documentation for use-react-wallet

---
### Hierarchy

-   Connector

## Index

### Constructors

-   [constructor](../onnector.html#constructor)

### Properties

-   [actions](../onnector.html#actions)
-   [provider](../onnector.html#provider)

### Methods

-   [activate](../onnector.html#activate)
-   [deactivate](../onnector.html#deactivate)

## Constructors

### constructor

-   new Connector(actions: [Actions](../actions.html)): [Connector](../onnector.html)

-   #### Parameters

    -   ##### actions: [Actions](../actions.html)


    #### Returns [Connector](../onnector.html)


## Properties

### Protected Readonly actions

actions: [Actions](../actions.html)

### provider

provider: [Provider](../provider.html) | undefined

## Methods

### Abstract activate

-   activate(...args: any\[\]): Promise<void\> | void

-   #### Parameters

    -   ##### Rest ...args: any\[\]


    #### Returns Promise<void\> | void


### Optional deactivate

-   deactivate(...args: any\[\]): Promise<void\> | void

-   #### Parameters

    -   ##### Rest ...args: any\[\]


    #### Returns Promise<void\> | void


# Actions | use-react-wallet

> ## Excerpt
> Documentation for use-react-wallet

---
### Hierarchy

-   Actions

## Index

### Properties

-   [reportError](../actions.html#reporterror)
-   [reset](../actions.html#reset)
-   [startActivation](../actions.html#startactivation)
-   [update](../actions.html#update)

## Properties

### reportError

reportError: (error: Error) => void

#### Type declaration

-   -   (error: Error): void

    -   #### Parameters

        -   ##### error: Error


        #### Returns void


### reset

reset: () => void

#### Type declaration

-   -   (): void

    -   #### Returns void


### startActivation

startActivation: () => void

#### Type declaration

-   -   (): void

    -   #### Returns void


### update

update: (stateUpdate: [Web3ReactStateUpdate](../web3reactstateupdate.html)) => void

#### Type declaration

-   -   (stateUpdate: [Web3ReactStateUpdate](../web3reactstateupdate.html)): void

    -   #### Parameters

        -   ##### stateUpdate: [Web3ReactStateUpdate](../web3reactstateupdate.html)


        #### Returns void


<!-- @STOP DOCUMENTATION -->


### Experimental

`useSafeTimeout` is a utility Hook that allows you to safely call `setTimeout`
and `clearTimeout` within a component, ensuring that all timeouts are cleared
when the component unmounts.

### Usage

```jsx live
<State>
  {([]) => {
    const { safeSetTimeout, safeClearTimeout } = useSafeTimeout();
    let timeoutId = null;

    const handleOnClick = () => {
      timeoutId = safeSetTimeout(() => window.alert('hello!'), 5000);
    };

    const cancelTimeout = () => {
      safeClearTimeout(timeoutId);
    };

    return (
      <>
        <Button onClick={handleOnClick}>Click me</Button>
        <Button onClick={cancelTimeout}>Cancel timeout</Button>
      </>
    );
  }}
</State>
```

