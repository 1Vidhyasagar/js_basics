// Grab the elements
const nameInput = document.getElementById("nameInput");
const jobInput = document.getElementById("jobInput");
const makeCardBtn = document.getElementById("makeCard");
const cardContainer = document.getElementById("cardContainer");

// Add click event
makeCardBtn.addEventListener("click", function () {
  const name = nameInput.value;
  const job = jobInput.value;
  

  // Create a new card
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<h2>👤 ${name}</h2><p>💼 ${job}</p> <button ${dltCard()} >Delete</button>`;

 
  // Add the card to the page
  cardContainer.appendChild(card);


  // Clear input fields
  nameInput.value = "";
  jobInput.value = "";
});
