const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");
const noResult = document.getElementById("noResult");

searchInput.addEventListener("keyup", () => {
  const value = searchInput.value.toLowerCase();
  let found = false;

  cards.forEach(card => {
    const name = card.dataset.name;

    if (name.includes(value)) {
      card.style.display = "block";
      found = true;
    } else {
      card.style.display = "none";
    }
  });

  // show / hide "no result"
  if (!found && value !== "") {
    noResult.style.display = "block";
  } else {
    noResult.style.display = "none";
  }
});


// COPY CREDIT
function copyCredit() {
  const text = document.getElementById("creditText").innerText;
  navigator.clipboard.writeText(text);
  alert("Credit copied! ✅");
}

// FEEDBACK (NO RELOAD)
function sendFeedback(e) {
  e.preventDefault(); // ❌ reload band
  alert("Thanks for your feedback! 💚");
}
