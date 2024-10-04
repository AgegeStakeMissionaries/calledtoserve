// // let missionaries = JSON.parse(localStorage.getItem("missionaries")) || [];
// // let currentEditId = null;

// // function renderMissionaries() {
// //   const missionariesList = document.getElementById("missionariesList");
// //   missionariesList.innerHTML = "";
// //   missionaries.forEach((missionary) => {
// //     const card = document.createElement("div");
// //     card.className = "missionaries_card";
// //     card.innerHTML = `
// //                     <img src="${missionary.image}" loading="lazy" alt="Profile picture" class="profile">
// //                     <div class="details">
// //                         <h3>${missionary.name}</h3>
// //                         <p>Departure Date: ${missionary.departureDate}</p>
// //                         <p>Return Date: ${missionary.returnDate}</p>
// //                         <p>Mission: ${missionary.mission}</p>
// //                     </div>
// //                     <div class="links">
// //                         <a href="#" onclick="openEditModal(${missionary.id})">Edit</a>
// //                         <a class="del" href="#" onclick="deleteMissionary(${missionary.id})">Delete</a>
// //                     </div>
// //                 `;
// //     missionariesList.appendChild(card);
// //   });
// // }

// // function openEditModal(id) {
// //   const missionary = missionaries.find((m) => m.id === id);
// //   if (missionary) {
// //     currentEditId = id;
// //     document.getElementById("editName").value = missionary.name;
// //     document.getElementById("editDeparture").value = missionary.departureDate;
// //     document.getElementById("editReturn").value = missionary.returnDate;
// //     document.getElementById("editMission").value = missionary.mission;
// //     document.getElementById("previewImage").src = missionary.image; // Display current image
// //     document.getElementById("previewImage").style.display = "block";
// //     document.getElementById("editModal").style.display = "block";

// //     // Add input event listeners for automatic updates
// //     document
// //       .getElementById("editName")
// //       .addEventListener("input", updateMissionary);
// //     document
// //       .getElementById("editDeparture")
// //       .addEventListener("input", updateMissionary);
// //     document
// //       .getElementById("editReturn")
// //       .addEventListener("input", updateMissionary);
// //     document
// //       .getElementById("editMission")
// //       .addEventListener("input", updateMissionary);
// //     document
// //       .getElementById("editImage")
// //       .addEventListener("change", handleImageUpload);
// //   }
// // }

// // function handleImageUpload(event) {
// //   const file = event.target.files[0];
// //   if (file) {
// //     const reader = new FileReader();
// //     reader.onload = function (e) {
// //       document.getElementById("previewImage").src = e.target.result; // Display the selected image
// //       document.getElementById("previewImage").style.display = "flex";
// //       document.getElementById("previewImage").style.alignItems = "center"
// //       document.getElementById("previewImage").style.margin = "25px";
// //       document.getElementById("previewImage").style.padding = "0";
// //       // document.getElementById("previewImage").style.borderRadius = "50%";
// //       document.getElementById("previewImage").style.height = "25%";
// //       updateMissionary(); // Call updateMissionary to update image source
// //     };
// //     reader.readAsDataURL(file);
// //   }
// // }

// // function updateMissionary() {
// //   const updatedMissionary = {
// //     id: currentEditId,
// //     name: document.getElementById("editName").value,
// //     departureDate: document.getElementById("editDeparture").value,
// //     returnDate: document.getElementById("editReturn").value,
// //     mission: document.getElementById("editMission").value,
// //     image: document.getElementById("previewImage").src,
// //   };

// //   missionaries = missionaries.map((m) =>
// //     m.id === currentEditId ? updatedMissionary : m
// //   );
// //   localStorage.setItem("missionaries", JSON.stringify(missionaries)); // Save to localStorage
// //   renderMissionaries();
// // }

// // function deleteMissionary(id) {
// //   missionaries = missionaries.filter((m) => m.id !== id);
// //   localStorage.setItem("missionaries", JSON.stringify(missionaries)); // Update localStorage
// //   renderMissionaries();
// // }

// // document.getElementById("addMissionary").onclick = function () {
// //   const newMissionary = {
// //     id: missionaries.length ? missionaries[missionaries.length - 1].id + 1 : 1,
// //     name: prompt("Enter Full name:"),
// //     departureDate: prompt("Enter departure date:"),
// //     returnDate: prompt("Enter return date:"),
// //     mission: prompt("Enter mission:"),
// //     image: "image/profile.png",
// //   };

// //   missionaries.push(newMissionary);
// //   localStorage.setItem("missionaries", JSON.stringify(missionaries)); // Save to localStorage
// //   renderMissionaries();
// // };

// // document.getElementById("closeModal").onclick = function () {
// //   document.getElementById("editModal").style.display = "none";
// // };

// // window.onload = renderMissionaries;

// // // FOr server

// // document.getElementById("addMissionary").onclick = async function () {
// //   const name = prompt("Enter Full name:");
// //   if (name.length > 25) {
// //     alert("Name cannot exceed 25 characters.");
// //     return;
// //   }

// //   const departureDate = prompt("Enter departure date (YYYY-MM-DD):");
// //   const returnDate = prompt("Enter return date (YYYY-MM-DD):");
// //   const mission = prompt("Enter mission:");

// //   if (
// //     !/^\d{4}-\d{2}-\d{2}$/.test(departureDate) ||
// //     !/^\d{4}-\d{2}-\d{2}$/.test(returnDate)
// //   ) {
// //     alert("Please enter valid dates in the format YYYY-MM-DD.");
// //     return;
// //   }

// //   const newMissionary = {
// //     name,
// //     departureDate,
// //     returnDate,
// //     mission,
// //     image: "image/profile.png",
// //   };

// //   // Send POST request to the server
// //   try {
// //     const response = await fetch("/api/missionaries", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify(newMissionary),
// //     });

// //     if (response.ok) {
// //       const addedMissionary = await response.json();
// //       missionaries.push(addedMissionary);
// //       renderMissionaries(); // Update the UI with the new missionary
// //     } else {
// //       const error = await response.json();
// //       alert(error.error);
// //     }
// //   } catch (error) {
// //     console.error("Error adding missionary:", error);
// //   }
// // };

// let missionaries = JSON.parse(localStorage.getItem("missionaries")) || [];
// let currentEditId = null;

// function renderMissionaries() {
//   const missionariesList = document.getElementById("missionariesList");
//   missionariesList.innerHTML = "";
//   missionaries.forEach((missionary) => {
//     const card = document.createElement("div");
//     card.className = "missionaries_card";
//     card.innerHTML = `
//                     <img src="${missionary.image}" loading="lazy" alt="Profile picture" class="profile">
//                     <div class="details">
//                         <h3>${missionary.name}</h3>
//                         <p>Departure Date: ${missionary.departureDate}</p>
//                         <p>Return Date: ${missionary.returnDate}</p>
//                         <p>Mission: ${missionary.mission}</p>
//                     </div>
//                     <div class="links">
//                         <a href="#" onclick="openEditModal(${missionary.id})">Edit</a>
//                         <a class="del" href="#" onclick="deleteMissionary(${missionary.id})">Delete</a>
//                     </div>
//                 `;
//     missionariesList.appendChild(card);
//   });
// }

// function openEditModal(id) {
//   const missionary = missionaries.find((m) => m.id === id);
//   if (missionary) {
//     currentEditId = id;
//     document.getElementById("editName").value = missionary.name;
//     document.getElementById("editDeparture").value = missionary.departureDate;
//     document.getElementById("editReturn").value = missionary.returnDate;
//     document.getElementById("editMission").value = missionary.mission;
//     document.getElementById("previewImage").src = missionary.image; // Display current image
//     document.getElementById("previewImage").style.display = "block";
//     document.getElementById("editModal").style.display = "block";

//     // Add input event listeners for automatic updates
//     document
//       .getElementById("editName")
//       .addEventListener("input", updateMissionary);
//     document
//       .getElementById("editDeparture")
//       .addEventListener("input", updateMissionary);
//     document
//       .getElementById("editReturn")
//       .addEventListener("input", updateMissionary);
//     document
//       .getElementById("editMission")
//       .addEventListener("input", updateMissionary);
//     document
//       .getElementById("editImage")
//       .addEventListener("change", handleImageUpload);
//   }
// }

// function handleImageUpload(event) {
//   const file = event.target.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = function (e) {
//       document.getElementById("previewImage").src = e.target.result; // Display the selected image
//       document.getElementById("previewImage").style.display = "flex";
//       document.getElementById("previewImage").style.alignItems = "center";
//       document.getElementById("previewImage").style.margin = "25px";
//       document.getElementById("previewImage").style.padding = "0";
//       document.getElementById("previewImage").style.height = "25%";
//       updateMissionary(); // Call updateMissionary to update image source
//     };
//     reader.readAsDataURL(file);
//   }
// }

// function updateMissionary() {
//   const updatedMissionary = {
//     id: currentEditId,
//     name: document.getElementById("editName").value,
//     departureDate: document.getElementById("editDeparture").value,
//     returnDate: document.getElementById("editReturn").value,
//     mission: document.getElementById("editMission").value,
//     image: document.getElementById("previewImage").src,
//   };

//   missionaries = missionaries.map((m) =>
//     m.id === currentEditId ? updatedMissionary : m
//   );
//   localStorage.setItem("missionaries", JSON.stringify(missionaries)); // Save to localStorage
//   renderMissionaries();
// }

// function deleteMissionary(id) {
//   missionaries = missionaries.filter((m) => m.id !== id);
//   localStorage.setItem("missionaries", JSON.stringify(missionaries)); // Update localStorage
//   renderMissionaries();
// }

// document.getElementById("addMissionary").onclick = function () {
//   const name = prompt("Enter Full name:");

//   const departureDate = prompt("Enter departure date (YYYY-MM-DD):");
//   const returnDate = prompt("Enter return date (YYYY-MM-DD):");
//   const mission = prompt("Enter mission:");

//   const newMissionary = {
//     id: missionaries.length ? missionaries[missionaries.length - 1].id + 1 : 1,
//     name,
//     departureDate,
//     returnDate,
//     mission,
//     image: "image/profile.png",
//   };

//   missionaries.push(newMissionary);
//   localStorage.setItem("missionaries", JSON.stringify(missionaries)); // Save to localStorage
//   renderMissionaries();
// };

// document.getElementById("closeModal").onclick = function () {
//   document.getElementById("editModal").style.display = "none";
// };

// window.onload = renderMissionaries;

// document.addEventListener("DOMContentLoaded", () => {
//   fetch("missionaries.json")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       const missionariesList = document.getElementById("missionariesList");

//       // Clear existing content if any
//       missionariesList.innerHTML = "";

//       // Loop through each missionary and create HTML
//       data.forEach((missionary) => {
//         const missionaryCard = document.createElement("div");
//         missionaryCard.classList.add("missionaries_card");

//         missionaryCard.innerHTML = `
//                     <img src="${missionary.image}" loading="lazy" alt="Profile picture" class="profile">
//                     <div class="details">
//                         <h3>${missionary.name}</h3>
//                         <h3>Departure Date: ${missionary.departureDate}</h3>
//                         <h3>Mission: ${missionary.mission}</h3>
//                         <a href="#">About</a>
//                     </div>
//                 `;

//         missionariesList.appendChild(missionaryCard);
//       });
//     })
//     .catch((error) => {
//       console.error("Error fetching missionaries:", error);
//     });
// });

// fetch("missionaries.json")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     const missionariesList = document.getElementById("missionariesList");

//     // Clear existing content if any
//     missionariesList.innerHTML = "";

//     // Loop through each missionary and create HTML
//     data.forEach((missionary) => {
//       console.table(missionary);
//       const missionaryCard = document.createElement("div");
//       missionaryCard.classList.add("missionaries_card");

//       missionaryCard.innerHTML = `
//           <img src="${missionary.image}" loading="lazy" alt="Profile picture" class="profile">
//           <div class="details">
//               <h3>${missionary.name}</h3>
//               <h3>Departure Date: ${missionary.departureDate}</h3>
//               <h3>Mission: ${missionary.mission}</h3>
//               <button class="button open-button">More</button>
//     <dialog class="modal" id="modal">
//       <h2>News Letter</h2>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
//         voluptas sint beatae nostrum vero nam!
//       </p>
//       <button class="close-btn">&#x274C</button>
//     </dialog>
//           </div>
//         `;

//       missionariesList.appendChild(missionaryCard);
//     });
//   })
//   .catch((error) => {
//     console.error("Error fetching missionaries:", error);
//   });

// const modal = document.querySelector("#modal");
// const openModal = document.querySelector(".open-button");
// const closeModal = document.querySelector(".close-btn");

// openModal.addEventListener("click", function () {
//   modal.showModal();
// });
// closeModal.addEventListener("click", function () {
//   modal.close();
// });

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
