{
  // Problem - 6

  type Profile = {
    name: string;
    age: number;
    email: string;
  };

  const updateProfile = (
    mainObj: Profile,
    updateObj: Partial<Profile>
  ): object => {
    const updatedUser = { ...mainObj, ...updateObj };
    return updatedUser;
  };

  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(myProfile, { age: 26 }));

  //
}
