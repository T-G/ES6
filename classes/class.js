/*
Classes - cleaner way to work with constructor functions and the prototype
Classes and Constructor Function really arn't different, 
they both uses protypical inheritance under the hood
*/ 

// function Student() {}
// console.log(typeof(class Student {})) // function
class Student {
    constructor(id, name, subjects = []){
        this. id = id;
        this.name = name;
        this.subjects = subjects;
    }

    getStudentName() {
        return this.name;
    }

    // calling function from a function
    printStudentName() {
        return `Student: ${this.getStudentName()}`;
    }

    addSubject(subject) {
        return this.subjects = [...this.subjects, subject];
    }
}

s1 = new Student(1, "Dew")
s1.addSubject("Drawing");
document.getElementById("demo").innerHTML = s1.printStudentName();
console.log(s1.printStudentName());
