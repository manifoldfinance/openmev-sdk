// Original file: proto/bundle.proto

import type { Transaction as _com_manifoldfinance_protobuf_eth_Transaction, Transaction__Output as _com_manifoldfinance_protobuf_eth_Transaction__Output } from '../../../../com/manifoldfinance/protobuf/eth/Transaction';

export interface MinerBribe {
  'sender'?: (string);
  'transaction'?: (_com_manifoldfinance_protobuf_eth_Transaction | null);
}

export interface MinerBribe__Output {
  'sender': (string);
  'transaction': (_com_manifoldfinance_protobuf_eth_Transaction__Output | null);
}
