// Select the video element
const video = document.getElementById("myVideo");

// Create an Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // Check if the video is in view
      if (entry.isIntersecting) {
        console.log("Playing");
        video.play(); // Play the video when it becomes visible
      } else {
        console.log("paused");
        video.pause(); // Pause the video when it's out of view
      }
    });
  },
  {
    threshold: 0.5, // 50% of the video needs to be visible
  }
);

// Observe the video element
observer.observe(video);
