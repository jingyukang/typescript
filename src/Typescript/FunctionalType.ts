const FunctionalType = () => {
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }
  function addOne(num1: number, num2: number): void {
    console.log(num1 + num2);
  }
  //
  //
  function isAdult(age: number): boolean {
    return age > 19;
  }
  //
  //
  function hello(name?: string) {
    return `Hello, ${name || "world"}`;
  }
  // functions "hello" and "hello2" are same
  function hello2(name = "world") {
    return `Hello, ${name}`;
  }
  const result = hello();
  const result1 = hello("sam");
  // const result2 = hello(123);
  //
  //
  function hello3(name: string, age?: number): string {
    if (age !== undefined) {
      return `Hello, ${name}. You are ${age}.`;
    } else {
      return `Hello, ${name}`;
    }
  }
  const result2 = hello3("sam");
  const result3 = hello3("sam", 25);
  // const result4 = hello3(25, "sam");  parameters order
  //
  //

  const adding = (...nums: Array<number>): number => {
    return nums.reduce((preValue, curValue) => preValue + curValue, 0);
  };

  adding(1, 2, 3); //6
  //
  //
  interface User {
    name: string;
  }

  const Sam: User = { name: "Sam" };

  function showName(this: User, age: number, gender: "m" | "f") {
    console.log(this.name, age, gender);
  }
  const a = showName.bind(Sam);
  a(25, "m");
  //
  //
  interface UserSet {
    name: string;
    age: number;
  }
  function join(name: string, age: number): UserSet;
  function join(name: string, age: string): string;
  function join(name: string, age: number | string): UserSet | string {
    if (typeof age === "number") {
      return {
        name,
        age,
      };
    } else {
      return "please enter the age in integer";
    }
  }

  const sam: UserSet = join("Sam", 25);
  const jane: string = join("jane", "25");
};

export default FunctionalType;
