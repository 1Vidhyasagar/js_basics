Day 5: Scope, Hoisting, and Modern JavaScript (ES6+)
🧠 1. Scope – "Area of Influence"
Let’s go Tollywood style 💥

Story:

Imagine Power Star Pawan Kalyan acting in a movie. If he’s in Hyderabad (function), fans in Hyderabad can see him (access). But fans in Chennai (another function) cannot.

In JS terms:


function myMovieTheater() {
  let hero = "Pawan Kalyan";
  console.log(hero); // ✅ Allowed
}

console.log(hero); // ❌ Error: hero is not defined
➡️ Variables live only in the area (scope) they are created in.

🔍 Types of Scope:
Type	Meaning
Global Scope	Outside any function – everyone can see
Function Scope	Inside a function – only visible inside
Block Scope	Inside {} like if, loop – local access

🔀 2. Hoisting – "Magic Trick of JavaScript"
JS reads the script like a strict grandma 📜

It moves all variable declarations to the top!

But it doesn’t move values.

 
console.log(x); // ❓ What happens?
var x = 10;
Output: undefined!
JS does this in background:

 
var x;         // hoisted
console.log(x); // undefined
x = 10;
But with let and const, you cannot use before declaring. Grandma scolds you 😤

 
console.log(y); // ❌ Error
let y = 5;
🪄 3. ES6 Features – “Modern Magic of JavaScript”
✅ let and const
 
let score = 100;
const maxScore = 200;
Use let when value can change, const when fixed.

✅ Arrow Functions – "Shortcut to Writing Functions"
Normal way:

 
function greet(name) {
  return "Hi " + name;
}
Arrow way:

 
const greet = (name) => "Hi " + name;
✅ No need for function, return, or {} if single line.

✅ Template Literals – "No more boring + signs!"
 
let name = "Sagar";
let age = 29;

console.log(`I am ${name} and I am ${age} years old.`);
✅ Destructuring – "Shortcut to unpack Dabbas"
 
const person = {
  name: "Sagar",
  age: 29,
  city: "Bangalore"
};

const { name, age } = person;
console.log(name, age);
✅ Spread Operator – "Copying like Xerox 📄"
 
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];

console.log(arr2); // [1, 2, 3, 4, 5]
