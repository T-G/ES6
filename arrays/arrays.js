const temperatures = [
    {degrees: 69, isRecordTemp: false },
    {degrees: 82, isRecordTemp: true },
    {degrees: 73, isRecordTemp: false },
    {degrees: 64, isRecordTemp: false },
];

/*
Map will iterate every single element in the array that is supplied to.
in order for the map to do what it is supposed to do, we need to return 
the element that is iterated over.

The return element is a brand new array, it is not going to mutate the old one

The other alternative to loop through an array is forEach loop, the foreach doesn't 
create a new array
*/ 

// const newTemps = temperatures.map(temperature => {
//     temperature.isHigh = (temperature.degrees > 70) ? true : false;

//     return temperature;
// });

// using spread operator
// const newTemps = temperatures.map(temperature => temperature.degrees > 70 ? { ...temperature, isHigh : true } : temperature);

// newTemps.forEach(temperature => {
//     if (temperature.isHigh) {
//         alert(`${temperature.degrees} was a record high last week!`);
//     }
// });


// Chaining functions
temperatures.map(temperature => 
    temperature.degrees > 70 ? { ...temperature, isHigh : true } : temperature)
    .forEach(temperature => {
    if (temperature.isHigh) {
        alert(`${temperature.degrees} was a record high last week!`);
    }
});