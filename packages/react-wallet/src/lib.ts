/**
 *  @package useWallet
 *  @since 0.1.0
 *  @link
 *  @version 0.1.0
 *
 */

import Web3Modal, { ICoreOptions } from 'web3modal';
import { Network, Web3Provider } from '@ethersproject/providers';
import create from 'zustand/esm';
import { useEffect } from 'react';

type State = {
  provider?: Web3Provider;
  account?: Account;
  network?: Network;
  web3Modal?: Web3Modal;
};

const useStore = create<State>((_set) => ({}));

type Account = string;
type ConnectWallet = (opts?: Partial<ICoreOptions>) => void;
type DisconnectWallet = () => void;
type UseWallet = () => State & {
  connect: ConnectWallet;
  disconnect: DisconnectWallet;
};

export const useWallet: UseWallet = () => {
  /**
   * @useWallet
   * @summary Retrieve the current values from the store, & automatically re-render on updates
   * @const account
   * @const network
   * @const provider
   * @const web3Modal
   */
  const account = useStore((state) => state.account);
  const network = useStore((state) => state.network);
  const provider = useStore((state) => state.provider);
  const web3Modal = useStore((state) => state.web3Modal);

  useEffect(() => {
    useStore.setState({ web3Modal: new Web3Modal() });
  }, []);

  const connect: ConnectWallet = async (opts) => {
    /**
     * setState
     * @description Launch modal with the given options
     */
    const web3Modal = new Web3Modal(opts);
    useStore.setState({ web3Modal });
    const web3ModalProvider = await web3Modal.connect();

    /**
     * @const initialProvider
     * @description Set up Ethers provider and initial state with the response from the web3Modal
     */
    const initialProvider = new Web3Provider(web3ModalProvider, 'any');
    const getNetwork = () => initialProvider.getNetwork();
    const initialAccounts = await initialProvider.listAccounts();
    const initialNetwork = await getNetwork();
    useStore.setState({
      provider: initialProvider,
      network: initialNetwork,
      account: initialAccounts[0],
    });

    /**
     *
     *  Set up event listeners to handle state changes
     *
     */
    web3ModalProvider.on('accountsChanged', (accounts: string[]) => {
      useStore.setState({ account: accounts[0] });
    });

    web3ModalProvider.on('chainChanged', async (_chainId: string) => {
      const network = await getNetwork();
      useStore.setState({ network });
    });

    web3ModalProvider.on('disconnect', () => {
      web3Modal.clearCachedProvider();
    });
  };

  const disconnect: DisconnectWallet = async () => {
    web3Modal?.clearCachedProvider();
    useStore.setState({
      provider: undefined,
      network: undefined,
      account: undefined,
    });
  };

  return {
    connect,
    provider,
    account,
    network,
    disconnect,
    web3Modal,
  };
};
