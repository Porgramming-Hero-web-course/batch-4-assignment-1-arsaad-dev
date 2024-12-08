{
  // Problem 4

  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type Shape = Circle | Rectangle;

  const calculateShapeArea = (param: Shape) => {
    if (param.shape === "circle") {
      return Math.PI * (param.radius * param.radius);
    } else if (param.shape === "rectangle") {
      return param.height * param.width;
    }
  };

  // Sample Input 1:
  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

  console.log(circleArea);

  // Sample Input 2:
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

  console.log(rectangleArea);
  //
}
