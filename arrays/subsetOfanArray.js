const restaurants = [
    {name: "Cap Shop Diner", milesAway: 2.2 },
    {name: "Chop Shop" , milesAway: 4.1 },
    {name: "Northstar Cafe", milesAway: 0.9 },
    {name: "City Tavern", milesAway: 0.5 },
    {name: "Poundland", milesAway: 2.8 },
];

// get slice of an array or subset of an array or more than one record
// Filter function returns a new array, dosen't mutate the original array

// const searchResult = restaurants.filter((restaurant) => {
//     return restaurant.name.startsWith('C');
// });

// console.log(searchResult); 

// Advanced filtering
// const results = restaurants.filter((restaurant) => {
//     return restaurant.name.startsWith('C') && restaurant.milesAway < 3;
// });

// console.log(results);

// to get a single element in an array 
// use Find method
// if there is multiple matches, find() will only take the first one it finds
// if the find() doesn't find the search, it will return as undefined or null as the result
// includes() is case senditive, so make sure you lowercase the search word first
const result = restaurants.find((restaurant) => {
    return restaurant.name.toLowerCase().includes('north') && restaurant.milesAway < 2;
});

console.log(result);
