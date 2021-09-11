// Original file: proto/sushi.proto

import type { Long } from '@grpc/proto-loader';

export interface SushiLiquidity {
  'id'?: (number | string | Long);
  'contractAddress'?: (string);
  'baseDecimals'?: (number);
  'baseReserve'?: (string);
  'quoteDecimals'?: (number);
  'quoteReserve'?: (string);
  'blockTimestamp'?: (number | string | Long);
}

export interface SushiLiquidity__Output {
  'id': (string);
  'contractAddress': (string);
  'baseDecimals': (number);
  'baseReserve': (string);
  'quoteDecimals': (number);
  'quoteReserve': (string);
  'blockTimestamp': (string);
}
