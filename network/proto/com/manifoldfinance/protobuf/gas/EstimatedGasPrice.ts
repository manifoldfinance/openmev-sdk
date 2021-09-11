// Original file: proto/gas.proto


export interface EstimatedGasPrice {
  'confidence'?: (number);
  'price'?: (number);
  'maxPriorityFeePerGas'?: (number | string);
  'maxFeePerGas'?: (number | string);
}

export interface EstimatedGasPrice__Output {
  'confidence': (number);
  'price': (number);
  'maxPriorityFeePerGas': (number);
  'maxFeePerGas': (number);
}
