// Original file: proto/action.proto


export interface SwapExactTokensForTokens {
  'amountIn'?: (string);
  'amountOutMin'?: (string);
  'to'?: (string);
  'deadline'?: (number);
  'path'?: (string)[];
}

export interface SwapExactTokensForTokens__Output {
  'amountIn': (string);
  'amountOutMin': (string);
  'to': (string);
  'deadline': (number);
  'path': (string)[];
}
