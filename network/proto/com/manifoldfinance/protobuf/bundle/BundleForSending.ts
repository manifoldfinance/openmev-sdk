// Original file: proto/bundle.proto

import type { SignedTransaction as _com_manifoldfinance_protobuf_bundle_SignedTransaction, SignedTransaction__Output as _com_manifoldfinance_protobuf_bundle_SignedTransaction__Output } from '../../../../com/manifoldfinance/protobuf/bundle/SignedTransaction';

export interface BundleForSending {
  'blockNumber'?: (string);
  'parentHash'?: (string);
  'bundleSourceId'?: (string);
  'transactions'?: (_com_manifoldfinance_protobuf_bundle_SignedTransaction)[];
}

export interface BundleForSending__Output {
  'blockNumber': (string);
  'parentHash': (string);
  'bundleSourceId': (string);
  'transactions': (_com_manifoldfinance_protobuf_bundle_SignedTransaction__Output)[];
}
