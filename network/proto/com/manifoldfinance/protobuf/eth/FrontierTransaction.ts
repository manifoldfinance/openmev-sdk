// Original file: proto/eth.proto

import type { Long } from '@grpc/proto-loader';

export interface FrontierTransaction {
  'value'?: (string);
  'input'?: (string);
  'nonce'?: (number | string | Long);
  'gasPrice'?: (string);
  'gasLimit'?: (number | string | Long);
  'v'?: (string);
  'r'?: (string);
  's'?: (string);
  'to'?: (string);
  'chainId'?: (string);
  'sender'?: (string);
  '_v'?: "v";
  '_r'?: "r";
  '_s'?: "s";
  '_to'?: "to";
  '_chainId'?: "chainId";
  '_sender'?: "sender";
}

export interface FrontierTransaction__Output {
  'value': (string);
  'input': (string);
  'nonce': (string);
  'gasPrice': (string);
  'gasLimit': (string);
  'v'?: (string);
  'r'?: (string);
  's'?: (string);
  'to'?: (string);
  'chainId'?: (string);
  'sender'?: (string);
  '_v': "v";
  '_r': "r";
  '_s': "s";
  '_to': "to";
  '_chainId': "chainId";
  '_sender': "sender";
}
