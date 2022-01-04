const SomeTypes = () => {
  //Literal Types
  const userName1 = "Bob"; // userName1's type is "Bob"
  let userName2 = "Tom"; // userName2's type is string
  let userName3: string | number; // userName3's type is string or number
  //
  //
  type Job = "police" | "developer" | "teacher"; // kind of union type

  interface User {
    name: string;
    job: Job;
  }

  const user: User = {
    name: "Bob",
    job: "developer",
  };

  interface HighSchoolStudent {
    name: string;
    grade: 1 | 2 | 3; // kind of union type
  }

  const student1: HighSchoolStudent = {
    name: "jin",
    grade: 3,
  };
  //
  //
  //Union Types

  interface Car {
    name: "car";
    color: string;
    start(): void;
  }

  interface Mobile {
    name: "mobile";
    color: string;
    call(): void;
  }

  function fetGift(gift: Car | Mobile) {
    console.log(gift.color);
    if (gift.name === "car") {
      gift.start();
    } else {
      gift.call();
    }
  }
  //
  //
  //Intersection type
  interface Ca {
    name: string;
    start(): void;
  }
  interface Toy {
    name: string;
    color: string;
    price: number;
  }

  const ToyCar: Toy & Ca = {
    name: "Mercedes",
    color: "Red",
    price: 5000,
    start() {},
  };
};

export default SomeTypes;
