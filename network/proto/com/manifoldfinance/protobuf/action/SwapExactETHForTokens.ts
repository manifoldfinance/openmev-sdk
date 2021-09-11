// Original file: proto/action.proto


export interface SwapExactETHForTokens {
  'amountOutMin'?: (string);
  'to'?: (string);
  'deadline'?: (number);
  'path'?: (string)[];
}

export interface SwapExactETHForTokens__Output {
  'amountOutMin': (string);
  'to': (string);
  'deadline': (number);
  'path': (string)[];
}
