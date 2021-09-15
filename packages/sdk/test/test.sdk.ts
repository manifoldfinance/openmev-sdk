// @ignore-file

/**
 * @file OpenMEV SDK Configuration
 * @version 0.1.0
 * @copyright Manifold Finance, Inc. 2021
 * @package openmev-sdk
 */

/**
 *
 *  REFERENCE FILE NOT TO BE COMPILED
 *  THIS INCLUDES ALL THE INTERFACES
 *  COMBINED INTO ONE FILE
 *  FOR DEVELOPERS REFERNCE USE ONLY
 */

export enum BundleSourceId {
  BATCH_BUNDLER = 0,
  KDB = 1,
  UNRECOGNIZED = -1,
}

export function bundleSourceIdFromJSON(object: any): BundleSourceId {
  switch (object) {
    case 0:
    case 'BATCH_BUNDLER':
      return BundleSourceId.BATCH_BUNDLER;
    case 1:
    case 'KDB':
      return BundleSourceId.KDB;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return BundleSourceId.UNRECOGNIZED;
  }
}

export function bundleSourceIdToJSON(object: BundleSourceId): string {
  switch (object) {
    case BundleSourceId.BATCH_BUNDLER:
      return 'BATCH_BUNDLER';
    case BundleSourceId.KDB:
      return 'KDB';
    default:
      return 'UNKNOWN';
  }
}

export interface SystemConfig {
  // @ts-ignore
  key: SystemConfigId;
  /** JSON encoded from db */
  value: string;
  validity: string;
  minerRelaySystemConfig: MinerRelaySystemConfig | undefined;
}

export interface MinerRelaySystemConfig {
  bundleRelayDisabled: boolean;
  allowedBundleSourceId: BundleSourceId;
}

export interface MarketContract {
  id: string;
  name: string;
  /** hex encoded */
  contractAddress: string;
  /** hex encoded */
  factoryAddress: string;
  /** hex encoded */
  codeHash: string;
}

export interface Miner {
  id: string;
  url: string;
  bribeAddress: string;
  validity: string;
}

export interface SenderDeny {
  signer: string;
  reason: string;
  validity: string;
}

export interface SignerDeny {
  sender: string;
  reason: string;
  validity: string;
}

export interface SignerAllow {
  sender: string;
  reason: string;
  validity: string;
}

export interface PlatformAccount {
  address: string;
  name: string;
  isActive: boolean;
  validity: string;
  /** Another account address that will be used as the source of balance updates. Useful for local dev and testing */
  aliasOf?: string | undefined;
}

export interface PlatformToken {
  address: string;
  name: string;
  isActive: boolean;
  validity: string;
}

export interface SushiLiquidityPair {
  id: number;
  address: string;
  baseAddress: string;
  baseSymbol: string;
  baseDecimals: number;
  quoteAddress: string;
  quoteSymbol: string;
  quoteDecimals: number;
  isActive: boolean;
  validity: string;
}

export interface UniLiquidityPair {
  id: number;
  address: string;
  baseAddress: string;
  baseSymbol: string;
  baseDecimals: number;
  quoteAddress: string;
  quoteSymbol: string;
  quoteDecimals: number;
  isActive: boolean;
  validity: string;
}

export interface ERC20Transfer {
  /** hex encoded recipient address */
  recipient: string;
  /** hex encoded amount of tokens */
  amount: string;
}

export interface ERC20Approval {
  spender: string;
  amount: string;
}

export interface SwapExactTokensForTokens {
  /** hex encoded bigint */
  amountIn: string;
  /** hex encoded bigint */
  amountOutMin: string;
  /** hex encoded address */
  to: string;
  /** seconds since epoch */
  deadline: number;
  /** array of hex encoded addresses */
  path: string[];
}

export interface SwapTokensForExactTokens {
  /** hex encoded bigint */
  amountOut: string;
  /** hex encoded bigint */
  amountInMax: string;
  /** hex encoded address */
  to: string;
  /** seconds since epoch */
  deadline: number;
  /** array of hex encoded addresses */
  path: string[];
}

export interface SwapExactETHForTokens {
  /** hex encoded bigint */
  amountOutMin: string;
  /** hex encoded address */
  to: string;
  /** seconds since epoch */
  deadline: number;
  /** array of hex encoded addresses */
  path: string[];
}

export interface SwapTokensForExactETH {
  /** hex encoded bigint */
  amountOut: string;
  /** hex encoded bigint */
  amountInMax: string;
  /** hex encoded address */
  to: string;
  /** seconds since epoch */
  deadline: number;
  /** array of hex encoded addresses */
  path: string[];
}

export interface SwapExactTokensForETH {
  /** hex encoded bigint */
  amountIn: string;
  /** hex encoded bigint */
  amountOutMin: string;
  /** hex encoded address */
  to: string;
  /** seconds since epoch */
  deadline: number;
  /** array of hex encoded addresses */
  path: string[];
}

export interface SwapETHForExactTokens {
  /** hex encoded bigint */
  amountOut: string;
  /** hex encoded address */
  to: string;
  /** seconds since epoch */
  deadline: number;
  /** array of hex encoded addresses */
  path: string[];
}

export interface SwapExactTokensForTokensSupportingFeeOnTransferTokens {
  /** hex encoded bigint */
  amountIn: string;
  /** hex encoded bigint */
  amountOutMin: string;
  /** hex encoded address */
  to: string;
  /** seconds since epoch */
  deadline: number;
  /** array of hex encoded addresses */
  path: string[];
}

export interface SwapExactETHForTokensSupportingFeeOnTransferTokens {
  /** hex encoded bigint */
  amountOutMin: string;
  /** hex encoded address */
  to: string;
  /** seconds since epoch */
  deadline: number;
  /** array of hex encoded addresses */
  path: string[];
}

export interface SwapExactTokensForETHSupportingFeeOnTransferTokens {
  /** hex encoded bigint */
  amountIn: string;
  /** hex encoded bigint */
  amountOutMin: string;
  /** hex encoded address */
  to: string;
  /** seconds since epoch */
  deadline: number;
  /** array of hex encoded addresses */
  path: string[];
}

export interface SwapExactTokensForTokensWithFlashloan {
  /** hex encoded address e.g. Sushi, Uniswap etc */
  router: string;
  /** hex encoded bigint */
  amountIn: string;
  /** seconds since epoch */
  deadline: number;
  /** array of hex encoded addresses */
  path: string[];
}

export interface SwapExactTokensForTokensWithFlashloanMulti {
  /** hex encoded address e.g. Sushi, Uniswap etc */
  router: string[];
  /** hex encoded bigint */
  amountIn: string;
  /** seconds since epoch */
  deadline: number;
  /** array of hex encoded addresses */
  path: string[];
}

export interface SushiLiquidity {
  id: number;
  contractAddress: string;
  baseDecimals: number;
  baseReserve: string;
  quoteDecimals: number;
  quoteReserve: string;
  blockTimestamp: number;
}

export interface BlockSushiLiquidity {
  blockNumber: string;
  liquidity: SushiLiquidity[];
}

export interface UniLiquidity {
  id: number;
  contractAddress: string;
  baseDecimals: number;
  baseReserve: string;
  quoteDecimals: number;
  quoteReserve: string;
  blockTimestamp: number;
}

export interface BlockUniLiquidity {
  blockNumber: string;
  liquidity: UniLiquidity[];
}

export interface EstimatedGasPrice {
  confidence: number;
  price: number;
  maxPriorityFeePerGas: number;
  maxFeePerGas: number;
}

export interface BlockPrice {
  /** hex encoded */
  blockNumber: string;
  estimatedTransactionCount: number;
  baseFeePerGas: number;
  estimatedPrices: EstimatedGasPrice[];
}

export interface GasPrices {
  system: string;
  network: string;
  unit: string;
  maxPrice: number;
  /** hex encoded */
  currentBlockNumber: string;
  msSinceLastBlock: number;
  blockPrices: BlockPrice[];
}
