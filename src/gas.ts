/* eslint-disable */

/**
* @file Gas Pricing Integration
* @version 0.1.0
* @copyright Manifold Finance, Inc. 2021
* @package openmev-sdk
* @access api.txprice.com
*/


import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";


export interface EstimatedGasPrice {
  confidence: number;
  price: number;
  maxPriorityFeePerGas: number;
  maxFeePerGas: number;
}

export interface BlockPrice {
  /** hex encoded */
  blockNumber: string;
  estimatedTransactionCount: number;
  baseFeePerGas: number;
  estimatedPrices: EstimatedGasPrice[];
}

export interface GasPrices {
  system: string;
  network: string;
  unit: string;
  maxPrice: number;
  /** hex encoded */
  currentBlockNumber: string;
  msSinceLastBlock: number;
  blockPrices: BlockPrice[];
}

const baseEstimatedGasPrice: object = {
  confidence: 0,
  price: 0,
  maxPriorityFeePerGas: 0,
  maxFeePerGas: 0,
};

export const EstimatedGasPrice = {
  encode(message: EstimatedGasPrice, writer: Writer = Writer.create()): Writer {
    if (message.confidence !== 0) {
      writer.uint32(8).int32(message.confidence);
    }
    if (message.price !== 0) {
      writer.uint32(16).int32(message.price);
    }
    if (message.maxPriorityFeePerGas !== 0) {
      writer.uint32(29).float(message.maxPriorityFeePerGas);
    }
    if (message.maxFeePerGas !== 0) {
      writer.uint32(37).float(message.maxFeePerGas);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EstimatedGasPrice {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEstimatedGasPrice } as EstimatedGasPrice;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confidence = reader.int32();
          break;
        case 2:
          message.price = reader.int32();
          break;
        case 3:
          message.maxPriorityFeePerGas = reader.float();
          break;
        case 4:
          message.maxFeePerGas = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimatedGasPrice {
    const message = { ...baseEstimatedGasPrice } as EstimatedGasPrice;
    if (object.confidence !== undefined && object.confidence !== null) {
      message.confidence = Number(object.confidence);
    } else {
      message.confidence = 0;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Number(object.price);
    } else {
      message.price = 0;
    }
    if (
      object.maxPriorityFeePerGas !== undefined &&
      object.maxPriorityFeePerGas !== null
    ) {
      message.maxPriorityFeePerGas = Number(object.maxPriorityFeePerGas);
    } else {
      message.maxPriorityFeePerGas = 0;
    }
    if (object.maxFeePerGas !== undefined && object.maxFeePerGas !== null) {
      message.maxFeePerGas = Number(object.maxFeePerGas);
    } else {
      message.maxFeePerGas = 0;
    }
    return message;
  },

  toJSON(message: EstimatedGasPrice): unknown {
    const obj: any = {};
    message.confidence !== undefined && (obj.confidence = message.confidence);
    message.price !== undefined && (obj.price = message.price);
    message.maxPriorityFeePerGas !== undefined &&
      (obj.maxPriorityFeePerGas = message.maxPriorityFeePerGas);
    message.maxFeePerGas !== undefined &&
      (obj.maxFeePerGas = message.maxFeePerGas);
    return obj;
  },

  fromPartial(object: DeepPartial<EstimatedGasPrice>): EstimatedGasPrice {
    const message = { ...baseEstimatedGasPrice } as EstimatedGasPrice;
    if (object.confidence !== undefined && object.confidence !== null) {
      message.confidence = object.confidence;
    } else {
      message.confidence = 0;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    } else {
      message.price = 0;
    }
    if (
      object.maxPriorityFeePerGas !== undefined &&
      object.maxPriorityFeePerGas !== null
    ) {
      message.maxPriorityFeePerGas = object.maxPriorityFeePerGas;
    } else {
      message.maxPriorityFeePerGas = 0;
    }
    if (object.maxFeePerGas !== undefined && object.maxFeePerGas !== null) {
      message.maxFeePerGas = object.maxFeePerGas;
    } else {
      message.maxFeePerGas = 0;
    }
    return message;
  },
};

const baseBlockPrice: object = {
  blockNumber: "",
  estimatedTransactionCount: 0,
  baseFeePerGas: 0,
};

export const BlockPrice = {
  encode(message: BlockPrice, writer: Writer = Writer.create()): Writer {
    if (message.blockNumber !== "") {
      writer.uint32(10).string(message.blockNumber);
    }
    if (message.estimatedTransactionCount !== 0) {
      writer.uint32(16).int32(message.estimatedTransactionCount);
    }
    if (message.baseFeePerGas !== 0) {
      writer.uint32(24).int64(message.baseFeePerGas);
    }
    for (const v of message.estimatedPrices) {
      EstimatedGasPrice.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BlockPrice {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBlockPrice } as BlockPrice;
    message.estimatedPrices = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockNumber = reader.string();
          break;
        case 2:
          message.estimatedTransactionCount = reader.int32();
          break;
        case 3:
          message.baseFeePerGas = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.estimatedPrices.push(
            EstimatedGasPrice.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockPrice {
    const message = { ...baseBlockPrice } as BlockPrice;
    message.estimatedPrices = [];
    if (object.blockNumber !== undefined && object.blockNumber !== null) {
      message.blockNumber = String(object.blockNumber);
    } else {
      message.blockNumber = "";
    }
    if (
      object.estimatedTransactionCount !== undefined &&
      object.estimatedTransactionCount !== null
    ) {
      message.estimatedTransactionCount = Number(
        object.estimatedTransactionCount
      );
    } else {
      message.estimatedTransactionCount = 0;
    }
    if (object.baseFeePerGas !== undefined && object.baseFeePerGas !== null) {
      message.baseFeePerGas = Number(object.baseFeePerGas);
    } else {
      message.baseFeePerGas = 0;
    }
    if (
      object.estimatedPrices !== undefined &&
      object.estimatedPrices !== null
    ) {
      for (const e of object.estimatedPrices) {
        message.estimatedPrices.push(EstimatedGasPrice.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: BlockPrice): unknown {
    const obj: any = {};
    message.blockNumber !== undefined &&
      (obj.blockNumber = message.blockNumber);
    message.estimatedTransactionCount !== undefined &&
      (obj.estimatedTransactionCount = message.estimatedTransactionCount);
    message.baseFeePerGas !== undefined &&
      (obj.baseFeePerGas = message.baseFeePerGas);
    if (message.estimatedPrices) {
      obj.estimatedPrices = message.estimatedPrices.map((e) =>
        e ? EstimatedGasPrice.toJSON(e) : undefined
      );
    } else {
      obj.estimatedPrices = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<BlockPrice>): BlockPrice {
    const message = { ...baseBlockPrice } as BlockPrice;
    message.estimatedPrices = [];
    if (object.blockNumber !== undefined && object.blockNumber !== null) {
      message.blockNumber = object.blockNumber;
    } else {
      message.blockNumber = "";
    }
    if (
      object.estimatedTransactionCount !== undefined &&
      object.estimatedTransactionCount !== null
    ) {
      message.estimatedTransactionCount = object.estimatedTransactionCount;
    } else {
      message.estimatedTransactionCount = 0;
    }
    if (object.baseFeePerGas !== undefined && object.baseFeePerGas !== null) {
      message.baseFeePerGas = object.baseFeePerGas;
    } else {
      message.baseFeePerGas = 0;
    }
    if (
      object.estimatedPrices !== undefined &&
      object.estimatedPrices !== null
    ) {
      for (const e of object.estimatedPrices) {
        message.estimatedPrices.push(EstimatedGasPrice.fromPartial(e));
      }
    }
    return message;
  },
};

const baseGasPrices: object = {
  system: "",
  network: "",
  unit: "",
  maxPrice: 0,
  currentBlockNumber: "",
  msSinceLastBlock: 0,
};

export const GasPrices = {
  encode(message: GasPrices, writer: Writer = Writer.create()): Writer {
    if (message.system !== "") {
      writer.uint32(10).string(message.system);
    }
    if (message.network !== "") {
      writer.uint32(18).string(message.network);
    }
    if (message.unit !== "") {
      writer.uint32(26).string(message.unit);
    }
    if (message.maxPrice !== 0) {
      writer.uint32(32).int32(message.maxPrice);
    }
    if (message.currentBlockNumber !== "") {
      writer.uint32(42).string(message.currentBlockNumber);
    }
    if (message.msSinceLastBlock !== 0) {
      writer.uint32(48).int32(message.msSinceLastBlock);
    }
    for (const v of message.blockPrices) {
      BlockPrice.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GasPrices {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGasPrices } as GasPrices;
    message.blockPrices = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.system = reader.string();
          break;
        case 2:
          message.network = reader.string();
          break;
        case 3:
          message.unit = reader.string();
          break;
        case 4:
          message.maxPrice = reader.int32();
          break;
        case 5:
          message.currentBlockNumber = reader.string();
          break;
        case 6:
          message.msSinceLastBlock = reader.int32();
          break;
        case 10:
          message.blockPrices.push(BlockPrice.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GasPrices {
    const message = { ...baseGasPrices } as GasPrices;
    message.blockPrices = [];
    if (object.system !== undefined && object.system !== null) {
      message.system = String(object.system);
    } else {
      message.system = "";
    }
    if (object.network !== undefined && object.network !== null) {
      message.network = String(object.network);
    } else {
      message.network = "";
    }
    if (object.unit !== undefined && object.unit !== null) {
      message.unit = String(object.unit);
    } else {
      message.unit = "";
    }
    if (object.maxPrice !== undefined && object.maxPrice !== null) {
      message.maxPrice = Number(object.maxPrice);
    } else {
      message.maxPrice = 0;
    }
    if (
      object.currentBlockNumber !== undefined &&
      object.currentBlockNumber !== null
    ) {
      message.currentBlockNumber = String(object.currentBlockNumber);
    } else {
      message.currentBlockNumber = "";
    }
    if (
      object.msSinceLastBlock !== undefined &&
      object.msSinceLastBlock !== null
    ) {
      message.msSinceLastBlock = Number(object.msSinceLastBlock);
    } else {
      message.msSinceLastBlock = 0;
    }
    if (object.blockPrices !== undefined && object.blockPrices !== null) {
      for (const e of object.blockPrices) {
        message.blockPrices.push(BlockPrice.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GasPrices): unknown {
    const obj: any = {};
    message.system !== undefined && (obj.system = message.system);
    message.network !== undefined && (obj.network = message.network);
    message.unit !== undefined && (obj.unit = message.unit);
    message.maxPrice !== undefined && (obj.maxPrice = message.maxPrice);
    message.currentBlockNumber !== undefined &&
      (obj.currentBlockNumber = message.currentBlockNumber);
    message.msSinceLastBlock !== undefined &&
      (obj.msSinceLastBlock = message.msSinceLastBlock);
    if (message.blockPrices) {
      obj.blockPrices = message.blockPrices.map((e) =>
        e ? BlockPrice.toJSON(e) : undefined
      );
    } else {
      obj.blockPrices = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GasPrices>): GasPrices {
    const message = { ...baseGasPrices } as GasPrices;
    message.blockPrices = [];
    if (object.system !== undefined && object.system !== null) {
      message.system = object.system;
    } else {
      message.system = "";
    }
    if (object.network !== undefined && object.network !== null) {
      message.network = object.network;
    } else {
      message.network = "";
    }
    if (object.unit !== undefined && object.unit !== null) {
      message.unit = object.unit;
    } else {
      message.unit = "";
    }
    if (object.maxPrice !== undefined && object.maxPrice !== null) {
      message.maxPrice = object.maxPrice;
    } else {
      message.maxPrice = 0;
    }
    if (
      object.currentBlockNumber !== undefined &&
      object.currentBlockNumber !== null
    ) {
      message.currentBlockNumber = object.currentBlockNumber;
    } else {
      message.currentBlockNumber = "";
    }
    if (
      object.msSinceLastBlock !== undefined &&
      object.msSinceLastBlock !== null
    ) {
      message.msSinceLastBlock = object.msSinceLastBlock;
    } else {
      message.msSinceLastBlock = 0;
    }
    if (object.blockPrices !== undefined && object.blockPrices !== null) {
      for (const e of object.blockPrices) {
        message.blockPrices.push(BlockPrice.fromPartial(e));
      }
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
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
