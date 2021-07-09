// this - reference to an object

// What is 'this' equal to ?! Is the function called...
// 1) in the global context
// 2) as a method on an object
// 3) as a constructor function or class constructor
// 4) as a DOM event handler

// 1) in the global context
console.log(this); // Window

function whatIsThis(){
    'use strict'
    console.log(this); // undefined
}

whatIsThis();

// 2) as a method on an object
const user = {
    first: "Theo",
    last: "Gomes",
    greetUser() {
        console.log(`Hi ${ this.first } ${ this.last }`);
    }
}

const userInfo = {
    job: "Programmer",
    user: {
        first: "Theo",
        last: "Gomes",
        greetUser() {
            console.log(`Hi ${ this.first } ${ this.last } ${ this.job }`); // the last property value is undefined
        }
    }

}

userInfo.user.greetUser();

// 3) as a constructor function or class constructor
// class User {
//     constructor(first, age){
//         this.first = first;
//         this.age = age;
//     }

//     getAge() {
//         console.log(`${ this.first } age is ${ this.age }`);
//     }
// }

// const bob = new User("Theo", 29);
// bob.getAge();

// Constructor function
function User(first, age) {
    this.first = first;
    this.age = age;
}

User.prototype.getAge = function(){
    console.log(`${ this.first } age is ${ this.age }`);
}
const theo = new User('Theo', 54);
theo.getAge();

// 4) as a DOM event handler
const button = document.createElement('button');
button.textContent = 'Click';
document.body.appendChild(button);
button.addEventListener('click', function(){
    console.log(this);
});
