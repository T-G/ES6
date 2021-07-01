// We use async method/function without realizing
// For example to get the current position of the user
// setTimeout(), addEventListener() are also async function
// Async functions are non-blocking, and that is necessary for any modern app
navigator.geolocation.getCurrentPosition(position => {
    console.log(position);
});

console.log('done');