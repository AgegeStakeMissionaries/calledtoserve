const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));

  function setModalImage(imageSrc) {
    const modalImage = document.getElementById("modalImage");
    // SO THIS IS TO SET THE SOURCE OF THE MODAL IMAGE
    modalImage.src = imageSrc; 
    // AND THIS IS TO SET THE ALT TEXT FOR ACCESSIBILITY
    modalImage.alt = "Image Preview"; 
  }