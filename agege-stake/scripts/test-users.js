
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
              <h3>Mail:</h3>
              <a style="display:none;" href="mailto:${missionary.mail}" style="font-size: 0.75rem;">
                    <h4>${missionary.mail}</h4>
                </a>
               <a style=text-decoration="underline;" ></a>
              <button style="display:none;" class="button open-button">More</button>
          </div>
        `;
      missionariesList.appendChild(missionaryCard);
    });
  })
  .catch((error) => {
    console.error("Error fetching missionaries:", error);
  });
