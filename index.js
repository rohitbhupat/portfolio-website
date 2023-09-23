function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var typed = new Typed("#element", {
  strings: ["Web Developer", "React.JS Developer"],
  typeSpeed: 50,
});
