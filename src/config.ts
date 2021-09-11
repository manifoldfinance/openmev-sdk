/* eslint-disable */

/**
* @file OpenMEV SDK Configuration
* @version 0.1.0
* @copyright Manifold Finance, Inc. 2021
* @package openmev-sdk
*/

import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";


export enum SystemConfigId {
  CONFIG_MINER_RELAY = 0,
  UNRECOGNIZED = -1,
}

export function systemConfigIdFromJSON(object: any): SystemConfigId {
  switch (object) {
    case 0:
    case "CONFIG_MINER_RELAY":
      return SystemConfigId.CONFIG_MINER_RELAY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SystemConfigId.UNRECOGNIZED;
  }
}

export function systemConfigIdToJSON(object: SystemConfigId): string {
  switch (object) {
    case SystemConfigId.CONFIG_MINER_RELAY:
      return "CONFIG_MINER_RELAY";
    default:
      return "UNKNOWN";
  }
}

// @TODO add additional SourceIds
//    openmev, keeper, secret
export enum BundleSourceId {
  BATCH_BUNDLER = 0,
  KDB = 1,
  UNRECOGNIZED = -1,
}

export function bundleSourceIdFromJSON(object: any): BundleSourceId {
  switch (object) {
    case 0:
    case "BATCH_BUNDLER":
      return BundleSourceId.BATCH_BUNDLER;
    case 1:
    case "KDB":
      return BundleSourceId.KDB;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BundleSourceId.UNRECOGNIZED;
  }
}

export function bundleSourceIdToJSON(object: BundleSourceId): string {
  switch (object) {
    case BundleSourceId.BATCH_BUNDLER:
      return "BATCH_BUNDLER";
    case BundleSourceId.KDB:
      return "KDB";
    default:
      return "UNKNOWN";
  }
}

export interface SystemConfig {
  key: SystemConfigId;
  /** JSON encoded from db */
  value: string;
  validity: string;
  minerRelaySystemConfig: MinerRelaySystemConfig | undefined;
}

export interface MinerRelaySystemConfig {
  bundleRelayDisabled: boolean;
  allowedBundleSourceId: BundleSourceId;
}

export interface MarketContract {
  id: string;
  name: string;
  /** hex encoded */
  contractAddress: string;
  /** hex encoded */
  factoryAddress: string;
  /** hex encoded */
  codeHash: string;
}

export interface Miner {
  id: string;
  url: string;
  bribeAddress: string;
  validity: string;
}

export interface SenderDeny {
  signer: string;
  reason: string;
  validity: string;
}

export interface SignerDeny {
  sender: string;
  reason: string;
  validity: string;
}

export interface SignerAllow {
  sender: string;
  reason: string;
  validity: string;
}

export interface PlatformAccount {
  address: string;
  name: string;
  isActive: boolean;
  validity: string;
  /** Another account address that will be used as the source of balance updates. Useful for local dev and testing */
  aliasOf?: string | undefined;
}

export interface PlatformToken {
  address: string;
  name: string;
  isActive: boolean;
  validity: string;
}

export interface SushiLiquidityPair {
  id: number;
  address: string;
  baseAddress: string;
  baseSymbol: string;
  baseDecimals: number;
  quoteAddress: string;
  quoteSymbol: string;
  quoteDecimals: number;
  isActive: boolean;
  validity: string;
}

export interface UniLiquidityPair {
  id: number;
  address: string;
  baseAddress: string;
  baseSymbol: string;
  baseDecimals: number;
  quoteAddress: string;
  quoteSymbol: string;
  quoteDecimals: number;
  isActive: boolean;
  validity: string;
}

const baseSystemConfig: object = { key: 0, value: "", validity: "" };

export const SystemConfig = {
  encode(message: SystemConfig, writer: Writer = Writer.create()): Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.validity !== "") {
      writer.uint32(26).string(message.validity);
    }
    if (message.minerRelaySystemConfig !== undefined) {
      MinerRelaySystemConfig.encode(
        message.minerRelaySystemConfig,
        writer.uint32(82).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SystemConfig {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSystemConfig } as SystemConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32() as any;
          break;
        case 2:
          message.value = reader.string();
          break;
        case 3:
          message.validity = reader.string();
          break;
        case 10:
          message.minerRelaySystemConfig = MinerRelaySystemConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SystemConfig {
    const message = { ...baseSystemConfig } as SystemConfig;
    if (object.key !== undefined && object.key !== null) {
      message.key = systemConfigIdFromJSON(object.key);
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = String(object.validity);
    } else {
      message.validity = "";
    }
    if (
      object.minerRelaySystemConfig !== undefined &&
      object.minerRelaySystemConfig !== null
    ) {
      message.minerRelaySystemConfig = MinerRelaySystemConfig.fromJSON(
        object.minerRelaySystemConfig
      );
    } else {
      message.minerRelaySystemConfig = undefined;
    }
    return message;
  },

  toJSON(message: SystemConfig): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = systemConfigIdToJSON(message.key));
    message.value !== undefined && (obj.value = message.value);
    message.validity !== undefined && (obj.validity = message.validity);
    message.minerRelaySystemConfig !== undefined &&
      (obj.minerRelaySystemConfig = message.minerRelaySystemConfig
        ? MinerRelaySystemConfig.toJSON(message.minerRelaySystemConfig)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SystemConfig>): SystemConfig {
    const message = { ...baseSystemConfig } as SystemConfig;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = 0;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = object.validity;
    } else {
      message.validity = "";
    }
    if (
      object.minerRelaySystemConfig !== undefined &&
      object.minerRelaySystemConfig !== null
    ) {
      message.minerRelaySystemConfig = MinerRelaySystemConfig.fromPartial(
        object.minerRelaySystemConfig
      );
    } else {
      message.minerRelaySystemConfig = undefined;
    }
    return message;
  },
};

const baseMinerRelaySystemConfig: object = {
  bundleRelayDisabled: false,
  allowedBundleSourceId: 0,
};

export const MinerRelaySystemConfig = {
  encode(
    message: MinerRelaySystemConfig,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.bundleRelayDisabled === true) {
      writer.uint32(8).bool(message.bundleRelayDisabled);
    }
    if (message.allowedBundleSourceId !== 0) {
      writer.uint32(16).int32(message.allowedBundleSourceId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MinerRelaySystemConfig {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMinerRelaySystemConfig } as MinerRelaySystemConfig;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bundleRelayDisabled = reader.bool();
          break;
        case 2:
          message.allowedBundleSourceId = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MinerRelaySystemConfig {
    const message = { ...baseMinerRelaySystemConfig } as MinerRelaySystemConfig;
    if (
      object.bundleRelayDisabled !== undefined &&
      object.bundleRelayDisabled !== null
    ) {
      message.bundleRelayDisabled = Boolean(object.bundleRelayDisabled);
    } else {
      message.bundleRelayDisabled = false;
    }
    if (
      object.allowedBundleSourceId !== undefined &&
      object.allowedBundleSourceId !== null
    ) {
      message.allowedBundleSourceId = bundleSourceIdFromJSON(
        object.allowedBundleSourceId
      );
    } else {
      message.allowedBundleSourceId = 0;
    }
    return message;
  },

  toJSON(message: MinerRelaySystemConfig): unknown {
    const obj: any = {};
    message.bundleRelayDisabled !== undefined &&
      (obj.bundleRelayDisabled = message.bundleRelayDisabled);
    message.allowedBundleSourceId !== undefined &&
      (obj.allowedBundleSourceId = bundleSourceIdToJSON(
        message.allowedBundleSourceId
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<MinerRelaySystemConfig>
  ): MinerRelaySystemConfig {
    const message = { ...baseMinerRelaySystemConfig } as MinerRelaySystemConfig;
    if (
      object.bundleRelayDisabled !== undefined &&
      object.bundleRelayDisabled !== null
    ) {
      message.bundleRelayDisabled = object.bundleRelayDisabled;
    } else {
      message.bundleRelayDisabled = false;
    }
    if (
      object.allowedBundleSourceId !== undefined &&
      object.allowedBundleSourceId !== null
    ) {
      message.allowedBundleSourceId = object.allowedBundleSourceId;
    } else {
      message.allowedBundleSourceId = 0;
    }
    return message;
  },
};

const baseMarketContract: object = {
  id: "",
  name: "",
  contractAddress: "",
  factoryAddress: "",
  codeHash: "",
};

export const MarketContract = {
  encode(message: MarketContract, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.contractAddress !== "") {
      writer.uint32(26).string(message.contractAddress);
    }
    if (message.factoryAddress !== "") {
      writer.uint32(34).string(message.factoryAddress);
    }
    if (message.codeHash !== "") {
      writer.uint32(42).string(message.codeHash);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MarketContract {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMarketContract } as MarketContract;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.contractAddress = reader.string();
          break;
        case 4:
          message.factoryAddress = reader.string();
          break;
        case 5:
          message.codeHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketContract {
    const message = { ...baseMarketContract } as MarketContract;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = String(object.contractAddress);
    } else {
      message.contractAddress = "";
    }
    if (object.factoryAddress !== undefined && object.factoryAddress !== null) {
      message.factoryAddress = String(object.factoryAddress);
    } else {
      message.factoryAddress = "";
    }
    if (object.codeHash !== undefined && object.codeHash !== null) {
      message.codeHash = String(object.codeHash);
    } else {
      message.codeHash = "";
    }
    return message;
  },

  toJSON(message: MarketContract): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.factoryAddress !== undefined &&
      (obj.factoryAddress = message.factoryAddress);
    message.codeHash !== undefined && (obj.codeHash = message.codeHash);
    return obj;
  },

  fromPartial(object: DeepPartial<MarketContract>): MarketContract {
    const message = { ...baseMarketContract } as MarketContract;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = object.contractAddress;
    } else {
      message.contractAddress = "";
    }
    if (object.factoryAddress !== undefined && object.factoryAddress !== null) {
      message.factoryAddress = object.factoryAddress;
    } else {
      message.factoryAddress = "";
    }
    if (object.codeHash !== undefined && object.codeHash !== null) {
      message.codeHash = object.codeHash;
    } else {
      message.codeHash = "";
    }
    return message;
  },
};

const baseMiner: object = { id: "", url: "", bribeAddress: "", validity: "" };

export const Miner = {
  encode(message: Miner, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.bribeAddress !== "") {
      writer.uint32(26).string(message.bribeAddress);
    }
    if (message.validity !== "") {
      writer.uint32(34).string(message.validity);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Miner {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMiner } as Miner;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.url = reader.string();
          break;
        case 3:
          message.bribeAddress = reader.string();
          break;
        case 4:
          message.validity = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Miner {
    const message = { ...baseMiner } as Miner;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    } else {
      message.url = "";
    }
    if (object.bribeAddress !== undefined && object.bribeAddress !== null) {
      message.bribeAddress = String(object.bribeAddress);
    } else {
      message.bribeAddress = "";
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = String(object.validity);
    } else {
      message.validity = "";
    }
    return message;
  },

  toJSON(message: Miner): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.url !== undefined && (obj.url = message.url);
    message.bribeAddress !== undefined &&
      (obj.bribeAddress = message.bribeAddress);
    message.validity !== undefined && (obj.validity = message.validity);
    return obj;
  },

  fromPartial(object: DeepPartial<Miner>): Miner {
    const message = { ...baseMiner } as Miner;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    } else {
      message.url = "";
    }
    if (object.bribeAddress !== undefined && object.bribeAddress !== null) {
      message.bribeAddress = object.bribeAddress;
    } else {
      message.bribeAddress = "";
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = object.validity;
    } else {
      message.validity = "";
    }
    return message;
  },
};

const baseSenderDeny: object = { signer: "", reason: "", validity: "" };

export const SenderDeny = {
  encode(message: SenderDeny, writer: Writer = Writer.create()): Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    if (message.validity !== "") {
      writer.uint32(26).string(message.validity);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SenderDeny {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSenderDeny } as SenderDeny;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.reason = reader.string();
          break;
        case 3:
          message.validity = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SenderDeny {
    const message = { ...baseSenderDeny } as SenderDeny;
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = String(object.signer);
    } else {
      message.signer = "";
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = String(object.reason);
    } else {
      message.reason = "";
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = String(object.validity);
    } else {
      message.validity = "";
    }
    return message;
  },

  toJSON(message: SenderDeny): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.reason !== undefined && (obj.reason = message.reason);
    message.validity !== undefined && (obj.validity = message.validity);
    return obj;
  },

  fromPartial(object: DeepPartial<SenderDeny>): SenderDeny {
    const message = { ...baseSenderDeny } as SenderDeny;
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    } else {
      message.signer = "";
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    } else {
      message.reason = "";
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = object.validity;
    } else {
      message.validity = "";
    }
    return message;
  },
};

const baseSignerDeny: object = { sender: "", reason: "", validity: "" };

export const SignerDeny = {
  encode(message: SignerDeny, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    if (message.validity !== "") {
      writer.uint32(26).string(message.validity);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SignerDeny {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSignerDeny } as SignerDeny;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.reason = reader.string();
          break;
        case 3:
          message.validity = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignerDeny {
    const message = { ...baseSignerDeny } as SignerDeny;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = String(object.reason);
    } else {
      message.reason = "";
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = String(object.validity);
    } else {
      message.validity = "";
    }
    return message;
  },

  toJSON(message: SignerDeny): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.reason !== undefined && (obj.reason = message.reason);
    message.validity !== undefined && (obj.validity = message.validity);
    return obj;
  },

  fromPartial(object: DeepPartial<SignerDeny>): SignerDeny {
    const message = { ...baseSignerDeny } as SignerDeny;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    } else {
      message.reason = "";
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = object.validity;
    } else {
      message.validity = "";
    }
    return message;
  },
};

const baseSignerAllow: object = { sender: "", reason: "", validity: "" };

export const SignerAllow = {
  encode(message: SignerAllow, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    if (message.validity !== "") {
      writer.uint32(26).string(message.validity);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SignerAllow {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSignerAllow } as SignerAllow;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.reason = reader.string();
          break;
        case 3:
          message.validity = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignerAllow {
    const message = { ...baseSignerAllow } as SignerAllow;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = String(object.reason);
    } else {
      message.reason = "";
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = String(object.validity);
    } else {
      message.validity = "";
    }
    return message;
  },

  toJSON(message: SignerAllow): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.reason !== undefined && (obj.reason = message.reason);
    message.validity !== undefined && (obj.validity = message.validity);
    return obj;
  },

  fromPartial(object: DeepPartial<SignerAllow>): SignerAllow {
    const message = { ...baseSignerAllow } as SignerAllow;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    } else {
      message.reason = "";
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = object.validity;
    } else {
      message.validity = "";
    }
    return message;
  },
};

const basePlatformAccount: object = {
  address: "",
  name: "",
  isActive: false,
  validity: "",
};

export const PlatformAccount = {
  encode(message: PlatformAccount, writer: Writer = Writer.create()): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.isActive === true) {
      writer.uint32(24).bool(message.isActive);
    }
    if (message.validity !== "") {
      writer.uint32(34).string(message.validity);
    }
    if (message.aliasOf !== undefined) {
      writer.uint32(42).string(message.aliasOf);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PlatformAccount {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlatformAccount } as PlatformAccount;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.isActive = reader.bool();
          break;
        case 4:
          message.validity = reader.string();
          break;
        case 5:
          message.aliasOf = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlatformAccount {
    const message = { ...basePlatformAccount } as PlatformAccount;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = Boolean(object.isActive);
    } else {
      message.isActive = false;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = String(object.validity);
    } else {
      message.validity = "";
    }
    if (object.aliasOf !== undefined && object.aliasOf !== null) {
      message.aliasOf = String(object.aliasOf);
    } else {
      message.aliasOf = undefined;
    }
    return message;
  },

  toJSON(message: PlatformAccount): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.name !== undefined && (obj.name = message.name);
    message.isActive !== undefined && (obj.isActive = message.isActive);
    message.validity !== undefined && (obj.validity = message.validity);
    message.aliasOf !== undefined && (obj.aliasOf = message.aliasOf);
    return obj;
  },

  fromPartial(object: DeepPartial<PlatformAccount>): PlatformAccount {
    const message = { ...basePlatformAccount } as PlatformAccount;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = object.isActive;
    } else {
      message.isActive = false;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = object.validity;
    } else {
      message.validity = "";
    }
    if (object.aliasOf !== undefined && object.aliasOf !== null) {
      message.aliasOf = object.aliasOf;
    } else {
      message.aliasOf = undefined;
    }
    return message;
  },
};

const basePlatformToken: object = {
  address: "",
  name: "",
  isActive: false,
  validity: "",
};

export const PlatformToken = {
  encode(message: PlatformToken, writer: Writer = Writer.create()): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.isActive === true) {
      writer.uint32(24).bool(message.isActive);
    }
    if (message.validity !== "") {
      writer.uint32(34).string(message.validity);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PlatformToken {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePlatformToken } as PlatformToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.isActive = reader.bool();
          break;
        case 4:
          message.validity = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlatformToken {
    const message = { ...basePlatformToken } as PlatformToken;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = Boolean(object.isActive);
    } else {
      message.isActive = false;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = String(object.validity);
    } else {
      message.validity = "";
    }
    return message;
  },

  toJSON(message: PlatformToken): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.name !== undefined && (obj.name = message.name);
    message.isActive !== undefined && (obj.isActive = message.isActive);
    message.validity !== undefined && (obj.validity = message.validity);
    return obj;
  },

  fromPartial(object: DeepPartial<PlatformToken>): PlatformToken {
    const message = { ...basePlatformToken } as PlatformToken;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = object.isActive;
    } else {
      message.isActive = false;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = object.validity;
    } else {
      message.validity = "";
    }
    return message;
  },
};

const baseSushiLiquidityPair: object = {
  id: 0,
  address: "",
  baseAddress: "",
  baseSymbol: "",
  baseDecimals: 0,
  quoteAddress: "",
  quoteSymbol: "",
  quoteDecimals: 0,
  isActive: false,
  validity: "",
};

export const SushiLiquidityPair = {
  encode(
    message: SushiLiquidityPair,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.baseAddress !== "") {
      writer.uint32(26).string(message.baseAddress);
    }
    if (message.baseSymbol !== "") {
      writer.uint32(34).string(message.baseSymbol);
    }
    if (message.baseDecimals !== 0) {
      writer.uint32(40).int32(message.baseDecimals);
    }
    if (message.quoteAddress !== "") {
      writer.uint32(50).string(message.quoteAddress);
    }
    if (message.quoteSymbol !== "") {
      writer.uint32(58).string(message.quoteSymbol);
    }
    if (message.quoteDecimals !== 0) {
      writer.uint32(64).int32(message.quoteDecimals);
    }
    if (message.isActive === true) {
      writer.uint32(72).bool(message.isActive);
    }
    if (message.validity !== "") {
      writer.uint32(82).string(message.validity);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SushiLiquidityPair {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSushiLiquidityPair } as SushiLiquidityPair;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.baseAddress = reader.string();
          break;
        case 4:
          message.baseSymbol = reader.string();
          break;
        case 5:
          message.baseDecimals = reader.int32();
          break;
        case 6:
          message.quoteAddress = reader.string();
          break;
        case 7:
          message.quoteSymbol = reader.string();
          break;
        case 8:
          message.quoteDecimals = reader.int32();
          break;
        case 9:
          message.isActive = reader.bool();
          break;
        case 10:
          message.validity = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SushiLiquidityPair {
    const message = { ...baseSushiLiquidityPair } as SushiLiquidityPair;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.baseAddress !== undefined && object.baseAddress !== null) {
      message.baseAddress = String(object.baseAddress);
    } else {
      message.baseAddress = "";
    }
    if (object.baseSymbol !== undefined && object.baseSymbol !== null) {
      message.baseSymbol = String(object.baseSymbol);
    } else {
      message.baseSymbol = "";
    }
    if (object.baseDecimals !== undefined && object.baseDecimals !== null) {
      message.baseDecimals = Number(object.baseDecimals);
    } else {
      message.baseDecimals = 0;
    }
    if (object.quoteAddress !== undefined && object.quoteAddress !== null) {
      message.quoteAddress = String(object.quoteAddress);
    } else {
      message.quoteAddress = "";
    }
    if (object.quoteSymbol !== undefined && object.quoteSymbol !== null) {
      message.quoteSymbol = String(object.quoteSymbol);
    } else {
      message.quoteSymbol = "";
    }
    if (object.quoteDecimals !== undefined && object.quoteDecimals !== null) {
      message.quoteDecimals = Number(object.quoteDecimals);
    } else {
      message.quoteDecimals = 0;
    }
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = Boolean(object.isActive);
    } else {
      message.isActive = false;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = String(object.validity);
    } else {
      message.validity = "";
    }
    return message;
  },

  toJSON(message: SushiLiquidityPair): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.address !== undefined && (obj.address = message.address);
    message.baseAddress !== undefined &&
      (obj.baseAddress = message.baseAddress);
    message.baseSymbol !== undefined && (obj.baseSymbol = message.baseSymbol);
    message.baseDecimals !== undefined &&
      (obj.baseDecimals = message.baseDecimals);
    message.quoteAddress !== undefined &&
      (obj.quoteAddress = message.quoteAddress);
    message.quoteSymbol !== undefined &&
      (obj.quoteSymbol = message.quoteSymbol);
    message.quoteDecimals !== undefined &&
      (obj.quoteDecimals = message.quoteDecimals);
    message.isActive !== undefined && (obj.isActive = message.isActive);
    message.validity !== undefined && (obj.validity = message.validity);
    return obj;
  },

  fromPartial(object: DeepPartial<SushiLiquidityPair>): SushiLiquidityPair {
    const message = { ...baseSushiLiquidityPair } as SushiLiquidityPair;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.baseAddress !== undefined && object.baseAddress !== null) {
      message.baseAddress = object.baseAddress;
    } else {
      message.baseAddress = "";
    }
    if (object.baseSymbol !== undefined && object.baseSymbol !== null) {
      message.baseSymbol = object.baseSymbol;
    } else {
      message.baseSymbol = "";
    }
    if (object.baseDecimals !== undefined && object.baseDecimals !== null) {
      message.baseDecimals = object.baseDecimals;
    } else {
      message.baseDecimals = 0;
    }
    if (object.quoteAddress !== undefined && object.quoteAddress !== null) {
      message.quoteAddress = object.quoteAddress;
    } else {
      message.quoteAddress = "";
    }
    if (object.quoteSymbol !== undefined && object.quoteSymbol !== null) {
      message.quoteSymbol = object.quoteSymbol;
    } else {
      message.quoteSymbol = "";
    }
    if (object.quoteDecimals !== undefined && object.quoteDecimals !== null) {
      message.quoteDecimals = object.quoteDecimals;
    } else {
      message.quoteDecimals = 0;
    }
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = object.isActive;
    } else {
      message.isActive = false;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = object.validity;
    } else {
      message.validity = "";
    }
    return message;
  },
};

const baseUniLiquidityPair: object = {
  id: 0,
  address: "",
  baseAddress: "",
  baseSymbol: "",
  baseDecimals: 0,
  quoteAddress: "",
  quoteSymbol: "",
  quoteDecimals: 0,
  isActive: false,
  validity: "",
};

export const UniLiquidityPair = {
  encode(message: UniLiquidityPair, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.baseAddress !== "") {
      writer.uint32(26).string(message.baseAddress);
    }
    if (message.baseSymbol !== "") {
      writer.uint32(34).string(message.baseSymbol);
    }
    if (message.baseDecimals !== 0) {
      writer.uint32(40).int32(message.baseDecimals);
    }
    if (message.quoteAddress !== "") {
      writer.uint32(50).string(message.quoteAddress);
    }
    if (message.quoteSymbol !== "") {
      writer.uint32(58).string(message.quoteSymbol);
    }
    if (message.quoteDecimals !== 0) {
      writer.uint32(64).int32(message.quoteDecimals);
    }
    if (message.isActive === true) {
      writer.uint32(72).bool(message.isActive);
    }
    if (message.validity !== "") {
      writer.uint32(82).string(message.validity);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UniLiquidityPair {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUniLiquidityPair } as UniLiquidityPair;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.baseAddress = reader.string();
          break;
        case 4:
          message.baseSymbol = reader.string();
          break;
        case 5:
          message.baseDecimals = reader.int32();
          break;
        case 6:
          message.quoteAddress = reader.string();
          break;
        case 7:
          message.quoteSymbol = reader.string();
          break;
        case 8:
          message.quoteDecimals = reader.int32();
          break;
        case 9:
          message.isActive = reader.bool();
          break;
        case 10:
          message.validity = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UniLiquidityPair {
    const message = { ...baseUniLiquidityPair } as UniLiquidityPair;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.baseAddress !== undefined && object.baseAddress !== null) {
      message.baseAddress = String(object.baseAddress);
    } else {
      message.baseAddress = "";
    }
    if (object.baseSymbol !== undefined && object.baseSymbol !== null) {
      message.baseSymbol = String(object.baseSymbol);
    } else {
      message.baseSymbol = "";
    }
    if (object.baseDecimals !== undefined && object.baseDecimals !== null) {
      message.baseDecimals = Number(object.baseDecimals);
    } else {
      message.baseDecimals = 0;
    }
    if (object.quoteAddress !== undefined && object.quoteAddress !== null) {
      message.quoteAddress = String(object.quoteAddress);
    } else {
      message.quoteAddress = "";
    }
    if (object.quoteSymbol !== undefined && object.quoteSymbol !== null) {
      message.quoteSymbol = String(object.quoteSymbol);
    } else {
      message.quoteSymbol = "";
    }
    if (object.quoteDecimals !== undefined && object.quoteDecimals !== null) {
      message.quoteDecimals = Number(object.quoteDecimals);
    } else {
      message.quoteDecimals = 0;
    }
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = Boolean(object.isActive);
    } else {
      message.isActive = false;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = String(object.validity);
    } else {
      message.validity = "";
    }
    return message;
  },

  toJSON(message: UniLiquidityPair): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.address !== undefined && (obj.address = message.address);
    message.baseAddress !== undefined &&
      (obj.baseAddress = message.baseAddress);
    message.baseSymbol !== undefined && (obj.baseSymbol = message.baseSymbol);
    message.baseDecimals !== undefined &&
      (obj.baseDecimals = message.baseDecimals);
    message.quoteAddress !== undefined &&
      (obj.quoteAddress = message.quoteAddress);
    message.quoteSymbol !== undefined &&
      (obj.quoteSymbol = message.quoteSymbol);
    message.quoteDecimals !== undefined &&
      (obj.quoteDecimals = message.quoteDecimals);
    message.isActive !== undefined && (obj.isActive = message.isActive);
    message.validity !== undefined && (obj.validity = message.validity);
    return obj;
  },

  fromPartial(object: DeepPartial<UniLiquidityPair>): UniLiquidityPair {
    const message = { ...baseUniLiquidityPair } as UniLiquidityPair;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.baseAddress !== undefined && object.baseAddress !== null) {
      message.baseAddress = object.baseAddress;
    } else {
      message.baseAddress = "";
    }
    if (object.baseSymbol !== undefined && object.baseSymbol !== null) {
      message.baseSymbol = object.baseSymbol;
    } else {
      message.baseSymbol = "";
    }
    if (object.baseDecimals !== undefined && object.baseDecimals !== null) {
      message.baseDecimals = object.baseDecimals;
    } else {
      message.baseDecimals = 0;
    }
    if (object.quoteAddress !== undefined && object.quoteAddress !== null) {
      message.quoteAddress = object.quoteAddress;
    } else {
      message.quoteAddress = "";
    }
    if (object.quoteSymbol !== undefined && object.quoteSymbol !== null) {
      message.quoteSymbol = object.quoteSymbol;
    } else {
      message.quoteSymbol = "";
    }
    if (object.quoteDecimals !== undefined && object.quoteDecimals !== null) {
      message.quoteDecimals = object.quoteDecimals;
    } else {
      message.quoteDecimals = 0;
    }
    if (object.isActive !== undefined && object.isActive !== null) {
      message.isActive = object.isActive;
    } else {
      message.isActive = false;
    }
    if (object.validity !== undefined && object.validity !== null) {
      message.validity = object.validity;
    } else {
      message.validity = "";
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
// @ts-ignore 
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
