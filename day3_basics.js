// 🍩 Loop example
for (let i = 1; i <= 3; i++) {
  console.log("Donut #" + i);
}

// 🍕 Function example
function makePizza(type) {
  console.log("Making " + type + " pizza!");
}
makePizza("Veg");

// ➕ Function with return
function add(a, b) {
  return a + b;
}
console.log("5 + 3 = " + add(5, 3));

// 📦 Array example
let cities = ["Bangalore", "Delhi", "Hyderabad"];
for (let city of cities) {
  console.log("We can work in " + city);
}
