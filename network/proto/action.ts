import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';


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
      }
    }
  }
}

