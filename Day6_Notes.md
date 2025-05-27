📅 Day 6: JavaScript Boost – Functions, Arrow Functions, Objects, Destructuring, Spread

---

🧠 CONCEPTS LEARNED:

1. ✅ Function Declaration:
   - Syntax:
     function greet() {
       console.log("Hello!");
     }

2. ✅ Function Expression:
   - Assigned to a variable:
     const greet = function() {
       console.log("Hi!");
     }

3. ✅ Arrow Function:
   - Shorter syntax for writing functions:
     const greet = () => {
       console.log("Namaste!");
     }

4. ✅ Template Literals:
   - Dynamic strings using backticks:
     const name = "Vidhya";
     console.log(`Hello ${name} ji!`);

5. ✅ Objects:
   - Key-value pairs:
     const user = {
       name: "Vidhya",
       age: 29,
       role: "Full Stack AI Dev"
     }

6. ✅ Object Destructuring:
   - Extract properties:
     const { name, age } = user;

7. ✅ Spread Operator:
   - Copy and merge arrays/objects:
     const a = [1,2];
     const b = [...a, 3, 4]; // [1,2,3,4]

---

📋 INTERVIEW Q&A:

1. ❓ What’s the difference between function declaration and expression?
   ✅ Declaration is hoisted, expression is not.

2. ❓ Why use arrow functions?
   ✅ Shorter syntax, no own ‘this’, cleaner code.

3. ❓ What’s a template literal?
   ✅ It’s a string wrapped in backticks allowing variable interpolation.

4. ❓ What’s the use of destructuring?
   ✅ To extract object values easily without repeating `obj.key`.

5. ❓ What does spread operator (...) do?
   ✅ Copies or merges arrays/objects without mutation.

6. ❓ Can you give a real-world use of spread?
   ✅ Add more fruits to an existing fruit list:
       const fruits = ["apple", "banana"];
       const newFruits = [...fruits, "mango", "kiwi"];

---

🧪 CODE SNIPPETS:

// Greeting using arrow function
const greeting = (name)=> `Hello ${name} ji !!!`;
console.log(greeting("Vidhyasagar"));

// Object destructuring
const user = { name: "Vidhyasagar", age: 29, role: "Full stack AI developer" };
const { name, age } = user;
console.log(name, age);

// Spread operator
const fruits = ["apple", "banana", "mango"];
const newFruits = [...fruits, "orange", "grapes"];
console.log(newFruits);

---

📦 COMMIT MESSAGE FOR GITHUB:
"Day 6: Functions, Arrow Functions, Destructuring, Spread, Template Literals + Interview Q&A"

