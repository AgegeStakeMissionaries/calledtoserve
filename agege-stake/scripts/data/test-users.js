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
//       document.getElementById("previewImage").style.alignItems = "center"
//       document.getElementById("previewImage").style.margin = "25px";
//       document.getElementById("previewImage").style.padding = "0";
//       // document.getElementById("previewImage").style.borderRadius = "50%";
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
//   const newMissionary = {
//     id: missionaries.length ? missionaries[missionaries.length - 1].id + 1 : 1,
//     name: prompt("Enter Full name:"),
//     departureDate: prompt("Enter departure date:"),
//     returnDate: prompt("Enter return date:"),
//     mission: prompt("Enter mission:"),
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

// // FOr server

// document.getElementById("addMissionary").onclick = async function () {
//   const name = prompt("Enter Full name:");
//   if (name.length > 25) {
//     alert("Name cannot exceed 25 characters.");
//     return;
//   }

//   const departureDate = prompt("Enter departure date (YYYY-MM-DD):");
//   const returnDate = prompt("Enter return date (YYYY-MM-DD):");
//   const mission = prompt("Enter mission:");

//   if (
//     !/^\d{4}-\d{2}-\d{2}$/.test(departureDate) ||
//     !/^\d{4}-\d{2}-\d{2}$/.test(returnDate)
//   ) {
//     alert("Please enter valid dates in the format YYYY-MM-DD.");
//     return;
//   }

//   const newMissionary = {
//     name,
//     departureDate,
//     returnDate,
//     mission,
//     image: "image/profile.png",
//   };

//   // Send POST request to the server
//   try {
//     const response = await fetch("/api/missionaries", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newMissionary),
//     });

//     if (response.ok) {
//       const addedMissionary = await response.json();
//       missionaries.push(addedMissionary);
//       renderMissionaries(); // Update the UI with the new missionary
//     } else {
//       const error = await response.json();
//       alert(error.error);
//     }
//   } catch (error) {
//     console.error("Error adding missionary:", error);
//   }
// };

let missionaries = JSON.parse(localStorage.getItem("missionaries")) || [];
let currentEditId = null;

function renderMissionaries() {
  const missionariesList = document.getElementById("missionariesList");
  missionariesList.innerHTML = "";
  missionaries.forEach((missionary) => {
    const card = document.createElement("div");
    card.className = "missionaries_card";
    card.innerHTML = `
                    <img src="${missionary.image}" loading="lazy" alt="Profile picture" class="profile">
                    <div class="details">
                        <h3>${missionary.name}</h3>
                        <p>Departure Date: ${missionary.departureDate}</p>
                        <p>Return Date: ${missionary.returnDate}</p>
                        <p>Mission: ${missionary.mission}</p>
                    </div>
                    <div class="links">
                        <a href="#" onclick="openEditModal(${missionary.id})">Edit</a>
                        <a class="del" href="#" onclick="deleteMissionary(${missionary.id})">Delete</a>
                    </div>
                `;
    missionariesList.appendChild(card);
  });
}

function openEditModal(id) {
  const missionary = missionaries.find((m) => m.id === id);
  if (missionary) {
    currentEditId = id;
    document.getElementById("editName").value = missionary.name;
    document.getElementById("editDeparture").value = missionary.departureDate;
    document.getElementById("editReturn").value = missionary.returnDate;
    document.getElementById("editMission").value = missionary.mission;
    document.getElementById("previewImage").src = missionary.image; // Display current image
    document.getElementById("previewImage").style.display = "block";
    document.getElementById("editModal").style.display = "block";

    // Add input event listeners for automatic updates
    document
      .getElementById("editName")
      .addEventListener("input", updateMissionary);
    document
      .getElementById("editDeparture")
      .addEventListener("input", updateMissionary);
    document
      .getElementById("editReturn")
      .addEventListener("input", updateMissionary);
    document
      .getElementById("editMission")
      .addEventListener("input", updateMissionary);
    document
      .getElementById("editImage")
      .addEventListener("change", handleImageUpload);
  }
}

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("previewImage").src = e.target.result; // Display the selected image
      document.getElementById("previewImage").style.display = "flex";
      document.getElementById("previewImage").style.alignItems = "center";
      document.getElementById("previewImage").style.margin = "25px";
      document.getElementById("previewImage").style.padding = "0";
      document.getElementById("previewImage").style.height = "25%";
      updateMissionary(); // Call updateMissionary to update image source
    };
    reader.readAsDataURL(file);
  }
}

function updateMissionary() {
  const updatedMissionary = {
    id: currentEditId,
    name: document.getElementById("editName").value,
    departureDate: document.getElementById("editDeparture").value,
    returnDate: document.getElementById("editReturn").value,
    mission: document.getElementById("editMission").value,
    image: document.getElementById("previewImage").src,
  };

  missionaries = missionaries.map((m) =>
    m.id === currentEditId ? updatedMissionary : m
  );
  localStorage.setItem("missionaries", JSON.stringify(missionaries)); // Save to localStorage
  renderMissionaries();
}

function deleteMissionary(id) {
  missionaries = missionaries.filter((m) => m.id !== id);
  localStorage.setItem("missionaries", JSON.stringify(missionaries)); // Update localStorage
  renderMissionaries();
}

document.getElementById("addMissionary").onclick = function () {
  const name = prompt("Enter Full name:");

  const departureDate = prompt("Enter departure date (YYYY-MM-DD):");
  const returnDate = prompt("Enter return date (YYYY-MM-DD):");
  const mission = prompt("Enter mission:");

  const newMissionary = {
    id: missionaries.length ? missionaries[missionaries.length - 1].id + 1 : 1,
    name,
    departureDate,
    returnDate,
    mission,
    image: "image/profile.png",
  };

  missionaries.push(newMissionary);
  localStorage.setItem("missionaries", JSON.stringify(missionaries)); // Save to localStorage
  renderMissionaries();
};

document.getElementById("closeModal").onclick = function () {
  document.getElementById("editModal").style.display = "none";
};

window.onload = renderMissionaries;
