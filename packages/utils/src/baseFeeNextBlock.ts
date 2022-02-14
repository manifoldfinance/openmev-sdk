/**
 *
 * @export baseFeeNextBlock
 * @const BASE_FEE_MAX_CHANGE_DENOMINATOR
 * @since 0.2.0
 */

import { BigNumber } from '@ethersproject/bignumber';

const BASE_FEE_MAX_CHANGE_DENOMINATOR = 8;

export const getBaseFeeInNextBlock = (
  currentBaseFeePerGas: BigNumber,
  currentGasUsed: BigNumber,
  currentGasLimit: BigNumber,
): BigNumber => {
  const currentGasTarget = currentGasLimit.div(2);

  if (currentGasUsed.eq(currentGasTarget)) {
    return currentBaseFeePerGas;
  } else if (currentGasUsed.gt(currentGasTarget)) {
    const gasUsedDelta = currentGasUsed.sub(currentGasTarget);
    const baseFeePerGasDelta = currentBaseFeePerGas
      .mul(gasUsedDelta)
      .div(currentGasTarget)
      .div(BASE_FEE_MAX_CHANGE_DENOMINATOR);

    return currentBaseFeePerGas.add(baseFeePerGasDelta);
  } else {
    const gasUsedDelta = currentGasTarget.sub(currentGasUsed);
    const baseFeePerGasDelta = currentBaseFeePerGas
      .mul(gasUsedDelta)
      .div(currentGasTarget)
      .div(BASE_FEE_MAX_CHANGE_DENOMINATOR);

    return currentBaseFeePerGas.sub(baseFeePerGasDelta);
  }
};
