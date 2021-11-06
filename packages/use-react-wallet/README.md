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

### License

Apache-2.0

