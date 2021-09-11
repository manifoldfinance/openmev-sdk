// Original file: proto/eth.proto

import type { TransactionReceipt as _com_manifoldfinance_protobuf_eth_TransactionReceipt, TransactionReceipt__Output as _com_manifoldfinance_protobuf_eth_TransactionReceipt__Output } from '../../../../com/manifoldfinance/protobuf/eth/TransactionReceipt';

export interface BlockReceipts {
  'blockNumber'?: (string);
  'receipts'?: (_com_manifoldfinance_protobuf_eth_TransactionReceipt)[];
}

export interface BlockReceipts__Output {
  'blockNumber': (string);
  'receipts': (_com_manifoldfinance_protobuf_eth_TransactionReceipt__Output)[];
}
