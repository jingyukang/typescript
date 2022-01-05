export function UtilityType() {
  interface User {
    id: number;
    name: string;
    age: number;
    gender: "m" | "f";
  }

  type UserKey = keyof User; // same as 'id' | 'name' | 'age' | 'gender'

  const uk: UserKey = "age";
  //
  //
  // Partial<T>
  interface User1 {
    id: number;
    name: string;
    age: number;
    gender: "m" | "f";
  }

  let admin: Partial<User1> = {
    id: 1,
    name: "Bob",
  };
  // the 'User1' interface Changed as
  //interface User1 {
  //   id?: number;
  //   name?: string;
  //   age?: number;
  //   gender?: "m" | "f";
  // }

  //
  //
  //Required<T>
  interface User2 {
    id: number;
    name: string;
    age?: number;
  }

  let jinAdmin: Required<User2> = {
    id: 1,
    name: "Jin",
    age: 25, // this key is chaged as 'required'
  };
  //
  //
  // Readonly<T>
  interface User3 {
    id: number;
    name: string;
    age?: number;
  }

  let kangAdmin: Readonly<User3> = {
    id: 1,
    name: "kang",
  };

  // kangAdmin.id = 4; //It cannot be changed because of 'Readonly'
  //
  //
  // Record<K,T>  K= key & T= Type
  interface Score {
    "1": "A" | "B" | "C" | "D";
    "2": "A" | "B" | "C" | "D";
    "3": "A" | "B" | "C" | "D";
    "4": "A" | "B" | "C" | "D";
  }

  const score: Score = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
  };
  //
  const score1: Record<"1" | "2" | "3" | "4", "A" | "B" | "C" | "D"> = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
  };
  //
  type Grade = "1" | "2" | "3" | "4";
  type ScoreAl = "A" | "B" | "C" | "D";
  const score2: Record<Grade, ScoreAl> = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
  };
  //
  //
  interface UserInterface {
    id: number;
    name: string;
    age: number;
  }

  function isValied(user: UserInterface) {
    const result: Record<keyof UserInterface, boolean> = {
      id: user.id > 0,
      name: user.name !== "",
      age: user.age > 0,
    };
    return result;
  }
  //
  //
  //Pick<T,K> => pick the keys(properties)
  interface User4 {
    id: number;
    name: string;
    age: number;
    gender: "m" | "f";
  }
  const adminPick: Pick<User4, "id" | "name"> = {
    id: 0,
    name: "jin",
  };
  //Omit<T,K> => remove the keys(properties)
  const adminOmit: Omit<User4, "age" | "gender"> = {
    id: 1,
    name: "jin",
  };
  //
  //
  //Exclude<T1,T2> copy the type 'T1' and create new type exclude the types in 'T2'
  type T1 = string | number | boolean;
  type T2 = Exclude<T1, number | string>;
  //
  //
  // NonNullable<Type> copy the type 'Type' and create new type except 'null' and 'undefined'
  type T3 = string | null | undefined | void;
  type T4 = NonNullable<T3>;
}

// export default UtilityType;
