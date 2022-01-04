function basicType() {
  let car: string = "bmw";
  let isAdult: boolean = true;
  let a: number[] = [1, 2, 3];
  let a2: Array<number> = [1, 2, 3];

  let week1: string[] = ["nom", "tue", "wed"];
  let week2: Array<string> = ["nom", "tue", "wed"];

  //tuple
  let b: [string, number];
  b = ["z", 1];
  // b = [1, "z"]; impossible
  b[0].toLocaleLowerCase();
  // b[1].toLocaleLowerCase(); impossible

  //enum
  enum Os {
    Windows = 3,
    Ios = 10,
    Android,
  }
  // in javascript
  //  var OS;
  //  (cunction(Os){
  //     Os[Os["Windows"] = 3] = "Windows";
  //     Os[Os["Ios"] = 10] = "Ios";
  //     Os[Os["Android"] = 11] = "Android";
  //  })(Os || (Os={}));

  enum Os1 {
    Windows = "win",
    Ios = "ios",
    Android = "and",
  }

  let myOs: Os1;

  myOs = Os1.Windows;

  //null, undefined

  let c: null = null;
  let d: undefined = undefined;
}
export default basicType;
