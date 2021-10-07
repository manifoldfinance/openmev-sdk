/**
 * @const isSmartContract
 * @returns boolean
 * @summary checks if dealing with EOA or Smart Contract
 */
import { providers, utils } from 'ethers';

const provider = new providers.JsonRpcProvider(rpcUrl);

const bytecode = await provider.getCode(address);

const isSmartContract = bytecode && utils.hexStripZeros(bytecode) !== '0x';
