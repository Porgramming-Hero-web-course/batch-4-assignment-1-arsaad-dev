{
  // Problem - 7

  class Car {
    constructor(
      public make: string,
      public model: string,
      public year: number
    ) {}

    getCarAge() {
      const today = new Date();
      const currentYear = today.getFullYear();
      const carAge = currentYear - this.year;
      return carAge;
    }
  }

  // Sample Input 1:
  const car = new Car("Honda", "Civic", 2018);
  const result = car.getCarAge();
  console.log(result);

  //
}
