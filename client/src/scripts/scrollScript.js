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
    // Check if the screen size is desktop-sized
    if (window.innerWidth >= 1024) {
      const sections = document.querySelectorAll(".section");
      const opacityFactor = 0.9;
      const minOpacity = 0.3;

      sections.forEach(function (section) {
        const rect = section.getBoundingClientRect();
        const opacity =
          minOpacity +
          (1 - minOpacity) * (1 - Math.abs(rect.top) / (window.innerHeight * opacityFactor));

        section.style.opacity = opacity >= minOpacity ? opacity : minOpacity;
      });
    } else {
      // If the screen size is smaller, set all sections to full opacity
      const sections = document.querySelectorAll(".section");
      sections.forEach(function (section) {
        section.style.opacity = 1;
      });
    }
  });
}