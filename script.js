document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".image-container");
  
    sections.forEach((section) => {
      let currentIndex = 0;
      const images = section.querySelectorAll("img");
  
      images[currentIndex].classList.add("active");
  
      setInterval(() => {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
      }, 3000);
    });
  });
  