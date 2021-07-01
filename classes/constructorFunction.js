// // Using Object literals
// // Problem with this approach is you need to create the whole set of the code
// in order to create another Student
// const student = {
//     id: 1,
//     name: "Oscar",
//     subjects: [],
//     addSubject(subject) {
//         this.subjects = [...this.subjects, subject];
//     }
// };

// student.addSubject("Jim");
// console.log(student.subjects);

// // Constructor Function
// Problem: with this approach you need to use new keyword when creating a Student
function Student(id, name, subjects = []) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;
}

// add addSubject() method to Student constructor function
Student.prototype.addSubject = function(subject) {
    this.subjects = [...this.subjects, subject];
}

// prototypical inheritance
const s1 = new Student(1, "Oscar");
s1.addSubject("Maths");
console.log(typeof(Student), s1.name, s1.subjects);  // function