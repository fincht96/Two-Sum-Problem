class TwoSum {
  findFirstTwoIntegersThatMatchTarget(inputArray: number[], target: number) {
    for (let outerIndex = 0; outerIndex < inputArray.length; outerIndex++) {
      const firstMatchValue = inputArray[outerIndex];

      for (let innerIndex = 0; innerIndex < inputArray.length; innerIndex++) {
        if (
          firstMatchValue + inputArray[innerIndex] === target &&
          outerIndex !== innerIndex
        ) {
          return [outerIndex, innerIndex];
        }
      }
    }

    return [];
  }
}

export default TwoSum;
