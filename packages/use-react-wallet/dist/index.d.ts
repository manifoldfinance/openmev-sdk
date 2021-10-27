import Web3Modal, { ICoreOptions } from 'web3modal';
import { Network, Web3Provider } from '@ethersproject/providers';
declare type State = {
    provider?: Web3Provider;
    account?: Account;
    network?: Network;
    web3Modal?: Web3Modal;
};
declare type Account = string;
declare type ConnectWallet = (opts?: Partial<ICoreOptions>) => void;
declare type DisconnectWallet = () => void;
declare type useReactWallet = () => State & {
    connect: ConnectWallet;
    disconnect: DisconnectWallet;
};
export declare const useReactWallet: useReactWallet;
export {};
