// Original file: proto/config.proto

import type { Long } from '@grpc/proto-loader';

export interface UniLiquidityPair {
  'id'?: (number | string | Long);
  'address'?: (string);
  'baseAddress'?: (string);
  'baseSymbol'?: (string);
  'baseDecimals'?: (number);
  'quoteAddress'?: (string);
  'quoteSymbol'?: (string);
  'quoteDecimals'?: (number);
  'isActive'?: (boolean);
  'validity'?: (string);
}

export interface UniLiquidityPair__Output {
  'id': (string);
  'address': (string);
  'baseAddress': (string);
  'baseSymbol': (string);
  'baseDecimals': (number);
  'quoteAddress': (string);
  'quoteSymbol': (string);
  'quoteDecimals': (number);
  'isActive': (boolean);
  'validity': (string);
}
