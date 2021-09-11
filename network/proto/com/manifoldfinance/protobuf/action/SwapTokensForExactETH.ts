// Original file: proto/action.proto


export interface SwapTokensForExactETH {
  'amountOut'?: (string);
  'amountInMax'?: (string);
  'to'?: (string);
  'deadline'?: (number);
  'path'?: (string)[];
}

export interface SwapTokensForExactETH__Output {
  'amountOut': (string);
  'amountInMax': (string);
  'to': (string);
  'deadline': (number);
  'path': (string)[];
}
