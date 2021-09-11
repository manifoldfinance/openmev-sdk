// Original file: proto/eth.proto

import type { AccessListEntry as _com_manifoldfinance_protobuf_eth_AccessListEntry, AccessListEntry__Output as _com_manifoldfinance_protobuf_eth_AccessListEntry__Output } from '../../../../com/manifoldfinance/protobuf/eth/AccessListEntry';
import type { Long } from '@grpc/proto-loader';

export interface EIP1559Transaction {
  'chainId'?: (string);
  'value'?: (string);
  'input'?: (string);
  'nonce'?: (number | string | Long);
  'maxPriorityFeePerGas'?: (string);
  'maxFeePerGas'?: (string);
  'gasLimit'?: (number | string | Long);
  'accessList'?: (_com_manifoldfinance_protobuf_eth_AccessListEntry)[];
  'v'?: (number);
  'r'?: (string);
  's'?: (string);
  'to'?: (string);
  'sender'?: (string);
  '_v'?: "v";
  '_r'?: "r";
  '_s'?: "s";
  '_to'?: "to";
  '_sender'?: "sender";
}

export interface EIP1559Transaction__Output {
  'chainId': (string);
  'value': (string);
  'input': (string);
  'nonce': (string);
  'maxPriorityFeePerGas': (string);
  'maxFeePerGas': (string);
  'gasLimit': (string);
  'accessList': (_com_manifoldfinance_protobuf_eth_AccessListEntry__Output)[];
  'v'?: (number);
  'r'?: (string);
  's'?: (string);
  'to'?: (string);
  'sender'?: (string);
  '_v': "v";
  '_r': "r";
  '_s': "s";
  '_to': "to";
  '_sender': "sender";
}
