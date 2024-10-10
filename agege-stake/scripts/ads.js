
// Show the modal card after 15 seconds
setTimeout(() => {
  document.querySelector("#ads").style.display = "block";
}, 15000);

// Hide the card when the exit button is clicked
document.querySelector(".exit").addEventListener("click", () => {
  document.querySelector("#ads").style.display = "none";
});
