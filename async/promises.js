// pending
// fulfilled -> promise
// rejected

// promises fixes the inversion of control that is achieved through callback function (callback hell)

/*
Whenever a promise is created, it has a value of 'pending' and
then we wait for it to resolve.

Here `resolve` and `reject` itself are functions

'resolve' allows us to change the status of the promise from 'pending' to 'fulfilled' 
'reject' allows us to change the status of the promise from 'pending' to 'rejected' 
*/ 

// const promise = new Promise((resolve, reject) => {
//     // setTimeout(() => resolve('done'), 1000);
//     setTimeout(() => reject(Error('Promise failed.')), 1000)
// });

/*
A promise can only invoke two methods then() and catch()  both of which accepts
a function themselves.

It is important to note is that for every promise, only one function can be executed 
either resolve() or reject() 
*/
// promise
//     .then( (data) => console.log(data))
//     .catch( (error) => console.error(error))
//     .finally( () => console.log('done'))

// const promise = new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition( position => {
//         resolve(position);
//     }, error => {
//         reject(error);
//     });
// })

// Shorter method
const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition( resolve, reject);
})

promise
    .then( (position) => console.log(position))
    .catch( (error) => console.error(error))
    .finally( () => console.log('Operation completed.'))