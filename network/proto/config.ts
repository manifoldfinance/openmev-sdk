import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';


type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  com: {
    manifoldfinance: {
      protobuf: {
        config: {
          BundleSourceId: EnumTypeDefinition
          MarketContract: MessageTypeDefinition
          Miner: MessageTypeDefinition
          MinerRelaySystemConfig: MessageTypeDefinition
          PlatformAccount: MessageTypeDefinition
          PlatformToken: MessageTypeDefinition
          SenderDeny: MessageTypeDefinition
          SignerAllow: MessageTypeDefinition
          SignerDeny: MessageTypeDefinition
          SushiLiquidityPair: MessageTypeDefinition
          SystemConfig: MessageTypeDefinition
          SystemConfigId: EnumTypeDefinition
          UniLiquidityPair: MessageTypeDefinition
        }
      }
    }
  }
}

