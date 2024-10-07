window.onload = function () {
  // Display the loader for 5 seconds
  setTimeout(function () {
    document.getElementById("loader").style.display = "none"; // Hide loader
    document.getElementById("content").style.display = "block"; // Show content
  }, 1500); // 5000 milliseconds = 5 seconds
};
