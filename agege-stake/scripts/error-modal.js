function showModal() {
  document.getElementById("errorModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("errorModal").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("errorModal");
  if (event.target === modal) {
    closeModal();
  }
};