// Original file: proto/config.proto

import type { SystemConfigId as _com_manifoldfinance_protobuf_config_SystemConfigId } from '../../../../com/manifoldfinance/protobuf/config/SystemConfigId';
import type { MinerRelaySystemConfig as _com_manifoldfinance_protobuf_config_MinerRelaySystemConfig, MinerRelaySystemConfig__Output as _com_manifoldfinance_protobuf_config_MinerRelaySystemConfig__Output } from '../../../../com/manifoldfinance/protobuf/config/MinerRelaySystemConfig';

export interface SystemConfig {
  'key'?: (_com_manifoldfinance_protobuf_config_SystemConfigId | keyof typeof _com_manifoldfinance_protobuf_config_SystemConfigId);
  'value'?: (string);
  'validity'?: (string);
  'minerRelaySystemConfig'?: (_com_manifoldfinance_protobuf_config_MinerRelaySystemConfig | null);
  'config'?: "minerRelaySystemConfig";
}

export interface SystemConfig__Output {
  'key': (keyof typeof _com_manifoldfinance_protobuf_config_SystemConfigId);
  'value': (string);
  'validity': (string);
  'minerRelaySystemConfig'?: (_com_manifoldfinance_protobuf_config_MinerRelaySystemConfig__Output | null);
  'config': "minerRelaySystemConfig";
}
