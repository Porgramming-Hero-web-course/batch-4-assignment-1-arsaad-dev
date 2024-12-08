{
  // Problem 1

  const sumArray = (param: number[]): number => {
    return param.reduce((prev, current) => prev + current, 0);
  };

  const result = sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  console.log(result);

  //
}
