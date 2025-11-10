interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher1: Teacher = {
  firstName: "John",
  lastName: "Snow",
  fullTimeEmployee: false,
  location: "Brussels",
};

const teacher2: Teacher = {
  firstName: "Maurice",
  lastName: "H",
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: "Nairobi",
};

interface Director extends Teacher {
  numberOfReports: number;
}

/** modifiable props */

class NewTeacher {
  readonly _firstName: string;
  readonly _lastName: string;
  _fullTimeEmployee: boolean;
  _yearsOfExperience?: number;
  _location: string;

  constructor(
    _firstName: string,
    _lastName: string,
    _fullTimeEmployee: boolean,
    _location: string,
    _yearsOfExperience?: number
  ) {
    this._firstName = _firstName;
    this._lastName = _lastName;
    this._fullTimeEmployee = _fullTimeEmployee;
    this._yearsOfExperience = _yearsOfExperience;
    this._location = _location;
  }
}

const teacher3 = new NewTeacher("Jasmine", "Jenner", true, "Albuquerque", 10);

console.log(teacher3);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function printTeacher(
  firstName,
  lastName
): string {
  firstName = firstName.charAt(0);

  return `${firstName}. ${lastName}`;
};

console.log(printTeacher("Helmut", "Maurice"));

interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return "Currently Working";
  }

  displayName() {
    return this.firstName;
  }

  s = new StudentClass("Pearson", "Specter");
}
