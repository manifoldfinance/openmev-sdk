// Original file: proto/eth.proto

import type { AccountBalance as _com_manifoldfinance_protobuf_eth_AccountBalance, AccountBalance__Output as _com_manifoldfinance_protobuf_eth_AccountBalance__Output } from '../../../../com/manifoldfinance/protobuf/eth/AccountBalance';

export interface BlockAccountBalances {
  'blockNumber'?: (string);
  'balances'?: (_com_manifoldfinance_protobuf_eth_AccountBalance)[];
}

export interface BlockAccountBalances__Output {
  'blockNumber': (string);
  'balances': (_com_manifoldfinance_protobuf_eth_AccountBalance__Output)[];
}
