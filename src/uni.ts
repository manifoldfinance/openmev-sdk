/* eslint-disable */

/**
* @file UniSwap Integration
* @version 0.1.0
* @copyright Manifold Finance, Inc. 2021
* @package openmev-sdk
*/

import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export interface UniLiquidity {
  id: number;
  contractAddress: string;
  baseDecimals: number;
  baseReserve: string;
  quoteDecimals: number;
  quoteReserve: string;
  blockTimestamp: number;
}

export interface BlockUniLiquidity {
  blockNumber: string;
  liquidity: UniLiquidity[];
}

const baseUniLiquidity: object = {
  id: 0,
  contractAddress: "",
  baseDecimals: 0,
  baseReserve: "",
  quoteDecimals: 0,
  quoteReserve: "",
  blockTimestamp: 0,
};

export const UniLiquidity = {
  encode(message: UniLiquidity, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.baseDecimals !== 0) {
      writer.uint32(24).int32(message.baseDecimals);
    }
    if (message.baseReserve !== "") {
      writer.uint32(34).string(message.baseReserve);
    }
    if (message.quoteDecimals !== 0) {
      writer.uint32(40).int32(message.quoteDecimals);
    }
    if (message.quoteReserve !== "") {
      writer.uint32(50).string(message.quoteReserve);
    }
    if (message.blockTimestamp !== 0) {
      writer.uint32(56).int64(message.blockTimestamp);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): UniLiquidity {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUniLiquidity } as UniLiquidity;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        case 3:
          message.baseDecimals = reader.int32();
          break;
        case 4:
          message.baseReserve = reader.string();
          break;
        case 5:
          message.quoteDecimals = reader.int32();
          break;
        case 6:
          message.quoteReserve = reader.string();
          break;
        case 7:
          message.blockTimestamp = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UniLiquidity {
    const message = { ...baseUniLiquidity } as UniLiquidity;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = String(object.contractAddress);
    } else {
      message.contractAddress = "";
    }
    if (object.baseDecimals !== undefined && object.baseDecimals !== null) {
      message.baseDecimals = Number(object.baseDecimals);
    } else {
      message.baseDecimals = 0;
    }
    if (object.baseReserve !== undefined && object.baseReserve !== null) {
      message.baseReserve = String(object.baseReserve);
    } else {
      message.baseReserve = "";
    }
    if (object.quoteDecimals !== undefined && object.quoteDecimals !== null) {
      message.quoteDecimals = Number(object.quoteDecimals);
    } else {
      message.quoteDecimals = 0;
    }
    if (object.quoteReserve !== undefined && object.quoteReserve !== null) {
      message.quoteReserve = String(object.quoteReserve);
    } else {
      message.quoteReserve = "";
    }
    if (object.blockTimestamp !== undefined && object.blockTimestamp !== null) {
      message.blockTimestamp = Number(object.blockTimestamp);
    } else {
      message.blockTimestamp = 0;
    }
    return message;
  },

  toJSON(message: UniLiquidity): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.baseDecimals !== undefined &&
      (obj.baseDecimals = message.baseDecimals);
    message.baseReserve !== undefined &&
      (obj.baseReserve = message.baseReserve);
    message.quoteDecimals !== undefined &&
      (obj.quoteDecimals = message.quoteDecimals);
    message.quoteReserve !== undefined &&
      (obj.quoteReserve = message.quoteReserve);
    message.blockTimestamp !== undefined &&
      (obj.blockTimestamp = message.blockTimestamp);
    return obj;
  },

  fromPartial(object: DeepPartial<UniLiquidity>): UniLiquidity {
    const message = { ...baseUniLiquidity } as UniLiquidity;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (
      object.contractAddress !== undefined &&
      object.contractAddress !== null
    ) {
      message.contractAddress = object.contractAddress;
    } else {
      message.contractAddress = "";
    }
    if (object.baseDecimals !== undefined && object.baseDecimals !== null) {
      message.baseDecimals = object.baseDecimals;
    } else {
      message.baseDecimals = 0;
    }
    if (object.baseReserve !== undefined && object.baseReserve !== null) {
      message.baseReserve = object.baseReserve;
    } else {
      message.baseReserve = "";
    }
    if (object.quoteDecimals !== undefined && object.quoteDecimals !== null) {
      message.quoteDecimals = object.quoteDecimals;
    } else {
      message.quoteDecimals = 0;
    }
    if (object.quoteReserve !== undefined && object.quoteReserve !== null) {
      message.quoteReserve = object.quoteReserve;
    } else {
      message.quoteReserve = "";
    }
    if (object.blockTimestamp !== undefined && object.blockTimestamp !== null) {
      message.blockTimestamp = object.blockTimestamp;
    } else {
      message.blockTimestamp = 0;
    }
    return message;
  },
};

const baseBlockUniLiquidity: object = { blockNumber: "" };

export const BlockUniLiquidity = {
  encode(message: BlockUniLiquidity, writer: Writer = Writer.create()): Writer {
    if (message.blockNumber !== "") {
      writer.uint32(10).string(message.blockNumber);
    }
    for (const v of message.liquidity) {
      UniLiquidity.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BlockUniLiquidity {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBlockUniLiquidity } as BlockUniLiquidity;
    message.liquidity = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockNumber = reader.string();
          break;
        case 2:
          message.liquidity.push(UniLiquidity.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockUniLiquidity {
    const message = { ...baseBlockUniLiquidity } as BlockUniLiquidity;
    message.liquidity = [];
    if (object.blockNumber !== undefined && object.blockNumber !== null) {
      message.blockNumber = String(object.blockNumber);
    } else {
      message.blockNumber = "";
    }
    if (object.liquidity !== undefined && object.liquidity !== null) {
      for (const e of object.liquidity) {
        message.liquidity.push(UniLiquidity.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: BlockUniLiquidity): unknown {
    const obj: any = {};
    message.blockNumber !== undefined &&
      (obj.blockNumber = message.blockNumber);
    if (message.liquidity) {
      obj.liquidity = message.liquidity.map((e) =>
        e ? UniLiquidity.toJSON(e) : undefined
      );
    } else {
      obj.liquidity = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<BlockUniLiquidity>): BlockUniLiquidity {
    const message = { ...baseBlockUniLiquidity } as BlockUniLiquidity;
    message.liquidity = [];
    if (object.blockNumber !== undefined && object.blockNumber !== null) {
      message.blockNumber = object.blockNumber;
    } else {
      message.blockNumber = "";
    }
    if (object.liquidity !== undefined && object.liquidity !== null) {
      for (const e of object.liquidity) {
        message.liquidity.push(UniLiquidity.fromPartial(e));
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
