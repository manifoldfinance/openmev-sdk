// Original file: proto/bundle.proto


export interface SignedTransaction {
  'signer'?: (string);
  'from'?: (string);
  'to'?: (string);
  'txHash'?: (string);
  'signedTx'?: (string);
}

export interface SignedTransaction__Output {
  'signer': (string);
  'from': (string);
  'to': (string);
  'txHash': (string);
  'signedTx': (string);
}
