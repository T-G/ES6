// Easier working with this keywords in objects / classes
// 1. Arrow functions = function expressions
// 2. All arrow functions are anonymous

const user = {
    name: 'john',
    joined: 'May 12th, 2013'
}

const capitalizeName = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`;

function greetUser(name, callback){
    return callback(capitalizeName(name));
}

const result = greetUser(user.name, name => `Hi ${name}! How are you doing`);
console.log(result);
// console.log(capitalizeName('mark'));