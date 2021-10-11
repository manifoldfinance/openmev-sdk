import { providers } from "ethers";

//  Wrap with Web3Provider from ethers.js
const web3Provider = new providers.Web3Provider(provider);


import WalletConnectProvider from "@walletconnect/web3-provider";

//  Create WalletConnect Provider
const provider = new WalletConnectProvider({
  rpc: {
    1: "https://api.staging.sushirelay.com/v1"
  },
  qrcodeModalOptions: {
    mobileLinks: ["rainbow", "metamask", "argent", "trust", "imtoken", "pillar", "dharma", "gnosissafe", "ledgerlive", "1inch", "GridPlus", "Torus"],
},
});

//  Enable session (triggers QR Code modal)
await provider.enable();


// Subscribe to accounts change
provider.on("accountsChanged", (accounts: string[]) => {
  console.log(accounts);
});

// Subscribe to chainId change
provider.on("chainChanged", (chainId: number) => {
  console.log(chainId);
});

// Subscribe to session disconnection
provider.on("disconnect", (code: number, reason: string) => {
  console.log(code, reason);
});
