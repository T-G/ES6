/*
Five primitive types of JS are
1) undefined
2) null
3) boolean
4) Number
5) String
6) symbol --new feature added to the language for advance application
*/ 
/*
Primitives are passed by value
e.g const num = 42 and const num2 = 42 
num === num1 will result in a truthy value
*/ 

/*
Object are reference type
object values are immutable
objects can contain any primitive values
obj === anotherObj will result in false
*/ 
const obj = {} ; // creates an object
const anotherObj = obj; // creates another object

anotherObj.a = 1;

console.log("Another obj: ", anotherObj);
console.log("Obj: ", obj);
