// Original file: proto/action.proto


export interface SwapTokensForExactTokens {
  'amountOut'?: (string);
  'amountInMax'?: (string);
  'to'?: (string);
  'deadline'?: (number);
  'path'?: (string)[];
}

export interface SwapTokensForExactTokens__Output {
  'amountOut': (string);
  'amountInMax': (string);
  'to': (string);
  'deadline': (number);
  'path': (string)[];
}
