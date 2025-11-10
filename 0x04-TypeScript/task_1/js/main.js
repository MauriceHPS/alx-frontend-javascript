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
function printTeacher(firstName, lastName) {
    this.firstName = firstName.charAt(0);
    this.lastName = lastName;
    var firstLetter = this.firstName;
    return "".concat(firstLetter, ". ").concat(lastName);
}
console.log(printTeacher("Helmut", "Maurice"));
