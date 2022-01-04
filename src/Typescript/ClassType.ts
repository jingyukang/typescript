const ClassType = () => {
  class Car {
    // color: string;
    constructor(public color: string) {
      //"public" can be change to "readonly" and those are same as defining "color: string;"
      this.color = color;
    }

    start() {
      console.log("start");
    }
  }

  const bmw = new Car("red");
  //
  //
  //Access modifier - public, private, protected
  //public - child class & instance class can access
  //protected - child class can access
  //public - only current class can access
  class Car1 {
    readonly name: string = "car";
    //#name = private name
    color: string;
    static wheels = 4;
    constructor(color: string, name: string) {
      this.color;
    }
    start() {
      console.log("start");
      console.log(this.name);
      console.log(Car1.wheels);
    }
  }

  class Bmw extends Car1 {
    constructor(color: string, name: string) {
      super(color, name);
    }
    showName() {
      console.log(super.name);
    }
  }
  const z4 = new Bmw("black", "zzzz4");
  console.log(Car1.wheels);
  //
  //
  // abstract class
  // "abstract" class is impossible to make object by using "new"
  // only through "extends" class
  abstract class Car2 {
    color: string;
    constructor(color: string) {
      this.color = color;
    }
    start() {
      console.log("start");
    }
    abstract doSomething(): void;
    // "abstract" function under the class
    // a child class have to define the function
  }
  // const car = new Car2("red");

  class Bmw1 extends Car2 {
    constructor(color: string) {
      super(color);
    }
    doSomething() {
      alert(3);
    }
  }
};

export default ClassType;
