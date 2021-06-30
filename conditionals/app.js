// const age = prompt("What is your age?")
// const canVote = (age >= 18) ? "You can vote." : "Sorry, you can't vote at this time"
// alert(canVote)

/*
short circuit with || operator
*/ 
// const response = prompt("What is your name?")
// const username = response || 'guest'

// alert(username)


/*
short circuit using && and || operator
*/ 
const response = prompt("What is your name?")
const isEmailVerified = true

const username = (isEmailVerified && response) || 'guest'

alert(username)



