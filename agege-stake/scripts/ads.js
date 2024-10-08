// // Hide the card initially and display it after 5 seconds
// setTimeout(() => {
//   document.querySelector(".modal-card").style.display = "block";
// }, 7000);

// // Hide the card when the exit button is clicked
// document.querySelector(".exit-btn").addEventListener("click", () => {
//   document.querySelector("#box-card").style.display = "none";
// });
console.log("CLICKED!!!!!!!!!!");
// Show the modal card after 7 seconds
setTimeout(() => {
  document.querySelector("#ads").style.display = "block";
}, 10000);

// Hide the card when the exit button is clicked
document.querySelector(".exit").addEventListener("click", () => {
  console.log("CLICKED!!!!!!!!!!");
  document.querySelector("#ads").style.display = "none";
  // document.querySelector("#box-card").style.display = "none";
});
