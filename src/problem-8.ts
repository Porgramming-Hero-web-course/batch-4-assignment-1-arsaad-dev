{
  // Problem - 8

  const validateKeys = <T extends object>(
    obj: T,
    keys: (keyof T)[]
  ): boolean => {
    const properties = Object.keys(obj);
    let isAvailable = true;
    keys.forEach((item) => {
      if (!properties.includes(item as string)) {
        isAvailable = false;
      }
    });
    return isAvailable;
  };

  // Sample Input:
  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  const result = validateKeys(person, ["name", "age"]);
  console.log(result);

  //
}
