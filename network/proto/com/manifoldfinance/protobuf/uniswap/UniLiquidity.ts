// Original file: proto/uni.proto

import type { Long } from '@grpc/proto-loader';

export interface UniLiquidity {
  'id'?: (number | string | Long);
  'contractAddress'?: (string);
  'baseDecimals'?: (number);
  'baseReserve'?: (string);
  'quoteDecimals'?: (number);
  'quoteReserve'?: (string);
  'blockTimestamp'?: (number | string | Long);
}

export interface UniLiquidity__Output {
  'id': (string);
  'contractAddress': (string);
  'baseDecimals': (number);
  'baseReserve': (string);
  'quoteDecimals': (number);
  'quoteReserve': (string);
  'blockTimestamp': (string);
}
