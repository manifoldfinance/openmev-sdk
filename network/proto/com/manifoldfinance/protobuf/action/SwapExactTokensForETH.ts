// Original file: proto/action.proto


export interface SwapExactTokensForETH {
  'amountIn'?: (string);
  'amountOutMin'?: (string);
  'to'?: (string);
  'deadline'?: (number);
  'path'?: (string)[];
}

export interface SwapExactTokensForETH__Output {
  'amountIn': (string);
  'amountOutMin': (string);
  'to': (string);
  'deadline': (number);
  'path': (string)[];
}
