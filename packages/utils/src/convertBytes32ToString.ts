/*
 * @export const convertBytes32ToString
 * @return string
 */

export const convertBytes32ToString = (output: string) => {
  if (!output || typeof output !== 'string') return undefined;
  return output.match(bytes) ? parseBytes32String(output) : output;
};
