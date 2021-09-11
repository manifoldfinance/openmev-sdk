// Original file: proto/gas.proto

import type { BlockPrice as _com_manifoldfinance_protobuf_gas_BlockPrice, BlockPrice__Output as _com_manifoldfinance_protobuf_gas_BlockPrice__Output } from '../../../../com/manifoldfinance/protobuf/gas/BlockPrice';

export interface GasPrices {
  'system'?: (string);
  'network'?: (string);
  'unit'?: (string);
  'maxPrice'?: (number);
  'currentBlockNumber'?: (string);
  'msSinceLastBlock'?: (number);
  'blockPrices'?: (_com_manifoldfinance_protobuf_gas_BlockPrice)[];
}

export interface GasPrices__Output {
  'system': (string);
  'network': (string);
  'unit': (string);
  'maxPrice': (number);
  'currentBlockNumber': (string);
  'msSinceLastBlock': (number);
  'blockPrices': (_com_manifoldfinance_protobuf_gas_BlockPrice__Output)[];
}
