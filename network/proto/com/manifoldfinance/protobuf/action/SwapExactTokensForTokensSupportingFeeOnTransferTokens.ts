// Original file: proto/action.proto


export interface SwapExactTokensForTokensSupportingFeeOnTransferTokens {
  'amountIn'?: (string);
  'amountOutMin'?: (string);
  'to'?: (string);
  'deadline'?: (number);
  'path'?: (string)[];
}

export interface SwapExactTokensForTokensSupportingFeeOnTransferTokens__Output {
  'amountIn': (string);
  'amountOutMin': (string);
  'to': (string);
  'deadline': (number);
  'path': (string)[];
}
