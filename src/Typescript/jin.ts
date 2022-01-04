import "./App.css";

function JIN() {
  let jin: (string | number)[];
  jin = ["a", "s", 1, 2, "d", 4, "f", "z", "x"];
  // console.log(jin[6]);

  enum Month {
    Jan = 1,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec,
  }

  function isItSummer(month: Month) {
    let isSummer: boolean;

    switch (month) {
      case Month.Jun:
      case Month.Jul:
      case Month.Aug:
        isSummer = true;
        break;
      default:
        isSummer = false;
        break;
    }
    return isSummer;
  }
  // console.log(isItSummer(Month.Jun));
  // console.log(isItSummer(6));
  // console.log(isItSummer(Month.Sep));
  // console.log(isItSummer(9));

  enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected,
  }

  const request = {
    id: 1,
    status: ApprovalStatus.approved,
    description: "Please approve this request",
  };

  if (request.status === ApprovalStatus.approved) {
    // send an email
    // console.log("Send email to the Applicant...");
  }

  const json = `{"latitude":10.11,"longitude":12.12}`;

  const currentLocation = JSON.parse(json);
  // console.log(currentLocation);

  let result: any;
  result = 10.123;
  console.log(result.toFixed());
  // result.willExist();

  // let resulth: object;
  // resulth = 10.123;
  // resulth.toFixed();
  // resulth.willExist();

  let useless: void = undefined;
  console.log(useless);

  function fn(a: string | number): boolean {
    if (typeof a === "string") {
      return true;
    } else if (typeof a === "number") {
      return false;
    }
    // make the function valid
    return neverOccur();
  }

  let neverOccur = () => {
    throw new Error("Never!");
  };

  // let add = function (x: number, y: number): number {
  //   return x + y;
  // };
  // let add: (a: number, b: number) => number = function (x: number, y: number) {
  //   return x + y;
  // };
  const add = function (x: string, y: string): number {
    return x.concat(y).length;
  };
  let resulting = add("aasdf", "asdfadsafasd");
  console.log(resulting);
}

export default JIN;
