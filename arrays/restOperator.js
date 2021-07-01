const finalMenuItems = [
    "American Cheeseburger",
    "Southern Fried Chicken",
    "Glazed Salmon"
];


// REST operator
// ...loosers here is the rest operator (is similar to SPREAD operator)
const [winner, ...loosers] = finalMenuItems;
console.log({winner}, {loosers});

// Array destructuring which is similar to object destructuring
// it is not mutating the finalMenuItems array
// const [first, second, third] = finalMenuItems;

// console.log(`Display as normal string: ${first}, ${second}, ${third}`);

// // we can make it as key value pair using object literals
// console.log("Display as objects:", {first}, {second});

// let [first, second] = finalMenuItems;
// console.log("Before swap:", {first}, {second});

// [second, first] = [first, second];
// console.log("After swap:", {first}, {second});
