{
  // Problem 5

  type User = {
    id: number;
    name: string;
    age: number;
    email: string;
    phone: string;
  };

  const getProperty = <X extends User, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user1: User = {
    id: 12,
    name: "Saad",
    age: 24,
    email: "email@gmail.com",
    phone: "01700000000",
  };
  const result = getProperty(user1, "name");
  console.log(result);

  //
}
