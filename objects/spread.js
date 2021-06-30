// Blank User object
const user = {
    name: "",
    username: "",
    phoneNumber: "",
    email: "",
    password: ""
};

const newUser = {
    username: "TheoGomes",
    email: "theo@gmail.com",
    password: "password"
}

// Merge two object with Object.assign() method
/*
Note: always create an empty object and assign the values of the merged objects
otherwise the values will be mutated.
*/
// console.log(Object.assign({}, user, newUser, { verified: false })); 
// console.log(user);

// without spread operator
// const createdUser = { user, newUser, verified: false };
// console.log(createdUser);

// using object spread operator
// it merges the object properties one after the another
// and it dous so in an immutable way
const createdUser = { ...user, ...newUser, verified: false };
console.log(createdUser);
