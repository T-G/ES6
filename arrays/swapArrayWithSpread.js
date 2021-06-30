const breakfastMenuIdeas = ["Buckwheat Pancakes"];
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];

// const allMenuIdeas = ["Harvest Salad", "Southern Fried Chicken"];

/* To add breakfastMenuIdeas in the begining of allMenuIdeas */
//allMenuIdeas.pop(breakfastMenuIdeas)

/* To add breakfastMenuIdeas at the end of allMenuIdeas */
//allMenuIdeas.push(breakfastMenuIdeas)

/* the problem with .pop and .push is that they mutate the original array, and you
shouldn't mutate an array*/

/* more intuitive way to add items in an array is by using the SPREAD operator 
we need to put the array items in a new array like:

const otherMenuIdeas = [...allMenuIdeas]

it will create a shallow clone of allMenuIdeas array

const otherMenuIdeas = [...breakfastMenuIdeas, ...allMenuIdeas];

*/

const allMenuIdeas = [
    ...breakfastMenuIdeas, 
    "Harvest Salad", 
    "Southern Fried Chicken", 
    ...dinnerMenuIdeas
];

console.log(`Allmenu Ideas: ${allMenuIdeas}`);

/* you cannot update an array using the spread operator,
To update an array item we can use slice() array method
slice() operates based on indexed of an array (startIndex, endingIndex)
findIndex() method can find the elements positional index integer and returns it
example below:
*/ 

// find the index position of "Harvest Salad" and replace it with "Garden Salad"
const saladIndex = allMenuIdeas.findIndex( idea => idea === "Harvest Salad");

const finalMenuIdeasAfterPerformingUpdate = [
    ...allMenuIdeas.slice(0, saladIndex),
    "Garden Salad",
    ...allMenuIdeas.slice(saladIndex + 1)
];

console.log(finalMenuIdeasAfterPerformingUpdate);

/*
DELETING an array item
*/
const meatLoafIndex = allMenuIdeas.findIndex( idea => idea === "Meatloaf");

const finalMenuIdeasAfterPerformingDelete = [
    ...allMenuIdeas.slice(0, meatLoafIndex),
    ...allMenuIdeas.slice(meatLoafIndex + 1)
];

console.log(finalMenuIdeasAfterPerformingDelete);



