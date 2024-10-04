
fetch("missionaries.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const missionariesList = document.getElementById("missionariesList");

    // Clear existing content if any
    missionariesList.innerHTML = "";

    // Loop through each missionary and create HTML
    data.forEach((missionary) => {
      const missionaryCard = document.createElement("div");
      missionaryCard.classList.add("missionaries_card");

      missionaryCard.innerHTML = `
          <img src="${missionary.image}" loading="lazy" alt="Profile picture" class="profile">
          <div class="details">
              <h3>${missionary.name}</h3>
              <h3>Departure Date: ${missionary.departureDate}</h3>
              <h3>Mission: ${missionary.mission}</h3>
              <button class="button open-button">More</button>
          </div>
        `;

      missionariesList.appendChild(missionaryCard);

      // Add event listener to the open button
      const openButton = missionaryCard.querySelector(".open-button");
      openButton.addEventListener("click", function () {
        // Update modal content here if needed
        modal.querySelector("h2").textContent = missionary.name;
        modal.querySelector(
          "p"
        ).innerHTML = `<strong>${missionary.name}:</strong> has been called to serve the lord on the <strong>${missionary.departureDate}</strong> and would be serving in <strong>${missionary.mission}</strong>. 
        
        <br>

        We wish ${missionary.gender} goodluck as he proceeds on his journey and pray that the Holy Spirit becomes his constant companion at all times and in all places. 👋👋🙏🤝`; // Customize this line
        let imgBox = document.querySelector(".memories");
        imgBox.setAttribute("src", `${missionary.memories}`);
        modal.showModal();
      });
    });
  })
  .catch((error) => {
    console.error("Error fetching missionaries:", error);
  });

const modal = document.querySelector("#modal");
const closeModal = document.querySelector(".close-btn");

closeModal.addEventListener("click", function () {
  modal.close();
});
