// Original file: proto/bundle.proto

import type { SignedTransaction as _com_manifoldfinance_protobuf_bundle_SignedTransaction, SignedTransaction__Output as _com_manifoldfinance_protobuf_bundle_SignedTransaction__Output } from '../../../../com/manifoldfinance/protobuf/bundle/SignedTransaction';
import type { PlatformTransaction as _com_manifoldfinance_protobuf_bundle_PlatformTransaction, PlatformTransaction__Output as _com_manifoldfinance_protobuf_bundle_PlatformTransaction__Output } from '../../../../com/manifoldfinance/protobuf/bundle/PlatformTransaction';

export interface Action {
  'signedTransaction'?: (_com_manifoldfinance_protobuf_bundle_SignedTransaction | null);
  'platformTransaction'?: (_com_manifoldfinance_protobuf_bundle_PlatformTransaction | null);
  'transaction'?: "signedTransaction"|"platformTransaction";
}

export interface Action__Output {
  'signedTransaction'?: (_com_manifoldfinance_protobuf_bundle_SignedTransaction__Output | null);
  'platformTransaction'?: (_com_manifoldfinance_protobuf_bundle_PlatformTransaction__Output | null);
  'transaction': "signedTransaction"|"platformTransaction";
}
