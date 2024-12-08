# The significance of union and intersection types in Typescript.

Typescript is build on top of JavaScript but it has more benefits. Two of those benefits are Union and intersection types are one of the most very important methods used in Typescript. These methods makes our code reusable, flexible and cleaner. First we'll define what they are.

### Union Type

We can use union types to define a new type by combining 2 types but the new type can take the form of any of the 2 types.

```

  type Student = {
    institute: string;
    roll: number;
  }

  type officeWorker = {
    company: string;
    designation: string;
    experience: number;
  }

  type Person = Student | officeWorker;
```

We can also use it to declare variables where multiple values can be available.

```
  type Vehicle = {
    brand: string;
    model: string;
    year: number;
    drivetrain: AWD | RWD | FWD;
  }
```

As we can see here that the drivetrain property here is dynamic and can be any 3 of them.

Union type is very useful when we are working of multiple types of parameters in a function -

```
  const printType = (param: string | number) {
    if(typeof param === "string") {
      console.log("This is a string type value")
    } else if(typeof param === "number") {
      console.log("This is a number type value")
    } else {
      console.log("Invalid Value")
    }
  }
```

So, we use Union types when we are working with multiple types of value or variables. We can create dynamic functions and types with Union type.

### Intersection Type

We can use the intersection type to create new type where it must contain the properties of all the types.

```
  type User = {
    username: string;
    email: string;
  }

  type AdminPrivilege = {
    isAdmin: boolean;
  }

  type Admin = User & AdminPrivilege;
```

This way we can make our types reusable which will keep our code DRY(Do not Repeat Yourself).

### Conclusion

Union and Intersection Types makes our code more cleaner and maintainable. As this gives us warning where we makes any mistakes, that way it's also less bug free.
