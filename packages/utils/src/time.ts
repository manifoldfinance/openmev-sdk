/**
 * @returns {number} the current Unix timestamp in milliseconds
 */
export const currentTimestampMillis = (): number => Date.now();

/**
 * Hold thread for the passed time (in milliseconds)
 *
 * @param {number} ms - The numbe of milliseconds to wait
 * @example
 *  // Sleep for 100 ms
 *  await sleep(100)
 */
export const sleep = async (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));
