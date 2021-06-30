const user = {
    name: "Theo",
    username: "theo",
    email: "theo@gmail.com",
    details: {
        title : "Programmer"
    }
};

// object destructuring allows us to pull whatever properties
// that we want out of object and conveniently make them variables

// const { username, email } = user;


// const displayUser = (user) => {
//     console.log(`Username: ${username}, Email: ${email}`);
// }

// displayUser();

// const { name, details: { title } } = user;

const displayUserBio = ({name, details: {title} }) => {

    console.log(`Name: ${name}, Title: ${title}`);

}
    
displayUserBio(user)