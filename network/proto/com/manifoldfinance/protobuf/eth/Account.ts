// Original file: proto/eth.proto


export interface Account {
  'balance'?: (string);
  'nonce'?: (string);
  'codeHash'?: (string);
  'storageRoot'?: (string);
  '_nonce'?: "nonce";
  '_codeHash'?: "codeHash";
  '_storageRoot'?: "storageRoot";
}

export interface Account__Output {
  'balance': (string);
  'nonce'?: (string);
  'codeHash'?: (string);
  'storageRoot'?: (string);
  '_nonce': "nonce";
  '_codeHash': "codeHash";
  '_storageRoot': "storageRoot";
}
