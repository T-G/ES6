//  Write declarative, not imperative code

// Imperative Code: when you write code that are more suitable to computer
    // e.g: tell javascript what to do and how to do it

// Declarative Code: is actually what a person would like to read

const people = ['Dough', 'Fred', 'Jane'];
//const invitations = [];

// IMPERATIVE CODE - for machine
// for (let index = 0; index < people.length; index++) {
//     invitation[index] = `Hi ${people[index]}, come to party!`
// }
// console.log(invitations);

// DECLARATIVE CODE - for Human
const invitations = people.map(person => `Hi ${person}, come to party!`);
console.log(invitations);

//  Code is written for human beings, not for computers.