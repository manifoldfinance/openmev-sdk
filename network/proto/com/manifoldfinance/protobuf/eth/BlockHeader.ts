// Original file: proto/eth.proto

import type { Long } from '@grpc/proto-loader';

export interface BlockHeader {
  'blockNumber'?: (string);
  'blockHash'?: (string);
  'parentHash'?: (string);
  'mixHash'?: (string);
  'sha3Uncles'?: (string);
  'logsBloom'?: (string);
  'transactionsRoot'?: (string);
  'stateRoot'?: (string);
  'receiptsRoot'?: (string);
  'miner'?: (string);
  'difficulty'?: (string);
  'totalDifficulty'?: (string);
  'extraData'?: (string);
  'size'?: (number | string | Long);
  'gasLimit'?: (number | string | Long);
  'gasUsed'?: (number | string | Long);
  'timestamp'?: (number | string | Long);
  'nonce'?: (string);
  'author'?: (string);
  'uncles'?: (string)[];
  'sealFields'?: (string)[];
  'transactions'?: (string)[];
  'baseFeePerGas'?: (string);
  '_nonce'?: "nonce";
  '_author'?: "author";
  '_baseFeePerGas'?: "baseFeePerGas";
}

export interface BlockHeader__Output {
  'blockNumber': (string);
  'blockHash': (string);
  'parentHash': (string);
  'mixHash': (string);
  'sha3Uncles': (string);
  'logsBloom': (string);
  'transactionsRoot': (string);
  'stateRoot': (string);
  'receiptsRoot': (string);
  'miner': (string);
  'difficulty': (string);
  'totalDifficulty': (string);
  'extraData': (string);
  'size': (string);
  'gasLimit': (string);
  'gasUsed': (string);
  'timestamp': (string);
  'nonce'?: (string);
  'author'?: (string);
  'uncles': (string)[];
  'sealFields': (string)[];
  'transactions': (string)[];
  'baseFeePerGas'?: (string);
  '_nonce': "nonce";
  '_author': "author";
  '_baseFeePerGas': "baseFeePerGas";
}
