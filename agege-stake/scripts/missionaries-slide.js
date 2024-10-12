fetch("missionaries.json")
  .then((response) => response.json())
  .then((data) => {
    console.table(data);
    const missionariesList = document.getElementById("missionariesList");
    missionariesList.innerHTML = "";
    // const missionaries = data;
    let index = 0;
    // Create image elements for each missionary
    const slideshowContainer = document.createElement("div");
    slideshowContainer.classList.add("slideshow-container");

    data.forEach((missionary, i) => {
      const slide = document.createElement("div");
      slide.classList.add("slide");
      slide.style.display = i === 0 ? "block" : "none"; // Show only the first slide initially

      const img = document.createElement("img");
      img.src = `${missionary.image}`;
      img.alt = missionary.name;
      img.style.height = "350px";
      img.style.width = "100%";
      img.classList.add("missionary-card");

      const caption = document.createElement("div");
      caption.classList.add("caption");
      caption.innerHTML = `
      <h4>${missionary.name}</h4>
      <h4>${missionary.mission}</h4>
      
      `;
      // caption.textContent = missionary.mission;

      slide.appendChild(img);
      slide.appendChild(caption);
      slideshowContainer.appendChild(slide);
    });

    missionariesList.appendChild(slideshowContainer);

    // Function to show the next image
    function showNextSlide() {
      const slides = document.querySelectorAll(".slide");
      slides[index].style.display = "none"; // Hide the current slide
      index = (index + 1) % slides.length; // Increment index
      slides[index].style.display = "block";
      slides[index].style.heigth = "300px"; // Show the next slide
    }

    // Change image every 3 seconds
    setInterval(showNextSlide, 3000);
  })
  .catch((error) => {
    console.error("Error fetching missionaries data:", error);
  });
