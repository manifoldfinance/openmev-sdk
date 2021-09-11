import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';


type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  com: {
    manifoldfinance: {
      protobuf: {
        action: {
          ERC20Approval: MessageTypeDefinition
          ERC20Transfer: MessageTypeDefinition
          SwapETHForExactTokens: MessageTypeDefinition
          SwapExactETHForTokens: MessageTypeDefinition
          SwapExactETHForTokensSupportingFeeOnTransferTokens: MessageTypeDefinition
          SwapExactTokensForETH: MessageTypeDefinition
          SwapExactTokensForETHSupportingFeeOnTransferTokens: MessageTypeDefinition
          SwapExactTokensForTokens: MessageTypeDefinition
          SwapExactTokensForTokensSupportingFeeOnTransferTokens: MessageTypeDefinition
          SwapExactTokensForTokensWithFlashloan: MessageTypeDefinition
          SwapExactTokensForTokensWithFlashloanMulti: MessageTypeDefinition
          SwapTokensForExactETH: MessageTypeDefinition
          SwapTokensForExactTokens: MessageTypeDefinition
        }
        bundle: {
          Action: MessageTypeDefinition
          BundleForSending: MessageTypeDefinition
          BundleForSigning: MessageTypeDefinition
          BundleKey: MessageTypeDefinition
          MinerBribe: MessageTypeDefinition
          PlatformTransaction: MessageTypeDefinition
          SignedTransaction: MessageTypeDefinition
        }
        eth: {
          AccessListEntry: MessageTypeDefinition
          Account: MessageTypeDefinition
          AccountBalance: MessageTypeDefinition
          AccountBalanceKey: MessageTypeDefinition
          AccountKey: MessageTypeDefinition
          BalanceCheck: MessageTypeDefinition
          Block: MessageTypeDefinition
          BlockAccountBalances: MessageTypeDefinition
          BlockHash: MessageTypeDefinition
          BlockHeader: MessageTypeDefinition
          BlockNumber: MessageTypeDefinition
          BlockReceipts: MessageTypeDefinition
          EIP1559Transaction: MessageTypeDefinition
          EIP2930Transaction: MessageTypeDefinition
          FrontierTransaction: MessageTypeDefinition
          TokenBalance: MessageTypeDefinition
          TokenBalanceKey: MessageTypeDefinition
          Transaction: MessageTypeDefinition
          TransactionKey: MessageTypeDefinition
          TransactionLog: MessageTypeDefinition
          TransactionLogKey: MessageTypeDefinition
          TransactionReceipt: MessageTypeDefinition
          TransactionType: EnumTypeDefinition
        }
      }
    }
  }
}

