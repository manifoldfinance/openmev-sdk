// Original file: proto/eth.proto

import type { TransactionType as _com_manifoldfinance_protobuf_eth_TransactionType } from '../../../../com/manifoldfinance/protobuf/eth/TransactionType';
import type { TransactionReceipt as _com_manifoldfinance_protobuf_eth_TransactionReceipt, TransactionReceipt__Output as _com_manifoldfinance_protobuf_eth_TransactionReceipt__Output } from '../../../../com/manifoldfinance/protobuf/eth/TransactionReceipt';
import type { FrontierTransaction as _com_manifoldfinance_protobuf_eth_FrontierTransaction, FrontierTransaction__Output as _com_manifoldfinance_protobuf_eth_FrontierTransaction__Output } from '../../../../com/manifoldfinance/protobuf/eth/FrontierTransaction';
import type { EIP2930Transaction as _com_manifoldfinance_protobuf_eth_EIP2930Transaction, EIP2930Transaction__Output as _com_manifoldfinance_protobuf_eth_EIP2930Transaction__Output } from '../../../../com/manifoldfinance/protobuf/eth/EIP2930Transaction';
import type { EIP1559Transaction as _com_manifoldfinance_protobuf_eth_EIP1559Transaction, EIP1559Transaction__Output as _com_manifoldfinance_protobuf_eth_EIP1559Transaction__Output } from '../../../../com/manifoldfinance/protobuf/eth/EIP1559Transaction';
import type { SwapExactTokensForTokens as _com_manifoldfinance_protobuf_action_SwapExactTokensForTokens, SwapExactTokensForTokens__Output as _com_manifoldfinance_protobuf_action_SwapExactTokensForTokens__Output } from '../../../../com/manifoldfinance/protobuf/action/SwapExactTokensForTokens';
import type { SwapTokensForExactTokens as _com_manifoldfinance_protobuf_action_SwapTokensForExactTokens, SwapTokensForExactTokens__Output as _com_manifoldfinance_protobuf_action_SwapTokensForExactTokens__Output } from '../../../../com/manifoldfinance/protobuf/action/SwapTokensForExactTokens';
import type { SwapExactETHForTokens as _com_manifoldfinance_protobuf_action_SwapExactETHForTokens, SwapExactETHForTokens__Output as _com_manifoldfinance_protobuf_action_SwapExactETHForTokens__Output } from '../../../../com/manifoldfinance/protobuf/action/SwapExactETHForTokens';
import type { SwapTokensForExactETH as _com_manifoldfinance_protobuf_action_SwapTokensForExactETH, SwapTokensForExactETH__Output as _com_manifoldfinance_protobuf_action_SwapTokensForExactETH__Output } from '../../../../com/manifoldfinance/protobuf/action/SwapTokensForExactETH';
import type { SwapExactTokensForETH as _com_manifoldfinance_protobuf_action_SwapExactTokensForETH, SwapExactTokensForETH__Output as _com_manifoldfinance_protobuf_action_SwapExactTokensForETH__Output } from '../../../../com/manifoldfinance/protobuf/action/SwapExactTokensForETH';
import type { SwapETHForExactTokens as _com_manifoldfinance_protobuf_action_SwapETHForExactTokens, SwapETHForExactTokens__Output as _com_manifoldfinance_protobuf_action_SwapETHForExactTokens__Output } from '../../../../com/manifoldfinance/protobuf/action/SwapETHForExactTokens';
import type { SwapExactTokensForTokensSupportingFeeOnTransferTokens as _com_manifoldfinance_protobuf_action_SwapExactTokensForTokensSupportingFeeOnTransferTokens, SwapExactTokensForTokensSupportingFeeOnTransferTokens__Output as _com_manifoldfinance_protobuf_action_SwapExactTokensForTokensSupportingFeeOnTransferTokens__Output } from '../../../../com/manifoldfinance/protobuf/action/SwapExactTokensForTokensSupportingFeeOnTransferTokens';
import type { SwapExactETHForTokensSupportingFeeOnTransferTokens as _com_manifoldfinance_protobuf_action_SwapExactETHForTokensSupportingFeeOnTransferTokens, SwapExactETHForTokensSupportingFeeOnTransferTokens__Output as _com_manifoldfinance_protobuf_action_SwapExactETHForTokensSupportingFeeOnTransferTokens__Output } from '../../../../com/manifoldfinance/protobuf/action/SwapExactETHForTokensSupportingFeeOnTransferTokens';
import type { SwapExactTokensForETHSupportingFeeOnTransferTokens as _com_manifoldfinance_protobuf_action_SwapExactTokensForETHSupportingFeeOnTransferTokens, SwapExactTokensForETHSupportingFeeOnTransferTokens__Output as _com_manifoldfinance_protobuf_action_SwapExactTokensForETHSupportingFeeOnTransferTokens__Output } from '../../../../com/manifoldfinance/protobuf/action/SwapExactTokensForETHSupportingFeeOnTransferTokens';
import type { Long } from '@grpc/proto-loader';

export interface Transaction {
  'type'?: (_com_manifoldfinance_protobuf_eth_TransactionType | keyof typeof _com_manifoldfinance_protobuf_eth_TransactionType);
  'signed'?: (string);
  'deadlineAt'?: (number | string | Long);
  'transactionHash'?: (string);
  'transactionIndex'?: (number);
  'blockHash'?: (string);
  'blockNumber'?: (string);
  'gasPrice'?: (string);
  'receipt'?: (_com_manifoldfinance_protobuf_eth_TransactionReceipt | null);
  'transactionFrontier'?: (_com_manifoldfinance_protobuf_eth_FrontierTransaction | null);
  'transactionEip2930'?: (_com_manifoldfinance_protobuf_eth_EIP2930Transaction | null);
  'transactionEip1559'?: (_com_manifoldfinance_protobuf_eth_EIP1559Transaction | null);
  'swapExactTokensForTokens'?: (_com_manifoldfinance_protobuf_action_SwapExactTokensForTokens | null);
  'swapTokensForExactTokens'?: (_com_manifoldfinance_protobuf_action_SwapTokensForExactTokens | null);
  'swapExactEthForTokens'?: (_com_manifoldfinance_protobuf_action_SwapExactETHForTokens | null);
  'swapTokensForExact_ETH'?: (_com_manifoldfinance_protobuf_action_SwapTokensForExactETH | null);
  'swapExactTokensFor_ETH'?: (_com_manifoldfinance_protobuf_action_SwapExactTokensForETH | null);
  'swapEthForExactTokens'?: (_com_manifoldfinance_protobuf_action_SwapETHForExactTokens | null);
  'swapExactTokensForTokensSupportingFeeOnTransferTokens'?: (_com_manifoldfinance_protobuf_action_SwapExactTokensForTokensSupportingFeeOnTransferTokens | null);
  'swapExactEthForTokensSupportingFeeOnTransferTokens'?: (_com_manifoldfinance_protobuf_action_SwapExactETHForTokensSupportingFeeOnTransferTokens | null);
  'swapExactTokensForEthSupportingFeeOnTransferTokens'?: (_com_manifoldfinance_protobuf_action_SwapExactTokensForETHSupportingFeeOnTransferTokens | null);
  '_signed'?: "signed";
  '_deadlineAt'?: "deadlineAt";
  '_transactionHash'?: "transactionHash";
  '_transactionIndex'?: "transactionIndex";
  '_blockHash'?: "blockHash";
  '_blockNumber'?: "blockNumber";
  '_gasPrice'?: "gasPrice";
  '_receipt'?: "receipt";
  'payload'?: "transactionFrontier"|"transactionEip2930"|"transactionEip1559";
  'action'?: "swapExactTokensForTokens"|"swapTokensForExactTokens"|"swapExactEthForTokens"|"swapTokensForExact_ETH"|"swapExactTokensFor_ETH"|"swapEthForExactTokens"|"swapExactTokensForTokensSupportingFeeOnTransferTokens"|"swapExactEthForTokensSupportingFeeOnTransferTokens"|"swapExactTokensForEthSupportingFeeOnTransferTokens";
}

export interface Transaction__Output {
  'type': (keyof typeof _com_manifoldfinance_protobuf_eth_TransactionType);
  'signed'?: (string);
  'deadlineAt'?: (string);
  'transactionHash'?: (string);
  'transactionIndex'?: (number);
  'blockHash'?: (string);
  'blockNumber'?: (string);
  'gasPrice'?: (string);
  'receipt'?: (_com_manifoldfinance_protobuf_eth_TransactionReceipt__Output | null);
  'transactionFrontier'?: (_com_manifoldfinance_protobuf_eth_FrontierTransaction__Output | null);
  'transactionEip2930'?: (_com_manifoldfinance_protobuf_eth_EIP2930Transaction__Output | null);
  'transactionEip1559'?: (_com_manifoldfinance_protobuf_eth_EIP1559Transaction__Output | null);
  'swapExactTokensForTokens'?: (_com_manifoldfinance_protobuf_action_SwapExactTokensForTokens__Output | null);
  'swapTokensForExactTokens'?: (_com_manifoldfinance_protobuf_action_SwapTokensForExactTokens__Output | null);
  'swapExactEthForTokens'?: (_com_manifoldfinance_protobuf_action_SwapExactETHForTokens__Output | null);
  'swapTokensForExact_ETH'?: (_com_manifoldfinance_protobuf_action_SwapTokensForExactETH__Output | null);
  'swapExactTokensFor_ETH'?: (_com_manifoldfinance_protobuf_action_SwapExactTokensForETH__Output | null);
  'swapEthForExactTokens'?: (_com_manifoldfinance_protobuf_action_SwapETHForExactTokens__Output | null);
  'swapExactTokensForTokensSupportingFeeOnTransferTokens'?: (_com_manifoldfinance_protobuf_action_SwapExactTokensForTokensSupportingFeeOnTransferTokens__Output | null);
  'swapExactEthForTokensSupportingFeeOnTransferTokens'?: (_com_manifoldfinance_protobuf_action_SwapExactETHForTokensSupportingFeeOnTransferTokens__Output | null);
  'swapExactTokensForEthSupportingFeeOnTransferTokens'?: (_com_manifoldfinance_protobuf_action_SwapExactTokensForETHSupportingFeeOnTransferTokens__Output | null);
  '_signed': "signed";
  '_deadlineAt': "deadlineAt";
  '_transactionHash': "transactionHash";
  '_transactionIndex': "transactionIndex";
  '_blockHash': "blockHash";
  '_blockNumber': "blockNumber";
  '_gasPrice': "gasPrice";
  '_receipt': "receipt";
  'payload': "transactionFrontier"|"transactionEip2930"|"transactionEip1559";
  'action': "swapExactTokensForTokens"|"swapTokensForExactTokens"|"swapExactEthForTokens"|"swapTokensForExact_ETH"|"swapExactTokensFor_ETH"|"swapEthForExactTokens"|"swapExactTokensForTokensSupportingFeeOnTransferTokens"|"swapExactEthForTokensSupportingFeeOnTransferTokens"|"swapExactTokensForEthSupportingFeeOnTransferTokens";
}
