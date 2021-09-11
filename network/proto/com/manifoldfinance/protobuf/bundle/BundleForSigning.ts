// Original file: proto/bundle.proto

import type { MinerBribe as _com_manifoldfinance_protobuf_bundle_MinerBribe, MinerBribe__Output as _com_manifoldfinance_protobuf_bundle_MinerBribe__Output } from '../../../../com/manifoldfinance/protobuf/bundle/MinerBribe';
import type { AccountBalance as _com_manifoldfinance_protobuf_eth_AccountBalance, AccountBalance__Output as _com_manifoldfinance_protobuf_eth_AccountBalance__Output } from '../../../../com/manifoldfinance/protobuf/eth/AccountBalance';
import type { Action as _com_manifoldfinance_protobuf_bundle_Action, Action__Output as _com_manifoldfinance_protobuf_bundle_Action__Output } from '../../../../com/manifoldfinance/protobuf/bundle/Action';

export interface BundleForSigning {
  'blockNumber'?: (string);
  'parentHash'?: (string);
  'bundleSourceId'?: (string);
  'minerBribe'?: (_com_manifoldfinance_protobuf_bundle_MinerBribe | null);
  'expectedMinAccountBalances'?: (_com_manifoldfinance_protobuf_eth_AccountBalance)[];
  'actions'?: (_com_manifoldfinance_protobuf_bundle_Action)[];
}

export interface BundleForSigning__Output {
  'blockNumber': (string);
  'parentHash': (string);
  'bundleSourceId': (string);
  'minerBribe': (_com_manifoldfinance_protobuf_bundle_MinerBribe__Output | null);
  'expectedMinAccountBalances': (_com_manifoldfinance_protobuf_eth_AccountBalance__Output)[];
  'actions': (_com_manifoldfinance_protobuf_bundle_Action__Output)[];
}
