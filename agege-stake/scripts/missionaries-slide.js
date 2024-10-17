// fetch("missionaries.json")
//   .then((response) => response.json())
//   .then((data) => {
//     console.table(data);
//     const missionariesList = document.getElementById("missionariesList");
//     missionariesList.innerHTML = "";
//     // const missionaries = data;
//     let index = 0;
//     // Create image elements for each missionary
//     const slideshowContainer = document.createElement("div");
//     slideshowContainer.classList.add("slideshow-container");

//     data.forEach((missionary, i) => {
//       const slide = document.createElement("div");
//       slide.classList.add("slide");
//       slide.style.display = i === 0 ? "block" : "none"; // Show only the first slide initially

//       const img = document.createElement("img");
//       img.src = `${missionary.image}`;
//       img.alt = missionary.name;
//       // img.style.height = "auto";
//       // img.style.width = "100%";
//       img.classList.add("missionary-card");

//       const caption = document.createElement("div");
//       caption.classList.add("caption");
//       caption.innerHTML = `
//       <h4>${missionary.name}</h4>
//       <h4>${missionary.mission}</h4>
      
//       `;
//       // caption.textContent = missionary.mission;

//       slide.appendChild(img);
//       slide.appendChild(caption);
//       slideshowContainer.appendChild(slide);
//     });

//     missionariesList.appendChild(slideshowContainer);

//     // Function to show the next image
//     function showNextSlide() {
//       const slides = document.querySelectorAll(".slide");
//       slides[index].style.display = "none"; // Hide the current slide
//       index = (index + 1) % slides.length; // Increment index
//       slides[index].style.display = "block";
//       // slides[index].style.heigth = "300px"; // Show the next slide
//     }

//     // Change image every 3 seconds
//     setInterval(showNextSlide, 3000);
//   })
//   .catch((error) => {
//     console.error("Error fetching missionaries data:", error);
//   });


fetch("missionaries.json")
  .then((response) => response.json())
  .then((data) => {
    console.table(data);
    const missionariesList = document.getElementById("missionariesList");
    missionariesList.innerHTML = "";

    let index = 0;

    // Create container for the slideshow
    const slideshowContainer = document.createElement("div");
    slideshowContainer.classList.add("slideshow-container");

    data.forEach((missionary, i) => {
      // Create each slide
      const slide = document.createElement("div");
      slide.classList.add("slide");
      slide.style.display = i === 0 ? "block" : "none"; // Show only the first slide

      // Add image
      const img = document.createElement("img");
      img.src = missionary.image;
      img.alt = missionary.name;
      img.classList.add("missionary-card");

      // Add caption
      const caption = document.createElement("div");
      caption.classList.add("caption");
      caption.innerHTML = `
        <h4>${missionary.name}</h4>
        <h4>${missionary.mission}</h4>
      `;

      // Append image and caption to the slide
      slide.appendChild(img);
      slide.appendChild(caption);

      // Append each slide to the slideshow container
      slideshowContainer.appendChild(slide);
    });

    // Add the slideshow container to the main missionaries list container
    missionariesList.appendChild(slideshowContainer);

    // Function to show the next slide
    function showNextSlide() {
      const slides = document.querySelectorAll(".slide");
      slides[index].style.display = "none"; // Hide the current slide
      index = (index + 1) % slides.length; // Move to the next slide
      slides[index].style.display = "block"; // Show the next slide
    }

    // Automatically change the slide every 3 seconds
    setInterval(showNextSlide, 3000);
  })
  .catch((error) => {
    console.error("Error fetching missionaries data:", error);
  });
