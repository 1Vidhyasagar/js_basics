// Create a function that returns a funny greeting using arrow function and template literal.
const greeting = (name)=> `Hello ${name} ji !!!`;
console.log(greeting("Vidhyasagar")); 

// Destructure a person object and show name + age.
const user ={name:"Vidhyasagar", age:29, role:"Full stack AI developer"}
const {name, age}= user;
console.log(name,age)

// Use spread operator to merge two arrays like:
const fruits=["apple","banana","mango"]
const newFruits = [...fruits, "orange", "grapes"]
console.log(newFruits)