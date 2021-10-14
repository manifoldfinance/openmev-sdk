import Web3 from "web3";

//  Create Web3 instance
const web3 = new Web3(provider);
const Web3HttpProvider = require('web3-providers-http');

import WalletConnectProvider from "@walletconnect/web3-provider";

/**
 * @const provider
 * Create WalletConnect Provider
 *
 *
*/
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
