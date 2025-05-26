🍩 1. Loops – The Repeater Guy
Imagine:
You want to eat 5 donuts, one by one. Will you write console.log("🍩 Donut") five times?

No! You’ll hire a for loop – your assistant:


for (let i = 1; i <= 5; i++) {
  console.log("🍩 Donut #" + i);
}
i = 1 → start from 1

i <= 5 → stop at 5

i++ → increase by 1 every time

🌀 Types of Loops:
Type	Use Case
for	Fixed number of repetitions
while	Repeat until something is false
for...of	Go through items in an array

🍕 2. Functions – Pizza Makers
A function is like a pizza shop. You give ingredients (inputs), it returns pizza (output).

Example 1: Simple Function

function sayHi() {
  console.log("👋 Hello there!");
}
sayHi(); // Calls the function
Example 2: With Ingredients (Parameters)

function makePizza(flavor) {
  console.log("🍕 Making a " + flavor + " pizza");
}
makePizza("cheese");
makePizza("paneer");
flavor is like input to the pizza shop

makePizza("cheese") = You’re ordering cheese pizza

Example 3: Function with Return Value

function add(a, b) {
  return a + b;
}
let result = add(5, 10); // 15
console.log("Sum is: " + result);
📦 3. Arrays – Dabbas of Items
An array is like a dabba (box) with many items inside.


let fruits = ["🍌", "🍎", "🍇"];
console.log(fruits[0]); // 🍌
fruits[0] → First item

fruits.length → Total items

Looping through array:


for (let fruit of fruits) {
  console.log("I have: " + fruit);
}