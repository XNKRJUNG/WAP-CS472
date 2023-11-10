function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];
}

Student.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
}

Student.prototype.inputNewgrade = function (newGrade) {
    this.grades.push(newGrade);
}

Student.prototype.computeAverage = function () {
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    const avg = sum / this.grades.length;
    return avg;
}

const std1 = new Student("Cyrus", "Shrestha");
std1.inputNewgrade(92);
std1.inputNewgrade(95);
std1.inputNewgrade(90);
std1.inputNewgrade(89);
std1.inputNewgrade(78);
console.log(`Average Grade of ${std1.getFullName()}: `, std1.computeAverage());

const std2 = new Student("Tanusha", "Shrestha");