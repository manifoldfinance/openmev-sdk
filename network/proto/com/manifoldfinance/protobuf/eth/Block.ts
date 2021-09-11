// Original file: proto/eth.proto

import type { BlockHeader as _com_manifoldfinance_protobuf_eth_BlockHeader, BlockHeader__Output as _com_manifoldfinance_protobuf_eth_BlockHeader__Output } from '../../../../com/manifoldfinance/protobuf/eth/BlockHeader';
import type { Transaction as _com_manifoldfinance_protobuf_eth_Transaction, Transaction__Output as _com_manifoldfinance_protobuf_eth_Transaction__Output } from '../../../../com/manifoldfinance/protobuf/eth/Transaction';

export interface Block {
  'header'?: (_com_manifoldfinance_protobuf_eth_BlockHeader | null);
  'transactions'?: (_com_manifoldfinance_protobuf_eth_Transaction)[];
}

export interface Block__Output {
  'header': (_com_manifoldfinance_protobuf_eth_BlockHeader__Output | null);
  'transactions': (_com_manifoldfinance_protobuf_eth_Transaction__Output)[];
}
