/*
REST: Representational State Transfer
API: A mean for software to communicate with other software
*/ 

/*
C - create (POST) - require data to created a resource
R - read (GET) - dosen't require data
U - update (PUT / PATCH) - - require data to update a resource
D - delete (DELETE) - dosen't require data
*/ 

/*
ROUTES - ENDPOINTS
GET /posts
GET /posts/1
POST /posts
PUT /posts/1
PATCH /posts/1
DELETE /posts/1
*/ 

const url = 'https://jsonplaceholder.typicode.com';

// fetch(apiEndPoint)
// GET request
fetch(`${url}/posts/1`)
    .then( response => response.json())
    .then(data => console.log("Output from GET request:",data));


/*
CREATE  BLOG POST 
*/

const blogPost = {
    title: "Cool Post on Google",
    body: "lorem Ipsum Hipster",
    userId: 1
}


fetch(`${url}/posts`, {
    method: 'POST',
    body: JSON.stringify(blogPost),
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then( response => response.json())
    .then(data => console.log("Output from POST request:",data));

/*
UPDATE BLOG POST
*/ 
const updateBlogPost = {
    id: 1,
    title: "Sour Post on Google",
    body: "lorem2 Ipsum2 Hipster2",
    userId: 1
}

fetch(`${url}/posts/1`, {
    method: 'PUT',
    body: JSON.stringify(updateBlogPost),
    headers: {
        'Content-Type' : 'application/json; charset=UTF-8'
    }
})
.then( response => response.json())
.then(data => console.log("Output from PUT request:",data));

/*
PATCH request
*/ 
fetch(`${url}/posts/1`, {
    method: 'PATCH',
    body: JSON.stringify({
        'title': 'foorum'
    }),
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    }
})
.then(response => response.json())
.then(data => console.log("Output from PATCH request:",data))

/*
Preforming a DELETE request
*/ 
fetch(`${url}/posts/1`, {
    method: 'DELETE',
});
