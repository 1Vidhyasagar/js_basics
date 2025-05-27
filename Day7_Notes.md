📅 Day 7: DOM Mastery – Cards, Inputs, Events, Dynamic Elements

---

🧠 CONCEPTS LEARNED:

1. ✅ DOM (Document Object Model):
   - JS way of controlling HTML elements.
   - You can select, read, change, or delete elements dynamically.

2. ✅ `document.querySelector()` & `document.getElementById()`:
   - Use these to grab HTML elements into JavaScript.

3. ✅ `.innerText` and `.value`:
   - `innerText`: To change or read what's inside tags like <p>, <div>.
   - `value`: To get data typed in an `<input>` field.

4. ✅ `.addEventListener('click', ...)`:
   - Attach a listener to any element.
   - Example: Click a button → run a function.

5. ✅ Dynamic Element Creation with `createElement()`:
   - You can build HTML elements using JS and add them to the page!

6. ✅ `.appendChild()` or `.append()`:
   - Add a new element to the DOM.

7. ✅ Using Template Literals to generate HTML with variables.

---

📋 INTERVIEW Q&A:

1. ❓ What is the DOM?
   ✅ It's the structure of a webpage that JS uses to interact with HTML.

2. ❓ How do you select elements in JavaScript?
   ✅ Using `document.querySelector()` or `getElementById()`.

3. ❓ What’s the difference between innerText and value?
   ✅ `innerText` is for tags (like <p>), `value` is for form inputs.

4. ❓ How do you handle a button click in JS?
   ✅ Use `addEventListener('click', callbackFunction)`.

5. ❓ How can you create new HTML elements with JS?
   ✅ Use `document.createElement()` and `appendChild()`.

6. ❓ Why is using template literals useful in DOM?
   ✅ Easier to write HTML strings and insert variables.

---

🧪 CODE SNIPPET SUMMARY:

// Select elements
const input = document.querySelector("#nameInput");
const button = document.querySelector("#addBtn");
const container = document.querySelector("#cardContainer");

// Handle button click to add a card
button.addEventListener("click", () => {
  const name = input.value;

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h2>${name}</h2>
    <p>This is a dynamic card!</p>
  `;

  container.appendChild(card);
});

---

🎯 MINI PRACTICE TASKS YOU DID:

- Add name input → Click button → Show profile card.
- Clear input after adding.
- Use DOM methods to dynamically create, modify elements.

---

📦 COMMIT MESSAGE FOR GITHUB:
"Day 7: DOM Manipulation – Inputs, Events, Dynamic Cards + Interview Q&A"

