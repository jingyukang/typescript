const InterfaceTypescript = () => {
  // let user: object;

  // user = {
  //   name: "xx",
  //   age: 30,
  // };

  type Score = "A" | "B" | "C" | "F";

  interface User {
    name: string;
    age: number;
    gender?: string;
    readonly birthYear: number;
    // 1?:string;
    // 2?:string;
    // 3?:string;
    // 4?:string; same as below
    [grade: number]: Score;
  }

  let user: User = {
    name: "xx",
    age: 30,
    birthYear: 2000,
    1: "A",
  };

  user.gender = "male";

  interface Add {
    (num1: number, num2: number): number;
  }

  const add: Add = (x, y) => {
    return x + y;
  };

  add(10, 20);

  interface IsAdult {
    (age: number): boolean;
  }

  const a: IsAdult = (age) => {
    return age > 19;
  };
  a(33);

  // implements

  interface Car {
    color: string;
    wheels: number;
    start(): void;
  }
  class Bmw implements Car {
    color;
    wheels = 4;
    constructor(c: string) {
      this.color = c;
    }
    start() {
      console.log("go..");
    }
    door = 5;
  }

  const myCar = new Bmw("green");
  console.log(myCar);

  //extends

  interface Mercedes extends Car {
    door: number;
    stop(): void;
  }

  const mySecondCar: Mercedes = {
    color: "black",
    wheels: 4,
    start() {
      "go..";
    },
    door: 5,
    stop() {
      console.log("stop");
    },
  };
  console.log(mySecondCar);

  interface Toy {
    name: string;
  }

  interface ToyCar extends Toy, Car {
    price: number;
  }

  const kidToyCar: ToyCar = {
    price: 500,
    name: "Toy Bmw",
    color: "green",
    wheels: 4,
    start() {
      console.log("go..");
    },
  };
  console.log(kidToyCar);
};

export default InterfaceTypescript;
