# Day 4: Objects, DOM, Events

---

## 🧱 JavaScript Objects – Real World Dabbas

### 🤔 What’s an Object?

An object is like a dabba (box) with named compartments.

```js
let student = {
  name: "Vidhyasagar",
  age: 29,
  isEnrolled: true
};
🎮 How to Access or Change Data
js
Copy
Edit
console.log(student.name);      // Vidhyasagar
console.log(student["age"]);    // 29

student.city = "Bangalore";     // Add
student.age = 30;               // Update
🌐 DOM – Document Object Model
DOM = JavaScript's way of seeing and changing the webpage.

Example:

HTML:

html
Copy
Edit
<h1 id="title">Welcome!</h1>
JavaScript:

js
Copy
Edit
let titleTag = document.getElementById("title");
titleTag.innerText = "Hi, Vidhyasagar!";
✅ innerText changes the content on screen.

🖱️ Events – Reacting to User Actions
Example:

HTML:

html
Copy
Edit
<button id="myBtn">Click Me</button>
JavaScript:

js
Copy
Edit
let btn = document.getElementById("myBtn");

btn.addEventListener("click", function() {
  alert("You clicked the button!");
});
🧠 Day 4 Mini Interview Q&A
Q1: What is an object in JavaScript?
A: A dabba with key–value compartments (e.g., name, age, etc.)

Q2: How to access and update object values?
A: Use dot (obj.key) or bracket (obj["key"]) style.

Q3: What is DOM?
A: The tree of HTML elements that JavaScript can change.

Q4: What is getElementById?
A: It grabs an HTML element by ID.

Q5: What is an event listener?
A: JavaScript's way of reacting to things like clicks, typing, etc.

