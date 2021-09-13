/* eslint-disable */

/**
* @file OpenMEV SDK Protobufs
* @version 0.1.0
* @copyright Manifold Finance, Inc. 2021
* @package openmev-sdk
*/

import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "com.manifoldfinance.protobuf.action";

export interface ERC20Transfer {
  /** hex encoded recipient address */
  recipient: string;
  /** hex encoded amount of tokens */
  amount: string;
}

export interface ERC20Approval {
  spender: string;
  amount: string;
}

export interface SwapExactTokensForTokens {
  /** hex encoded bigint */
  amountIn: string;
  /** hex encoded bigint */
  amountOutMin: string;
  /** hex encoded address */
  to: string;
  /** seconds since epoch */
  deadline: number;
  /** array of hex encoded addresses */
  path: string[];
}

export interface SwapTokensForExactTokens {
  /** hex encoded bigint */
  amountOut: string;
  /** hex encoded bigint */
  amountInMax: string;
  /** hex encoded address */
  to: string;
  /** seconds since epoch */
  deadline: number;
  /** array of hex encoded addresses */
  path: string[];
}

export interface SwapExactETHForTokens {
  /** hex encoded bigint */
  amountOutMin: string;
  /** hex encoded address */
  to: string;
  /** seconds since epoch */
  deadline: number;
  /** array of hex encoded addresses */
  path: string[];
}

export interface SwapTokensForExactETH {
  /** hex encoded bigint */
  amountOut: string;
  /** hex encoded bigint */
  amountInMax: string;
  /** hex encoded address */
  to: string;
  /** seconds since epoch */
  deadline: number;
  /** array of hex encoded addresses */
  path: string[];
}

export interface SwapExactTokensForETH {
  /** hex encoded bigint */
  amountIn: string;
  /** hex encoded bigint */
  amountOutMin: string;
  /** hex encoded address */
  to: string;
  /** seconds since epoch */
  deadline: number;
  /** array of hex encoded addresses */
  path: string[];
}

export interface SwapETHForExactTokens {
  /** hex encoded bigint */
  amountOut: string;
  /** hex encoded address */
  to: string;
  /** seconds since epoch */
  deadline: number;
  /** array of hex encoded addresses */
  path: string[];
}

export interface SwapExactTokensForTokensSupportingFeeOnTransferTokens {
  /** hex encoded bigint */
  amountIn: string;
  /** hex encoded bigint */
  amountOutMin: string;
  /** hex encoded address */
  to: string;
  /** seconds since epoch */
  deadline: number;
  /** array of hex encoded addresses */
  path: string[];
}

export interface SwapExactETHForTokensSupportingFeeOnTransferTokens {
  /** hex encoded bigint */
  amountOutMin: string;
  /** hex encoded address */
  to: string;
  /** seconds since epoch */
  deadline: number;
  /** array of hex encoded addresses */
  path: string[];
}

export interface SwapExactTokensForETHSupportingFeeOnTransferTokens {
  /** hex encoded bigint */
  amountIn: string;
  /** hex encoded bigint */
  amountOutMin: string;
  /** hex encoded address */
  to: string;
  /** seconds since epoch */
  deadline: number;
  /** array of hex encoded addresses */
  path: string[];
}

export interface SwapExactTokensForTokensWithFlashloan {
  /** hex encoded address e.g. Sushi, Uniswap etc */
  router: string;
  /** hex encoded bigint */
  amountIn: string;
  /** seconds since epoch */
  deadline: number;
  /** array of hex encoded addresses */
  path: string[];
}

export interface SwapExactTokensForTokensWithFlashloanMulti {
  /** hex encoded address e.g. Sushi, Uniswap etc */
  router: string[];
  /** hex encoded bigint */
  amountIn: string;
  /** seconds since epoch */
  deadline: number;
  /** array of hex encoded addresses */
  path: string[];
}

const baseERC20Transfer: object = { recipient: "", amount: "" };

export const ERC20Transfer = {
  encode(message: ERC20Transfer, writer: Writer = Writer.create()): Writer {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ERC20Transfer {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseERC20Transfer } as ERC20Transfer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipient = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ERC20Transfer {
    const message = { ...baseERC20Transfer } as ERC20Transfer;
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = String(object.recipient);
    } else {
      message.recipient = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    return message;
  },

  toJSON(message: ERC20Transfer): unknown {
    const obj: any = {};
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<ERC20Transfer>): ERC20Transfer {
    const message = { ...baseERC20Transfer } as ERC20Transfer;
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    } else {
      message.recipient = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    return message;
  },
};

const baseERC20Approval: object = { spender: "", amount: "" };

export const ERC20Approval = {
  encode(message: ERC20Approval, writer: Writer = Writer.create()): Writer {
    if (message.spender !== "") {
      writer.uint32(10).string(message.spender);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ERC20Approval {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseERC20Approval } as ERC20Approval;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spender = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ERC20Approval {
    const message = { ...baseERC20Approval } as ERC20Approval;
    if (object.spender !== undefined && object.spender !== null) {
      message.spender = String(object.spender);
    } else {
      message.spender = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    return message;
  },

  toJSON(message: ERC20Approval): unknown {
    const obj: any = {};
    message.spender !== undefined && (obj.spender = message.spender);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<ERC20Approval>): ERC20Approval {
    const message = { ...baseERC20Approval } as ERC20Approval;
    if (object.spender !== undefined && object.spender !== null) {
      message.spender = object.spender;
    } else {
      message.spender = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    return message;
  },
};

const baseSwapExactTokensForTokens: object = {
  amountIn: "",
  amountOutMin: "",
  to: "",
  deadline: 0,
  path: "",
};

export const SwapExactTokensForTokens = {
  encode(
    message: SwapExactTokensForTokens,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.amountIn !== "") {
      writer.uint32(10).string(message.amountIn);
    }
    if (message.amountOutMin !== "") {
      writer.uint32(18).string(message.amountOutMin);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    if (message.deadline !== 0) {
      writer.uint32(32).int32(message.deadline);
    }
    for (const v of message.path) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): SwapExactTokensForTokens {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSwapExactTokensForTokens,
    } as SwapExactTokensForTokens;
    message.path = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountIn = reader.string();
          break;
        case 2:
          message.amountOutMin = reader.string();
          break;
        case 3:
          message.to = reader.string();
          break;
        case 4:
          message.deadline = reader.int32();
          break;
        case 5:
          message.path.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SwapExactTokensForTokens {
    const message = {
      ...baseSwapExactTokensForTokens,
    } as SwapExactTokensForTokens;
    message.path = [];
    if (object.amountIn !== undefined && object.amountIn !== null) {
      message.amountIn = String(object.amountIn);
    } else {
      message.amountIn = "";
    }
    if (object.amountOutMin !== undefined && object.amountOutMin !== null) {
      message.amountOutMin = String(object.amountOutMin);
    } else {
      message.amountOutMin = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = Number(object.deadline);
    } else {
      message.deadline = 0;
    }
    if (object.path !== undefined && object.path !== null) {
      for (const e of object.path) {
        message.path.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: SwapExactTokensForTokens): unknown {
    const obj: any = {};
    message.amountIn !== undefined && (obj.amountIn = message.amountIn);
    message.amountOutMin !== undefined &&
      (obj.amountOutMin = message.amountOutMin);
    message.to !== undefined && (obj.to = message.to);
    message.deadline !== undefined && (obj.deadline = message.deadline);
    if (message.path) {
      obj.path = message.path.map((e) => e);
    } else {
      obj.path = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<SwapExactTokensForTokens>
  ): SwapExactTokensForTokens {
    const message = {
      ...baseSwapExactTokensForTokens,
    } as SwapExactTokensForTokens;
    message.path = [];
    if (object.amountIn !== undefined && object.amountIn !== null) {
      message.amountIn = object.amountIn;
    } else {
      message.amountIn = "";
    }
    if (object.amountOutMin !== undefined && object.amountOutMin !== null) {
      message.amountOutMin = object.amountOutMin;
    } else {
      message.amountOutMin = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = object.deadline;
    } else {
      message.deadline = 0;
    }
    if (object.path !== undefined && object.path !== null) {
      for (const e of object.path) {
        message.path.push(e);
      }
    }
    return message;
  },
};

const baseSwapTokensForExactTokens: object = {
  amountOut: "",
  amountInMax: "",
  to: "",
  deadline: 0,
  path: "",
};

export const SwapTokensForExactTokens = {
  encode(
    message: SwapTokensForExactTokens,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.amountOut !== "") {
      writer.uint32(10).string(message.amountOut);
    }
    if (message.amountInMax !== "") {
      writer.uint32(18).string(message.amountInMax);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    if (message.deadline !== 0) {
      writer.uint32(32).int32(message.deadline);
    }
    for (const v of message.path) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): SwapTokensForExactTokens {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSwapTokensForExactTokens,
    } as SwapTokensForExactTokens;
    message.path = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountOut = reader.string();
          break;
        case 2:
          message.amountInMax = reader.string();
          break;
        case 3:
          message.to = reader.string();
          break;
        case 4:
          message.deadline = reader.int32();
          break;
        case 5:
          message.path.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SwapTokensForExactTokens {
    const message = {
      ...baseSwapTokensForExactTokens,
    } as SwapTokensForExactTokens;
    message.path = [];
    if (object.amountOut !== undefined && object.amountOut !== null) {
      message.amountOut = String(object.amountOut);
    } else {
      message.amountOut = "";
    }
    if (object.amountInMax !== undefined && object.amountInMax !== null) {
      message.amountInMax = String(object.amountInMax);
    } else {
      message.amountInMax = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = Number(object.deadline);
    } else {
      message.deadline = 0;
    }
    if (object.path !== undefined && object.path !== null) {
      for (const e of object.path) {
        message.path.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: SwapTokensForExactTokens): unknown {
    const obj: any = {};
    message.amountOut !== undefined && (obj.amountOut = message.amountOut);
    message.amountInMax !== undefined &&
      (obj.amountInMax = message.amountInMax);
    message.to !== undefined && (obj.to = message.to);
    message.deadline !== undefined && (obj.deadline = message.deadline);
    if (message.path) {
      obj.path = message.path.map((e) => e);
    } else {
      obj.path = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<SwapTokensForExactTokens>
  ): SwapTokensForExactTokens {
    const message = {
      ...baseSwapTokensForExactTokens,
    } as SwapTokensForExactTokens;
    message.path = [];
    if (object.amountOut !== undefined && object.amountOut !== null) {
      message.amountOut = object.amountOut;
    } else {
      message.amountOut = "";
    }
    if (object.amountInMax !== undefined && object.amountInMax !== null) {
      message.amountInMax = object.amountInMax;
    } else {
      message.amountInMax = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = object.deadline;
    } else {
      message.deadline = 0;
    }
    if (object.path !== undefined && object.path !== null) {
      for (const e of object.path) {
        message.path.push(e);
      }
    }
    return message;
  },
};

const baseSwapExactETHForTokens: object = {
  amountOutMin: "",
  to: "",
  deadline: 0,
  path: "",
};

export const SwapExactETHForTokens = {
  encode(
    message: SwapExactETHForTokens,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.amountOutMin !== "") {
      writer.uint32(10).string(message.amountOutMin);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.deadline !== 0) {
      writer.uint32(24).int32(message.deadline);
    }
    for (const v of message.path) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SwapExactETHForTokens {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSwapExactETHForTokens } as SwapExactETHForTokens;
    message.path = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountOutMin = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.deadline = reader.int32();
          break;
        case 4:
          message.path.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SwapExactETHForTokens {
    const message = { ...baseSwapExactETHForTokens } as SwapExactETHForTokens;
    message.path = [];
    if (object.amountOutMin !== undefined && object.amountOutMin !== null) {
      message.amountOutMin = String(object.amountOutMin);
    } else {
      message.amountOutMin = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = Number(object.deadline);
    } else {
      message.deadline = 0;
    }
    if (object.path !== undefined && object.path !== null) {
      for (const e of object.path) {
        message.path.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: SwapExactETHForTokens): unknown {
    const obj: any = {};
    message.amountOutMin !== undefined &&
      (obj.amountOutMin = message.amountOutMin);
    message.to !== undefined && (obj.to = message.to);
    message.deadline !== undefined && (obj.deadline = message.deadline);
    if (message.path) {
      obj.path = message.path.map((e) => e);
    } else {
      obj.path = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<SwapExactETHForTokens>
  ): SwapExactETHForTokens {
    const message = { ...baseSwapExactETHForTokens } as SwapExactETHForTokens;
    message.path = [];
    if (object.amountOutMin !== undefined && object.amountOutMin !== null) {
      message.amountOutMin = object.amountOutMin;
    } else {
      message.amountOutMin = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = object.deadline;
    } else {
      message.deadline = 0;
    }
    if (object.path !== undefined && object.path !== null) {
      for (const e of object.path) {
        message.path.push(e);
      }
    }
    return message;
  },
};

const baseSwapTokensForExactETH: object = {
  amountOut: "",
  amountInMax: "",
  to: "",
  deadline: 0,
  path: "",
};

export const SwapTokensForExactETH = {
  encode(
    message: SwapTokensForExactETH,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.amountOut !== "") {
      writer.uint32(10).string(message.amountOut);
    }
    if (message.amountInMax !== "") {
      writer.uint32(18).string(message.amountInMax);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    if (message.deadline !== 0) {
      writer.uint32(32).int32(message.deadline);
    }
    for (const v of message.path) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SwapTokensForExactETH {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSwapTokensForExactETH } as SwapTokensForExactETH;
    message.path = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountOut = reader.string();
          break;
        case 2:
          message.amountInMax = reader.string();
          break;
        case 3:
          message.to = reader.string();
          break;
        case 4:
          message.deadline = reader.int32();
          break;
        case 5:
          message.path.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SwapTokensForExactETH {
    const message = { ...baseSwapTokensForExactETH } as SwapTokensForExactETH;
    message.path = [];
    if (object.amountOut !== undefined && object.amountOut !== null) {
      message.amountOut = String(object.amountOut);
    } else {
      message.amountOut = "";
    }
    if (object.amountInMax !== undefined && object.amountInMax !== null) {
      message.amountInMax = String(object.amountInMax);
    } else {
      message.amountInMax = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = Number(object.deadline);
    } else {
      message.deadline = 0;
    }
    if (object.path !== undefined && object.path !== null) {
      for (const e of object.path) {
        message.path.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: SwapTokensForExactETH): unknown {
    const obj: any = {};
    message.amountOut !== undefined && (obj.amountOut = message.amountOut);
    message.amountInMax !== undefined &&
      (obj.amountInMax = message.amountInMax);
    message.to !== undefined && (obj.to = message.to);
    message.deadline !== undefined && (obj.deadline = message.deadline);
    if (message.path) {
      obj.path = message.path.map((e) => e);
    } else {
      obj.path = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<SwapTokensForExactETH>
  ): SwapTokensForExactETH {
    const message = { ...baseSwapTokensForExactETH } as SwapTokensForExactETH;
    message.path = [];
    if (object.amountOut !== undefined && object.amountOut !== null) {
      message.amountOut = object.amountOut;
    } else {
      message.amountOut = "";
    }
    if (object.amountInMax !== undefined && object.amountInMax !== null) {
      message.amountInMax = object.amountInMax;
    } else {
      message.amountInMax = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = object.deadline;
    } else {
      message.deadline = 0;
    }
    if (object.path !== undefined && object.path !== null) {
      for (const e of object.path) {
        message.path.push(e);
      }
    }
    return message;
  },
};

const baseSwapExactTokensForETH: object = {
  amountIn: "",
  amountOutMin: "",
  to: "",
  deadline: 0,
  path: "",
};

export const SwapExactTokensForETH = {
  encode(
    message: SwapExactTokensForETH,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.amountIn !== "") {
      writer.uint32(10).string(message.amountIn);
    }
    if (message.amountOutMin !== "") {
      writer.uint32(18).string(message.amountOutMin);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    if (message.deadline !== 0) {
      writer.uint32(32).int32(message.deadline);
    }
    for (const v of message.path) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SwapExactTokensForETH {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSwapExactTokensForETH } as SwapExactTokensForETH;
    message.path = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountIn = reader.string();
          break;
        case 2:
          message.amountOutMin = reader.string();
          break;
        case 3:
          message.to = reader.string();
          break;
        case 4:
          message.deadline = reader.int32();
          break;
        case 5:
          message.path.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SwapExactTokensForETH {
    const message = { ...baseSwapExactTokensForETH } as SwapExactTokensForETH;
    message.path = [];
    if (object.amountIn !== undefined && object.amountIn !== null) {
      message.amountIn = String(object.amountIn);
    } else {
      message.amountIn = "";
    }
    if (object.amountOutMin !== undefined && object.amountOutMin !== null) {
      message.amountOutMin = String(object.amountOutMin);
    } else {
      message.amountOutMin = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = Number(object.deadline);
    } else {
      message.deadline = 0;
    }
    if (object.path !== undefined && object.path !== null) {
      for (const e of object.path) {
        message.path.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: SwapExactTokensForETH): unknown {
    const obj: any = {};
    message.amountIn !== undefined && (obj.amountIn = message.amountIn);
    message.amountOutMin !== undefined &&
      (obj.amountOutMin = message.amountOutMin);
    message.to !== undefined && (obj.to = message.to);
    message.deadline !== undefined && (obj.deadline = message.deadline);
    if (message.path) {
      obj.path = message.path.map((e) => e);
    } else {
      obj.path = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<SwapExactTokensForETH>
  ): SwapExactTokensForETH {
    const message = { ...baseSwapExactTokensForETH } as SwapExactTokensForETH;
    message.path = [];
    if (object.amountIn !== undefined && object.amountIn !== null) {
      message.amountIn = object.amountIn;
    } else {
      message.amountIn = "";
    }
    if (object.amountOutMin !== undefined && object.amountOutMin !== null) {
      message.amountOutMin = object.amountOutMin;
    } else {
      message.amountOutMin = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = object.deadline;
    } else {
      message.deadline = 0;
    }
    if (object.path !== undefined && object.path !== null) {
      for (const e of object.path) {
        message.path.push(e);
      }
    }
    return message;
  },
};

const baseSwapETHForExactTokens: object = {
  amountOut: "",
  to: "",
  deadline: 0,
  path: "",
};

export const SwapETHForExactTokens = {
  encode(
    message: SwapETHForExactTokens,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.amountOut !== "") {
      writer.uint32(10).string(message.amountOut);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.deadline !== 0) {
      writer.uint32(24).int32(message.deadline);
    }
    for (const v of message.path) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SwapETHForExactTokens {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSwapETHForExactTokens } as SwapETHForExactTokens;
    message.path = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountOut = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.deadline = reader.int32();
          break;
        case 4:
          message.path.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SwapETHForExactTokens {
    const message = { ...baseSwapETHForExactTokens } as SwapETHForExactTokens;
    message.path = [];
    if (object.amountOut !== undefined && object.amountOut !== null) {
      message.amountOut = String(object.amountOut);
    } else {
      message.amountOut = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = Number(object.deadline);
    } else {
      message.deadline = 0;
    }
    if (object.path !== undefined && object.path !== null) {
      for (const e of object.path) {
        message.path.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: SwapETHForExactTokens): unknown {
    const obj: any = {};
    message.amountOut !== undefined && (obj.amountOut = message.amountOut);
    message.to !== undefined && (obj.to = message.to);
    message.deadline !== undefined && (obj.deadline = message.deadline);
    if (message.path) {
      obj.path = message.path.map((e) => e);
    } else {
      obj.path = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<SwapETHForExactTokens>
  ): SwapETHForExactTokens {
    const message = { ...baseSwapETHForExactTokens } as SwapETHForExactTokens;
    message.path = [];
    if (object.amountOut !== undefined && object.amountOut !== null) {
      message.amountOut = object.amountOut;
    } else {
      message.amountOut = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = object.deadline;
    } else {
      message.deadline = 0;
    }
    if (object.path !== undefined && object.path !== null) {
      for (const e of object.path) {
        message.path.push(e);
      }
    }
    return message;
  },
};

const baseSwapExactTokensForTokensSupportingFeeOnTransferTokens: object = {
  amountIn: "",
  amountOutMin: "",
  to: "",
  deadline: 0,
  path: "",
};

export const SwapExactTokensForTokensSupportingFeeOnTransferTokens = {
  encode(
    message: SwapExactTokensForTokensSupportingFeeOnTransferTokens,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.amountIn !== "") {
      writer.uint32(10).string(message.amountIn);
    }
    if (message.amountOutMin !== "") {
      writer.uint32(18).string(message.amountOutMin);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    if (message.deadline !== 0) {
      writer.uint32(32).int32(message.deadline);
    }
    for (const v of message.path) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): SwapExactTokensForTokensSupportingFeeOnTransferTokens {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSwapExactTokensForTokensSupportingFeeOnTransferTokens,
    } as SwapExactTokensForTokensSupportingFeeOnTransferTokens;
    message.path = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountIn = reader.string();
          break;
        case 2:
          message.amountOutMin = reader.string();
          break;
        case 3:
          message.to = reader.string();
          break;
        case 4:
          message.deadline = reader.int32();
          break;
        case 5:
          message.path.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SwapExactTokensForTokensSupportingFeeOnTransferTokens {
    const message = {
      ...baseSwapExactTokensForTokensSupportingFeeOnTransferTokens,
    } as SwapExactTokensForTokensSupportingFeeOnTransferTokens;
    message.path = [];
    if (object.amountIn !== undefined && object.amountIn !== null) {
      message.amountIn = String(object.amountIn);
    } else {
      message.amountIn = "";
    }
    if (object.amountOutMin !== undefined && object.amountOutMin !== null) {
      message.amountOutMin = String(object.amountOutMin);
    } else {
      message.amountOutMin = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = Number(object.deadline);
    } else {
      message.deadline = 0;
    }
    if (object.path !== undefined && object.path !== null) {
      for (const e of object.path) {
        message.path.push(String(e));
      }
    }
    return message;
  },

  toJSON(
    message: SwapExactTokensForTokensSupportingFeeOnTransferTokens
  ): unknown {
    const obj: any = {};
    message.amountIn !== undefined && (obj.amountIn = message.amountIn);
    message.amountOutMin !== undefined &&
      (obj.amountOutMin = message.amountOutMin);
    message.to !== undefined && (obj.to = message.to);
    message.deadline !== undefined && (obj.deadline = message.deadline);
    if (message.path) {
      obj.path = message.path.map((e) => e);
    } else {
      obj.path = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<SwapExactTokensForTokensSupportingFeeOnTransferTokens>
  ): SwapExactTokensForTokensSupportingFeeOnTransferTokens {
    const message = {
      ...baseSwapExactTokensForTokensSupportingFeeOnTransferTokens,
    } as SwapExactTokensForTokensSupportingFeeOnTransferTokens;
    message.path = [];
    if (object.amountIn !== undefined && object.amountIn !== null) {
      message.amountIn = object.amountIn;
    } else {
      message.amountIn = "";
    }
    if (object.amountOutMin !== undefined && object.amountOutMin !== null) {
      message.amountOutMin = object.amountOutMin;
    } else {
      message.amountOutMin = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = object.deadline;
    } else {
      message.deadline = 0;
    }
    if (object.path !== undefined && object.path !== null) {
      for (const e of object.path) {
        message.path.push(e);
      }
    }
    return message;
  },
};

const baseSwapExactETHForTokensSupportingFeeOnTransferTokens: object = {
  amountOutMin: "",
  to: "",
  deadline: 0,
  path: "",
};

export const SwapExactETHForTokensSupportingFeeOnTransferTokens = {
  encode(
    message: SwapExactETHForTokensSupportingFeeOnTransferTokens,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.amountOutMin !== "") {
      writer.uint32(10).string(message.amountOutMin);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.deadline !== 0) {
      writer.uint32(24).int32(message.deadline);
    }
    for (const v of message.path) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): SwapExactETHForTokensSupportingFeeOnTransferTokens {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSwapExactETHForTokensSupportingFeeOnTransferTokens,
    } as SwapExactETHForTokensSupportingFeeOnTransferTokens;
    message.path = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountOutMin = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.deadline = reader.int32();
          break;
        case 4:
          message.path.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SwapExactETHForTokensSupportingFeeOnTransferTokens {
    const message = {
      ...baseSwapExactETHForTokensSupportingFeeOnTransferTokens,
    } as SwapExactETHForTokensSupportingFeeOnTransferTokens;
    message.path = [];
    if (object.amountOutMin !== undefined && object.amountOutMin !== null) {
      message.amountOutMin = String(object.amountOutMin);
    } else {
      message.amountOutMin = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = Number(object.deadline);
    } else {
      message.deadline = 0;
    }
    if (object.path !== undefined && object.path !== null) {
      for (const e of object.path) {
        message.path.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: SwapExactETHForTokensSupportingFeeOnTransferTokens): unknown {
    const obj: any = {};
    message.amountOutMin !== undefined &&
      (obj.amountOutMin = message.amountOutMin);
    message.to !== undefined && (obj.to = message.to);
    message.deadline !== undefined && (obj.deadline = message.deadline);
    if (message.path) {
      obj.path = message.path.map((e) => e);
    } else {
      obj.path = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<SwapExactETHForTokensSupportingFeeOnTransferTokens>
  ): SwapExactETHForTokensSupportingFeeOnTransferTokens {
    const message = {
      ...baseSwapExactETHForTokensSupportingFeeOnTransferTokens,
    } as SwapExactETHForTokensSupportingFeeOnTransferTokens;
    message.path = [];
    if (object.amountOutMin !== undefined && object.amountOutMin !== null) {
      message.amountOutMin = object.amountOutMin;
    } else {
      message.amountOutMin = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = object.deadline;
    } else {
      message.deadline = 0;
    }
    if (object.path !== undefined && object.path !== null) {
      for (const e of object.path) {
        message.path.push(e);
      }
    }
    return message;
  },
};

const baseSwapExactTokensForETHSupportingFeeOnTransferTokens: object = {
  amountIn: "",
  amountOutMin: "",
  to: "",
  deadline: 0,
  path: "",
};

export const SwapExactTokensForETHSupportingFeeOnTransferTokens = {
  encode(
    message: SwapExactTokensForETHSupportingFeeOnTransferTokens,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.amountIn !== "") {
      writer.uint32(10).string(message.amountIn);
    }
    if (message.amountOutMin !== "") {
      writer.uint32(18).string(message.amountOutMin);
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    if (message.deadline !== 0) {
      writer.uint32(32).int32(message.deadline);
    }
    for (const v of message.path) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): SwapExactTokensForETHSupportingFeeOnTransferTokens {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSwapExactTokensForETHSupportingFeeOnTransferTokens,
    } as SwapExactTokensForETHSupportingFeeOnTransferTokens;
    message.path = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountIn = reader.string();
          break;
        case 2:
          message.amountOutMin = reader.string();
          break;
        case 3:
          message.to = reader.string();
          break;
        case 4:
          message.deadline = reader.int32();
          break;
        case 5:
          message.path.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SwapExactTokensForETHSupportingFeeOnTransferTokens {
    const message = {
      ...baseSwapExactTokensForETHSupportingFeeOnTransferTokens,
    } as SwapExactTokensForETHSupportingFeeOnTransferTokens;
    message.path = [];
    if (object.amountIn !== undefined && object.amountIn !== null) {
      message.amountIn = String(object.amountIn);
    } else {
      message.amountIn = "";
    }
    if (object.amountOutMin !== undefined && object.amountOutMin !== null) {
      message.amountOutMin = String(object.amountOutMin);
    } else {
      message.amountOutMin = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = Number(object.deadline);
    } else {
      message.deadline = 0;
    }
    if (object.path !== undefined && object.path !== null) {
      for (const e of object.path) {
        message.path.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: SwapExactTokensForETHSupportingFeeOnTransferTokens): unknown {
    const obj: any = {};
    message.amountIn !== undefined && (obj.amountIn = message.amountIn);
    message.amountOutMin !== undefined &&
      (obj.amountOutMin = message.amountOutMin);
    message.to !== undefined && (obj.to = message.to);
    message.deadline !== undefined && (obj.deadline = message.deadline);
    if (message.path) {
      obj.path = message.path.map((e) => e);
    } else {
      obj.path = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<SwapExactTokensForETHSupportingFeeOnTransferTokens>
  ): SwapExactTokensForETHSupportingFeeOnTransferTokens {
    const message = {
      ...baseSwapExactTokensForETHSupportingFeeOnTransferTokens,
    } as SwapExactTokensForETHSupportingFeeOnTransferTokens;
    message.path = [];
    if (object.amountIn !== undefined && object.amountIn !== null) {
      message.amountIn = object.amountIn;
    } else {
      message.amountIn = "";
    }
    if (object.amountOutMin !== undefined && object.amountOutMin !== null) {
      message.amountOutMin = object.amountOutMin;
    } else {
      message.amountOutMin = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = object.deadline;
    } else {
      message.deadline = 0;
    }
    if (object.path !== undefined && object.path !== null) {
      for (const e of object.path) {
        message.path.push(e);
      }
    }
    return message;
  },
};

const baseSwapExactTokensForTokensWithFlashloan: object = {
  router: "",
  amountIn: "",
  deadline: 0,
  path: "",
};

export const SwapExactTokensForTokensWithFlashloan = {
  encode(
    message: SwapExactTokensForTokensWithFlashloan,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.router !== "") {
      writer.uint32(10).string(message.router);
    }
    if (message.amountIn !== "") {
      writer.uint32(18).string(message.amountIn);
    }
    if (message.deadline !== 0) {
      writer.uint32(24).int32(message.deadline);
    }
    for (const v of message.path) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): SwapExactTokensForTokensWithFlashloan {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSwapExactTokensForTokensWithFlashloan,
    } as SwapExactTokensForTokensWithFlashloan;
    message.path = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.router = reader.string();
          break;
        case 2:
          message.amountIn = reader.string();
          break;
        case 3:
          message.deadline = reader.int32();
          break;
        case 4:
          message.path.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SwapExactTokensForTokensWithFlashloan {
    const message = {
      ...baseSwapExactTokensForTokensWithFlashloan,
    } as SwapExactTokensForTokensWithFlashloan;
    message.path = [];
    if (object.router !== undefined && object.router !== null) {
      message.router = String(object.router);
    } else {
      message.router = "";
    }
    if (object.amountIn !== undefined && object.amountIn !== null) {
      message.amountIn = String(object.amountIn);
    } else {
      message.amountIn = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = Number(object.deadline);
    } else {
      message.deadline = 0;
    }
    if (object.path !== undefined && object.path !== null) {
      for (const e of object.path) {
        message.path.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: SwapExactTokensForTokensWithFlashloan): unknown {
    const obj: any = {};
    message.router !== undefined && (obj.router = message.router);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn);
    message.deadline !== undefined && (obj.deadline = message.deadline);
    if (message.path) {
      obj.path = message.path.map((e) => e);
    } else {
      obj.path = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<SwapExactTokensForTokensWithFlashloan>
  ): SwapExactTokensForTokensWithFlashloan {
    const message = {
      ...baseSwapExactTokensForTokensWithFlashloan,
    } as SwapExactTokensForTokensWithFlashloan;
    message.path = [];
    if (object.router !== undefined && object.router !== null) {
      message.router = object.router;
    } else {
      message.router = "";
    }
    if (object.amountIn !== undefined && object.amountIn !== null) {
      message.amountIn = object.amountIn;
    } else {
      message.amountIn = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = object.deadline;
    } else {
      message.deadline = 0;
    }
    if (object.path !== undefined && object.path !== null) {
      for (const e of object.path) {
        message.path.push(e);
      }
    }
    return message;
  },
};

const baseSwapExactTokensForTokensWithFlashloanMulti: object = {
  router: "",
  amountIn: "",
  deadline: 0,
  path: "",
};

export const SwapExactTokensForTokensWithFlashloanMulti = {
  encode(
    message: SwapExactTokensForTokensWithFlashloanMulti,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.router) {
      writer.uint32(10).string(v!);
    }
    if (message.amountIn !== "") {
      writer.uint32(18).string(message.amountIn);
    }
    if (message.deadline !== 0) {
      writer.uint32(24).int32(message.deadline);
    }
    for (const v of message.path) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): SwapExactTokensForTokensWithFlashloanMulti {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSwapExactTokensForTokensWithFlashloanMulti,
    } as SwapExactTokensForTokensWithFlashloanMulti;
    message.router = [];
    message.path = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.router.push(reader.string());
          break;
        case 2:
          message.amountIn = reader.string();
          break;
        case 3:
          message.deadline = reader.int32();
          break;
        case 4:
          message.path.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SwapExactTokensForTokensWithFlashloanMulti {
    const message = {
      ...baseSwapExactTokensForTokensWithFlashloanMulti,
    } as SwapExactTokensForTokensWithFlashloanMulti;
    message.router = [];
    message.path = [];
    if (object.router !== undefined && object.router !== null) {
      for (const e of object.router) {
        message.router.push(String(e));
      }
    }
    if (object.amountIn !== undefined && object.amountIn !== null) {
      message.amountIn = String(object.amountIn);
    } else {
      message.amountIn = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = Number(object.deadline);
    } else {
      message.deadline = 0;
    }
    if (object.path !== undefined && object.path !== null) {
      for (const e of object.path) {
        message.path.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: SwapExactTokensForTokensWithFlashloanMulti): unknown {
    const obj: any = {};
    if (message.router) {
      obj.router = message.router.map((e) => e);
    } else {
      obj.router = [];
    }
    message.amountIn !== undefined && (obj.amountIn = message.amountIn);
    message.deadline !== undefined && (obj.deadline = message.deadline);
    if (message.path) {
      obj.path = message.path.map((e) => e);
    } else {
      obj.path = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<SwapExactTokensForTokensWithFlashloanMulti>
  ): SwapExactTokensForTokensWithFlashloanMulti {
    const message = {
      ...baseSwapExactTokensForTokensWithFlashloanMulti,
    } as SwapExactTokensForTokensWithFlashloanMulti;
    message.router = [];
    message.path = [];
    if (object.router !== undefined && object.router !== null) {
      for (const e of object.router) {
        message.router.push(e);
      }
    }
    if (object.amountIn !== undefined && object.amountIn !== null) {
      message.amountIn = object.amountIn;
    } else {
      message.amountIn = "";
    }
    if (object.deadline !== undefined && object.deadline !== null) {
      message.deadline = object.deadline;
    } else {
      message.deadline = 0;
    }
    if (object.path !== undefined && object.path !== null) {
      for (const e of object.path) {
        message.path.push(e);
      }
    }
    return message;
  },
};

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

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
// @ts-ignore
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
