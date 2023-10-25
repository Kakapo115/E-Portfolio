export function setupScroll() {
  const links = document.querySelectorAll(".header-right a");

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetSection = document.querySelector(link.getAttribute("href"));
      const targetOffset =
        targetSection.getBoundingClientRect().top + window.pageYOffset;

      window.scroll({
        top: targetOffset,
        behavior: "smooth",
      });
    });
  });

  document.addEventListener("scroll", function () {
    // Check if the screen size is desktop-sized
    if (window.innerWidth >= 1024) {
      const sections = document.querySelectorAll(".section");
      const opacityFactor = 0.9; // Adjust this factor to control the rate of opacity change
      const minOpacity = 0.3; // Adjust the minimum opacity as needed

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

