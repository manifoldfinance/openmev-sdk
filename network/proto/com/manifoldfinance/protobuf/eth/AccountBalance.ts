// Original file: proto/eth.proto

import type { TokenBalance as _com_manifoldfinance_protobuf_eth_TokenBalance, TokenBalance__Output as _com_manifoldfinance_protobuf_eth_TokenBalance__Output } from '../../../../com/manifoldfinance/protobuf/eth/TokenBalance';

export interface AccountBalance {
  'address'?: (string);
  'nonce'?: (string);
  'ether'?: (string);
  'isExternallyOwned'?: (boolean);
  'tokenBalances'?: (_com_manifoldfinance_protobuf_eth_TokenBalance)[];
  '_nonce'?: "nonce";
  '_isExternallyOwned'?: "isExternallyOwned";
}

export interface AccountBalance__Output {
  'address': (string);
  'nonce'?: (string);
  'ether': (string);
  'isExternallyOwned'?: (boolean);
  'tokenBalances': (_com_manifoldfinance_protobuf_eth_TokenBalance__Output)[];
  '_nonce': "nonce";
  '_isExternallyOwned': "isExternallyOwned";
}
