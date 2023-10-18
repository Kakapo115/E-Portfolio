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
    const sections = document.querySelectorAll(".section");
    const opacityFactor = 0.3; // Adjust this factor to control the rate of opacity change
    
    sections.forEach(function (section) {
      const rect = section.getBoundingClientRect();
      const opacity = 1 - Math.abs(rect.top) / (window.innerHeight * opacityFactor);

      section.style.opacity = opacity >= 0 ? opacity : 0;
    });
  });
}
