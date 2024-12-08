{
  // Problem 3

  const countWordOccurrences = (sentence: string, word: string): number => {
    let wordOccurrences = 0;
    sentence
      .toLowerCase()
      .split(" ")
      .forEach((item) => {
        if (item === word) {
          wordOccurrences++;
        }
      });
    return wordOccurrences;
  };

  const result = countWordOccurrences(
    "The cat is a very adorable animal. Cat is loved by everyone around the world. A house cat is usually seen as a lazy pet. Cat got attitudes of their own too.",
    "cat"
  );
  console.log(result);

  //
}
