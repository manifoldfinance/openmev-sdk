<span align="center">

# @openmev/sdk

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/c4566fcdc50a49eba6e07264443bd5c0)](https://www.codacy.com/gh/manifoldfinance/openmev-sdk/dashboard?utm_source=github.com&utm_medium=referral&utm_content=manifoldfinance/openmev-sdk&utm_campaign=Badge_Grade)
[![nodejs](https://github.com/manifoldfinance/openmev-sdk/workflows/nodejs/badge.svg)](https://github.com/manifoldfinance/openmev-sdk/actions?query=workflow:"nodejs")
[![GitHub tag](https://img.shields.io/github/tag/manifoldfinance/openmev-sdk?include_prereleases=&sort=semver)](https://github.com/manifoldfinance/openmev-sdk/releases/)
[![License](https://img.shields.io/badge/spdx-apache--2.0-informational)](#license)
[![issues - openmev-sdk](https://img.shields.io/github/issues/manifoldfinance/openmev-sdk)](https://github.com/manifoldfinance/openmev-sdk/issues)

[docs.openmev.org](https://docs.openmev.org)

</span>

## API

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/14127676-2218bc61-1b7e-41af-824c-287c283f3548?action=collection%2Ffork&collection-url=entityId%3D14127676-2218bc61-1b7e-41af-824c-287c283f3548%26entityType%3Dcollection%26workspaceId%3D8cb582a0-5269-4437-bc39-67110c80bd4b)

## Documentation

- [Explore the new Developers Hub](https://manifoldfinance.github.io/hub/)
- [See the Packages/ directory for additional specific docs](./packages/)

## `use-react-wallet` - welltyped react hook with modern state management 


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

> For more packages, go to the sub directory

## Specification

## TransactionSimulationBase

| name    | type     | optional | default | description |
| ------- | -------- | -------- | ------- | ----------- |
| txHash  | `string` | `false`  | `n/a`   |             |
| gasUsed | `number` | `false`  | `n/a`   |             |

## OpenMevBundle

| name                      | type                            | optional | default | description |
| ------------------------- | ------------------------------- | -------- | ------- | ----------- |
| signedBundledTransactions | `string[]`                      | `false`  | `n/a`   |             |
| blockTarget               | `number`                        | `false`  | `n/a`   |             |
| options                   | `FlashbotsOptions \| undefined` | `true`   | `n/a`   |             |

## FlashbotsBundleTransaction

| name        | type                 | optional | default | description |
| ----------- | -------------------- | -------- | ------- | ----------- |
| transaction | `TransactionRequest` | `false`  | `n/a`   |             |
| signer      | `Signer`             | `false`  | `n/a`   |             |

## RpcParams

| name               | type                                                                          | optional | default | description                                                                                                                                                                           |
| ------------------ | ----------------------------------------------------------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| manifold_Relay     | `number`                                                                      | `false`  | `n/a`   | Relay simulates bundles before sending to miners which can take a small amount of time. The relay cannot determine which bundles are profitable without performing a full simulation. |
| eth_sendMegaBundle | `Array[String], A list of signed transactions to execute in an atomic bundle` | `false`  | `n/a`   | ethSendMegaBundle can be used to send your bundles to the relay.                                                                                                                      |
| eth_callBundle     | `Array[String], A list of signed transactions to execute in an atomic bundle` | `false`  | `n/a`   | eth_callBundle can be used to simulate a bundle against a specific block number, including simulating a bundle at the top of the next block.                                          |
| eth_sendBundle     | `() => string \| number \| string[] \| Record<string, unknown> \| undefined`  | `false`  | `n/a`   | SendBundle can be used to send your bundles to the relay.                                                                                                                             |



```
* Git status:

    - Current branch: master
    - Last tag: v0.3.2
    - Uncommitted changes: YES
    - Unpulled changes: no

* Subpackage status: [9 package/s, incl. root]

    Name                                     Version        Private Changes Dependencies
    @openmev/graphql                         0.3.0          NO      -       0
    @openmev/open-signer                     0.3.0          NO      -       11 (+ 1 dev)
    @openmev/protobufs                       0.3.0          NO      -       2 (+ 16 dev)
    @openmev/sdk-connect                     0.3.0          NO      3       4 (+ 4 dev)
    @openmev/sdk-relay                       0.3.0          NO      1       2 (+ 17 dev)
    @openmev/sushiswap                       0.3.0          NO      1       0
    use-react-wallet                         0.3.2          NO      21      3 (+ 12 dev)
    @openmev/utils                           0.3.0          NO      -       3 (+ 23 dev)
    Root                                     0.0.0          yes     N/A     0 (+ 11 dev)

```
## Changelog

[Improvement Change Log](CHANGELOG.md)

## Support

> Where can I get help?

- [Discord support channel](https://openmev.page.link/support-chat)
- [GitHub Issues](https://openmev.page.link/support)

## Security

| Point of contact | Method                      |
| ---------------- | --------------------------- |
| Security         | reports@manifoldfinance.com |

## License

Released under [Apache-2.0](/LICENSE) by
[@manifoldfinance](https://github.com/manifoldfinance).

<!-- Additional information for licenses should be in the SPDX- format -->
