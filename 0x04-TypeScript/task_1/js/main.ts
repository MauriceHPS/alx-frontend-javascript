interface Teacher {
  firstName: string;
  lastName: string;
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

// interface extendedTeacher extends Teacher {
//   contract: boolean;
// }

/** modifiable props */

class NewTeacher {
  readonly _firstName: string;
  private _lastName: string;
  readonly _fullTimeEmployee: boolean;
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
