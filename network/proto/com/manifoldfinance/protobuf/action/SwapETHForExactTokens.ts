// Original file: proto/action.proto


export interface SwapETHForExactTokens {
  'amountOut'?: (string);
  'to'?: (string);
  'deadline'?: (number);
  'path'?: (string)[];
}

export interface SwapETHForExactTokens__Output {
  'amountOut': (string);
  'to': (string);
  'deadline': (number);
  'path': (string)[];
}
