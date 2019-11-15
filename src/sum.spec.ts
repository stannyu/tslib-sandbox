import { justSumNums } from './just-sum-file';

describe('sum method test', () => {
  it('should summarize two numbers', () => {
    expect(justSumNums(1, 2)).toEqual(3);
  });
});
