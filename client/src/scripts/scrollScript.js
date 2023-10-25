import anime from 'animejs/lib/anime.es.js'; // Import Anime.js

export function setupScroll() {
  const links = document.querySelectorAll(".header-right a");

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetSection = document.querySelector(link.getAttribute("href"));
      const targetOffset =
        targetSection.getBoundingClientRect().top + window.pageYOffset;

      // Use Anime.js to animate the scroll position
      anime({
        targets: window,
        scrollTop: targetOffset,
        duration: 800, // Set the duration of the scroll animation
        easing: 'easeInOutQuad', // Set the easing function
      });
    });
  });

  document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll(".section");
    
    sections.forEach(function (section) {
      const rect = section.getBoundingClientRect();
      const scale = Math.min(1, Math.max(0.5, 1 - Math.abs(rect.top) / window.innerHeight));

      // Use Anime.js to smoothly animate the scale property
      anime({
        targets: section.querySelector(".img"),
        scale: scale,
        duration: 400, // Adjust the duration of the scale animation
        easing: 'easeInOutQuad', // Adjust the easing function
      });

      // Check if the screen size is desktop-sized for opacity animation
      if (window.innerWidth >= 1024) {
        const opacityFactor = 0.9;
        const minOpacity = 0.3;
        const opacity =
          minOpacity +
          (1 - minOpacity) * (1 - Math.abs(rect.top) / (window.innerHeight * opacityFactor));

        section.style.opacity = opacity >= minOpacity ? opacity : minOpacity;
      } else {
        // If the screen size is smaller, set all sections to full opacity
        section.style.opacity = 1;
      }
    });
  });
}
