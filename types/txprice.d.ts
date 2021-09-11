export interface TransactionPricing {
    readonly blockPrices:        BlockPrice[];
    readonly currentBlockNumber: number;
    readonly maxPrice:           number;
    readonly msSinceLastBlock:   number;
    readonly network:            string;
    readonly system:             string;
    readonly unit:               string;
}

export interface BlockPrice {
    readonly baseFeePerGas:             number;
    readonly blockNumber:               number;
    readonly estimatedPrices:           EstimatedPrice[];
    readonly estimatedTransactionCount: number;
}

export interface EstimatedPrice {
    confidence?:                   number;
    readonly maxFeePerGas:         number;
    readonly maxPriorityFeePerGas: number;
    readonly price:                number;
}
