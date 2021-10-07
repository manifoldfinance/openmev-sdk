import { currentTimestampMillis, sleep } from '../../lib/src/index';

declare function expect(val: any, message?: string): any;

describe('Time functions', () => {
  describe('sleep', () => {
    it('should hold the thread for the wanted time', async () => {
      const ts1 = currentTimestampMillis();
      const hold = 100;
      await sleep(hold);
      const ts2 = currentTimestampMillis();
      ts2.should.be.gte(ts1 + hold);
    });
  });
});
