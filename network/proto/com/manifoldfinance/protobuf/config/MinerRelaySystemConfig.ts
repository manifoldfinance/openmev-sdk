// Original file: proto/config.proto

import type { BundleSourceId as _com_manifoldfinance_protobuf_config_BundleSourceId } from '../../../../com/manifoldfinance/protobuf/config/BundleSourceId';

export interface MinerRelaySystemConfig {
  'bundleRelayDisabled'?: (boolean);
  'allowedBundleSourceId'?: (_com_manifoldfinance_protobuf_config_BundleSourceId | keyof typeof _com_manifoldfinance_protobuf_config_BundleSourceId);
}

export interface MinerRelaySystemConfig__Output {
  'bundleRelayDisabled': (boolean);
  'allowedBundleSourceId': (keyof typeof _com_manifoldfinance_protobuf_config_BundleSourceId);
}
