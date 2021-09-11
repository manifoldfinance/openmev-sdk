// Original file: proto/uni.proto

import type { UniLiquidity as _com_manifoldfinance_protobuf_uniswap_UniLiquidity, UniLiquidity__Output as _com_manifoldfinance_protobuf_uniswap_UniLiquidity__Output } from '../../../../com/manifoldfinance/protobuf/uniswap/UniLiquidity';

export interface BlockUniLiquidity {
  'blockNumber'?: (string);
  'liquidity'?: (_com_manifoldfinance_protobuf_uniswap_UniLiquidity)[];
}

export interface BlockUniLiquidity__Output {
  'blockNumber': (string);
  'liquidity': (_com_manifoldfinance_protobuf_uniswap_UniLiquidity__Output)[];
}
