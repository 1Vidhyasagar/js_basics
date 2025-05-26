// Scope Example
function kitchen() {
  let masala = "Garam Masala";
  console.log("Inside Kitchen:", masala);
}
kitchen();
// console.log(masala); // ❌ Error

// Hoisting Example
console.log(pet); // undefined
var pet = "Dog";

// Arrow Function
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Vidhyasagar"));

// Destructuring
const user = { name: "Raju", age: 30, role: "Hero" };
const { name, role } = user;
console.log(name, role);

// Spread Operator
const base = [1, 2];
const extended = [...base, 3, 4];
console.log(extended);
