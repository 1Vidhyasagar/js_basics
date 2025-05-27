// 🍜 Chef object with a method using 'this'
const chef = {
  name: "Master Chef",
  makeDish() {
    console.log(`${this.name} is cooking 🍜`);
  },
};
chef.makeDish(); // Output: Master Chef is cooking 🍜

// 🖱️ Change button text when clicked
document.querySelector("#clickBtn").addEventListener("click", function () {
  this.innerText = "You Clicked Me!";
  console.log("Button Clicked!");
});

// 🎨 Change background color on button click
document.querySelector("#colorBtn").addEventListener("click", function () {
  document.body.style.backgroundColor = "#FFEEAA";
});

// 🐶 Object method with 'this' – barking dog
const dog = {
  name: "Sheru",
  bark() {
    console.log(`Woof from ${this.name}!`);
  },
};
dog.bark(); // Output: Woof from Sheru!

// 🎤 Live input tracking
document
  .querySelector("#nameInput")
  .addEventListener("input", function (event) {
    console.log("User is typing:", event.target.value);
  });
