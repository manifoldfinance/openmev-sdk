// Original file: proto/gas.proto

import type { EstimatedGasPrice as _com_manifoldfinance_protobuf_gas_EstimatedGasPrice, EstimatedGasPrice__Output as _com_manifoldfinance_protobuf_gas_EstimatedGasPrice__Output } from '../../../../com/manifoldfinance/protobuf/gas/EstimatedGasPrice';
import type { Long } from '@grpc/proto-loader';

export interface BlockPrice {
  'blockNumber'?: (string);
  'estimatedTransactionCount'?: (number);
  'baseFeePerGas'?: (number | string | Long);
  'estimatedPrices'?: (_com_manifoldfinance_protobuf_gas_EstimatedGasPrice)[];
}

export interface BlockPrice__Output {
  'blockNumber': (string);
  'estimatedTransactionCount': (number);
  'baseFeePerGas': (string);
  'estimatedPrices': (_com_manifoldfinance_protobuf_gas_EstimatedGasPrice__Output)[];
}
