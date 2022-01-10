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

export class OpenMEV {
    constructor();
    constructor(provider: provider);
    constructor(provider: provider, net: net.Socket);

   sendBundle(
        signedTransaction: SendBundleArgs,
        callback?: (error: Error, hash: string) =>void
    ): Promise<string>

    getBundlePrice(
        callback?: (error: Error, price: number) => void
    ): Promise<number>

    getBundleByHash(
        bundleHash: string,
        callback?: (error: Error, bundle: Bundle) => void
    ): Promise<Bundle>;

    requestAccounts(): Promise<string[]>
    requestAccounts(callback: (error: Error, result: string[]) => void): Promise<string[]>
}

export interface SendBundleArgs {
    txs: string[];
    maxBlockNumber?: string;
    minTimestamp?: number | string;
    maxTimestamp?: number | string;
    revertingTxHashes?: string[];
}

export interface Bundle {
    txs: Transaction[];
    maxBlockNumber?: string;
    minTimestamp?: number | string;
    maxTimestamp?: number | string;
    revertingTxHashes?: string[];
    hash?: string;
    price?: number;
}

export class formatters {

    static outputTransactionFormatter(receipt: any): any;

    static outputBundleHashFormatter(bundleHash: any): any;

    static outputBundleFormatter(bundle: any): any;
}

