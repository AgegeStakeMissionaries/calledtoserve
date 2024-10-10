let img = document.querySelectorAll(".carousel-img img");
let currentIndex = 0;
setInterval(() => {
  img[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % img.length;
  img[currentIndex].style.display = "block";
  img[currentIndex].style.transition = "1s, ease-in";
}, 5000);
