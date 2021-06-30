"use strict";
/*
Global variable lives as long as the window's are open and gets destroyed when the windows are closed.
They run for the life of the program.

However Local variable have short lives, they are created when a function is called and deleted when the 
function is completed/finishes
*/ 


/*
Closure

The two criteria of being a Closure
1. Closures are property of javascript functions
    (only functions have closures, no other data type does within the language)
2. Execute function in a different scope than originally defined

Why do we care about closures as javascript developers? 
Closures allows us to remember values.
*/

function handleLikePost(step) {
    let likeCount = 0;
    return function (){
        likeCount += step;
        return likeCount;
    }
}
const like = handleLikePost(1);
const doubleLike = handleLikePost(2);


console.log(like());
console.log(like());
console.log(doubleLike());
console.log(doubleLike());

