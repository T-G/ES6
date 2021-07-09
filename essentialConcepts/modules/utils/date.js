// function getDate(){
//     const date = new Date();
//     return date;
// }

// const year = new Date().getFullYear()

// // export { getDate, year};

/*
default exports, if you have one thing in the file
*/ 
export default function getDate(){
        const year = new Date().getFullYear()
        const date = `${new Date()}, Year: ${year}`;
        return date;
    }
    