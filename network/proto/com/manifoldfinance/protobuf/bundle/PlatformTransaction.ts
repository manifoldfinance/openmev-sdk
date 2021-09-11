// Original file: proto/bundle.proto

import type { Transaction as _com_manifoldfinance_protobuf_eth_Transaction, Transaction__Output as _com_manifoldfinance_protobuf_eth_Transaction__Output } from '../../../../com/manifoldfinance/protobuf/eth/Transaction';
import type { ERC20Approval as _com_manifoldfinance_protobuf_action_ERC20Approval, ERC20Approval__Output as _com_manifoldfinance_protobuf_action_ERC20Approval__Output } from '../../../../com/manifoldfinance/protobuf/action/ERC20Approval';
import type { SwapExactTokensForTokens as _com_manifoldfinance_protobuf_action_SwapExactTokensForTokens, SwapExactTokensForTokens__Output as _com_manifoldfinance_protobuf_action_SwapExactTokensForTokens__Output } from '../../../../com/manifoldfinance/protobuf/action/SwapExactTokensForTokens';
import type { SwapTokensForExactTokens as _com_manifoldfinance_protobuf_action_SwapTokensForExactTokens, SwapTokensForExactTokens__Output as _com_manifoldfinance_protobuf_action_SwapTokensForExactTokens__Output } from '../../../../com/manifoldfinance/protobuf/action/SwapTokensForExactTokens';
import type { SwapExactETHForTokens as _com_manifoldfinance_protobuf_action_SwapExactETHForTokens, SwapExactETHForTokens__Output as _com_manifoldfinance_protobuf_action_SwapExactETHForTokens__Output } from '../../../../com/manifoldfinance/protobuf/action/SwapExactETHForTokens';
import type { SwapTokensForExactETH as _com_manifoldfinance_protobuf_action_SwapTokensForExactETH, SwapTokensForExactETH__Output as _com_manifoldfinance_protobuf_action_SwapTokensForExactETH__Output } from '../../../../com/manifoldfinance/protobuf/action/SwapTokensForExactETH';
import type { SwapExactTokensForETH as _com_manifoldfinance_protobuf_action_SwapExactTokensForETH, SwapExactTokensForETH__Output as _com_manifoldfinance_protobuf_action_SwapExactTokensForETH__Output } from '../../../../com/manifoldfinance/protobuf/action/SwapExactTokensForETH';
import type { SwapETHForExactTokens as _com_manifoldfinance_protobuf_action_SwapETHForExactTokens, SwapETHForExactTokens__Output as _com_manifoldfinance_protobuf_action_SwapETHForExactTokens__Output } from '../../../../com/manifoldfinance/protobuf/action/SwapETHForExactTokens';
import type { SwapExactTokensForTokensSupportingFeeOnTransferTokens as _com_manifoldfinance_protobuf_action_SwapExactTokensForTokensSupportingFeeOnTransferTokens, SwapExactTokensForTokensSupportingFeeOnTransferTokens__Output as _com_manifoldfinance_protobuf_action_SwapExactTokensForTokensSupportingFeeOnTransferTokens__Output } from '../../../../com/manifoldfinance/protobuf/action/SwapExactTokensForTokensSupportingFeeOnTransferTokens';
import type { SwapExactETHForTokensSupportingFeeOnTransferTokens as _com_manifoldfinance_protobuf_action_SwapExactETHForTokensSupportingFeeOnTransferTokens, SwapExactETHForTokensSupportingFeeOnTransferTokens__Output as _com_manifoldfinance_protobuf_action_SwapExactETHForTokensSupportingFeeOnTransferTokens__Output } from '../../../../com/manifoldfinance/protobuf/action/SwapExactETHForTokensSupportingFeeOnTransferTokens';
import type { SwapExactTokensForETHSupportingFeeOnTransferTokens as _com_manifoldfinance_protobuf_action_SwapExactTokensForETHSupportingFeeOnTransferTokens, SwapExactTokensForETHSupportingFeeOnTransferTokens__Output as _com_manifoldfinance_protobuf_action_SwapExactTokensForETHSupportingFeeOnTransferTokens__Output } from '../../../../com/manifoldfinance/protobuf/action/SwapExactTokensForETHSupportingFeeOnTransferTokens';
import type { SwapExactTokensForTokensWithFlashloan as _com_manifoldfinance_protobuf_action_SwapExactTokensForTokensWithFlashloan, SwapExactTokensForTokensWithFlashloan__Output as _com_manifoldfinance_protobuf_action_SwapExactTokensForTokensWithFlashloan__Output } from '../../../../com/manifoldfinance/protobuf/action/SwapExactTokensForTokensWithFlashloan';
import type { SwapExactTokensForTokensWithFlashloanMulti as _com_manifoldfinance_protobuf_action_SwapExactTokensForTokensWithFlashloanMulti, SwapExactTokensForTokensWithFlashloanMulti__Output as _com_manifoldfinance_protobuf_action_SwapExactTokensForTokensWithFlashloanMulti__Output } from '../../../../com/manifoldfinance/protobuf/action/SwapExactTokensForTokensWithFlashloanMulti';

export interface PlatformTransaction {
  'sender'?: (string);
  'transaction'?: (_com_manifoldfinance_protobuf_eth_Transaction | null);
  'erc20Approval'?: (_com_manifoldfinance_protobuf_action_ERC20Approval | null);
  'swapExactTokensForTokens'?: (_com_manifoldfinance_protobuf_action_SwapExactTokensForTokens | null);
  'swapTokensForExactTokens'?: (_com_manifoldfinance_protobuf_action_SwapTokensForExactTokens | null);
  'swapExactEthForTokens'?: (_com_manifoldfinance_protobuf_action_SwapExactETHForTokens | null);
  'swapTokensForExact_ETH'?: (_com_manifoldfinance_protobuf_action_SwapTokensForExactETH | null);
  'swapExactTokensFor_ETH'?: (_com_manifoldfinance_protobuf_action_SwapExactTokensForETH | null);
  'swapEthForExactTokens'?: (_com_manifoldfinance_protobuf_action_SwapETHForExactTokens | null);
  'swapExactTokensForTokensSupportingFeeOnTransferTokens'?: (_com_manifoldfinance_protobuf_action_SwapExactTokensForTokensSupportingFeeOnTransferTokens | null);
  'swapExactEthForTokensSupportingFeeOnTransferTokens'?: (_com_manifoldfinance_protobuf_action_SwapExactETHForTokensSupportingFeeOnTransferTokens | null);
  'swapExactTokensForEthSupportingFeeOnTransferTokens'?: (_com_manifoldfinance_protobuf_action_SwapExactTokensForETHSupportingFeeOnTransferTokens | null);
  'swapExactTokensForTokensWithFlashloan'?: (_com_manifoldfinance_protobuf_action_SwapExactTokensForTokensWithFlashloan | null);
  'swapExactTokensForTokensWithFlashloanMulti'?: (_com_manifoldfinance_protobuf_action_SwapExactTokensForTokensWithFlashloanMulti | null);
  'action'?: "erc20Approval"|"swapExactTokensForTokens"|"swapTokensForExactTokens"|"swapExactEthForTokens"|"swapTokensForExact_ETH"|"swapExactTokensFor_ETH"|"swapEthForExactTokens"|"swapExactTokensForTokensSupportingFeeOnTransferTokens"|"swapExactEthForTokensSupportingFeeOnTransferTokens"|"swapExactTokensForEthSupportingFeeOnTransferTokens"|"swapExactTokensForTokensWithFlashloan"|"swapExactTokensForTokensWithFlashloanMulti";
}

export interface PlatformTransaction__Output {
  'sender': (string);
  'transaction': (_com_manifoldfinance_protobuf_eth_Transaction__Output | null);
  'erc20Approval'?: (_com_manifoldfinance_protobuf_action_ERC20Approval__Output | null);
  'swapExactTokensForTokens'?: (_com_manifoldfinance_protobuf_action_SwapExactTokensForTokens__Output | null);
  'swapTokensForExactTokens'?: (_com_manifoldfinance_protobuf_action_SwapTokensForExactTokens__Output | null);
  'swapExactEthForTokens'?: (_com_manifoldfinance_protobuf_action_SwapExactETHForTokens__Output | null);
  'swapTokensForExact_ETH'?: (_com_manifoldfinance_protobuf_action_SwapTokensForExactETH__Output | null);
  'swapExactTokensFor_ETH'?: (_com_manifoldfinance_protobuf_action_SwapExactTokensForETH__Output | null);
  'swapEthForExactTokens'?: (_com_manifoldfinance_protobuf_action_SwapETHForExactTokens__Output | null);
  'swapExactTokensForTokensSupportingFeeOnTransferTokens'?: (_com_manifoldfinance_protobuf_action_SwapExactTokensForTokensSupportingFeeOnTransferTokens__Output | null);
  'swapExactEthForTokensSupportingFeeOnTransferTokens'?: (_com_manifoldfinance_protobuf_action_SwapExactETHForTokensSupportingFeeOnTransferTokens__Output | null);
  'swapExactTokensForEthSupportingFeeOnTransferTokens'?: (_com_manifoldfinance_protobuf_action_SwapExactTokensForETHSupportingFeeOnTransferTokens__Output | null);
  'swapExactTokensForTokensWithFlashloan'?: (_com_manifoldfinance_protobuf_action_SwapExactTokensForTokensWithFlashloan__Output | null);
  'swapExactTokensForTokensWithFlashloanMulti'?: (_com_manifoldfinance_protobuf_action_SwapExactTokensForTokensWithFlashloanMulti__Output | null);
  'action': "erc20Approval"|"swapExactTokensForTokens"|"swapTokensForExactTokens"|"swapExactEthForTokens"|"swapTokensForExact_ETH"|"swapExactTokensFor_ETH"|"swapEthForExactTokens"|"swapExactTokensForTokensSupportingFeeOnTransferTokens"|"swapExactEthForTokensSupportingFeeOnTransferTokens"|"swapExactTokensForEthSupportingFeeOnTransferTokens"|"swapExactTokensForTokensWithFlashloan"|"swapExactTokensForTokensWithFlashloanMulti";
}
