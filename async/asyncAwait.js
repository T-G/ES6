/*
Async always returns a promise
*/

const url = 'https://jsonplaceholder.typicode.com';

async function getBlogPost() {
    // pause the function for an await promise to resolve
    // the code runs in an exact order that we wrote it
    const response = await fetch(`${url}/posts/2`) 
    const data = await response.json()
    console.log(data);
}

getBlogPost()