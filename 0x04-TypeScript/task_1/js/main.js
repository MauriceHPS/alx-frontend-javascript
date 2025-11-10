var teacher1 = {
    firstName: "John",
    lastName: "Snow",
    fullTimeEmployee: false,
    location: "Brussels",
};
var teacher2 = {
    firstName: "Maurice",
    lastName: "H",
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: "Nairobi",
};
/** modifiable props */
var NewTeacher = /** @class */ (function () {
    function NewTeacher(_firstName, _lastName, _fullTimeEmployee, _location, _yearsOfExperience) {
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._fullTimeEmployee = _fullTimeEmployee;
        this._yearsOfExperience = _yearsOfExperience;
        this._location = _location;
    }
    return NewTeacher;
}());
var teacher3 = new NewTeacher("Jasmine", "Jenner", true, "Albuquerque", 10);
console.log(teacher3);
function printTeacher(firstLetter, lastName) {
    this.firstLetter = firstLetter.charAt(0);
    this.lastName = lastName;
    return "".concat(this.firstLetter, " ").concat(this.lastName);
}
printTeacher("Helmut", "Maurice");
