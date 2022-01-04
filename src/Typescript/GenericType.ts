import { stringify } from "querystring";

const GenericType = () => {
  // Generic Type
  // function getSize(arr: Array<string>): string;
  // function getSize(arr: Array<number> | Array<string>): number {
  // function getSize(arr: Array<number> | Array<string>| Array<boolean>|Array<object>): number {
  function getSize<T>(arr: Array<T>): number {
    return arr.length;
  }
  const arr1 = [1, 2, 3];
  getSize<number>(arr1);
  // But the Typescript already know the type, so don't have to define the type

  const arr2 = ["a", "b", "c", 1, 2, 3];
  getSize<number | string>(arr2);

  const arr3 = [false, true, true];
  getSize(arr3);

  const arr4 = [{}, {}, { name: "Tim" }];
  getSize(arr4);
  //
  //
  // Generic in interface
  interface Mobile<T> {
    name: string;
    price: number;
    option: T;
  }

  // const m1: Mobile<object> = {
  // if the object has specific form
  const m1: Mobile<{ color: string; coupon: boolean }> = {
    name: "s21",
    price: 1000,
    option: {
      color: "red",
      coupon: false,
    },
  };

  const m2: Mobile<string> = {
    name: "s20",
    price: 900,
    option: "good",
  };
  //
  //
  //
  interface User {
    name: string;
    age: number;
  }

  interface Car {
    name: string;
    color: string;
  }

  interface Book {
    price: number;
  }

  const user: User = {
    name: "a",
    age: 10,
  };
  const car: Car = {
    name: "bmw",
    color: "red",
  };
  const book: Book = {
    price: 3000,
  };

  function showName<T extends { name: string }>(data: T): string {
    return data.name;
  }

  showName(user);
  showName(car);
  // showName(book);
};

export default GenericType;
