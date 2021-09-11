// Original file: proto/eth.proto

import type { TransactionLog as _com_manifoldfinance_protobuf_eth_TransactionLog, TransactionLog__Output as _com_manifoldfinance_protobuf_eth_TransactionLog__Output } from '../../../../com/manifoldfinance/protobuf/eth/TransactionLog';
import type { Long } from '@grpc/proto-loader';

export interface TransactionReceipt {
  'status'?: (boolean);
  'blockHash'?: (string);
  'blockNumber'?: (string);
  'transactionHash'?: (string);
  'transactionIndex'?: (number);
  'from'?: (string);
  'cumulativeGasUsed'?: (number | string | Long);
  'gasUsed'?: (number | string | Long);
  'logsBloom'?: (string);
  'logs'?: (_com_manifoldfinance_protobuf_eth_TransactionLog)[];
  'error'?: (string);
  'type'?: (string);
  'to'?: (string);
  'contractAddress'?: (string);
  '_error'?: "error";
  '_type'?: "type";
  '_to'?: "to";
  '_contractAddress'?: "contractAddress";
}

export interface TransactionReceipt__Output {
  'status': (boolean);
  'blockHash': (string);
  'blockNumber': (string);
  'transactionHash': (string);
  'transactionIndex': (number);
  'from': (string);
  'cumulativeGasUsed': (string);
  'gasUsed': (string);
  'logsBloom': (string);
  'logs': (_com_manifoldfinance_protobuf_eth_TransactionLog__Output)[];
  'error'?: (string);
  'type'?: (string);
  'to'?: (string);
  'contractAddress'?: (string);
  '_error': "error";
  '_type': "type";
  '_to': "to";
  '_contractAddress': "contractAddress";
}
