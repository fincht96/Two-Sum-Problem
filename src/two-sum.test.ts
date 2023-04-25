import TwoSum from './two-sum';

describe('As a user I want to find two integers in a given array that add up to my target integer', () => {
  test('find the first two matching integers that add up to the target integer will be found', () => {
    const targetInteger = 5;
    const arr = [1, 2, 5, 3, 4];

    const result = new TwoSum().findFirstTwoIntegersThatMatchTarget(
      arr,
      targetInteger
    );

    expect(result).toStrictEqual([1, 3]);
  });

  test('No matching integers will be found', () => {
    const targetInteger = 5;
    const arr = [7, 9, 8, 3];
    expect(
      new TwoSum().findFirstTwoIntegersThatMatchTarget(arr, targetInteger)
    ).toStrictEqual([]);
  });
});
