{
  // Problem 2

  const removeDuplicates = (param: number[]): number[] => {
    let uniqueNumbers: number[] = [];
    param.forEach((item) => {
      if (!uniqueNumbers.includes(item)) {
        uniqueNumbers.push(item);
      }
    });
    return uniqueNumbers;
  };

  const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
  console.log(result);

  //
}
