// Original file: proto/eth.proto


export interface TransactionLog {
  'address'?: (string);
  'data'?: (string);
  'transactionLogIndex'?: (number);
  'transactionIndex'?: (number);
  'transactionHash'?: (string);
  'blockHash'?: (string);
  'blockNumber'?: (string);
  'removed'?: (boolean);
  'topics'?: (string)[];
}

export interface TransactionLog__Output {
  'address': (string);
  'data': (string);
  'transactionLogIndex': (number);
  'transactionIndex': (number);
  'transactionHash': (string);
  'blockHash': (string);
  'blockNumber': (string);
  'removed': (boolean);
  'topics': (string)[];
}
