document.addEventListener("DOMContentLoaded", function() {
  const menuCloseIcon = document.getElementById("menu-close");
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.getElementById(".nav-bar");

  // function to toggle the visibility of the navbar
  function toggleNavBar() {
    navbar.classList.toggle("active");
  }

  // event listener to close the navbar
  menuCloseIcon.addEventListener("click", toggleNavBar);

  menuIcon.addEventListener("click", toggleNavBar);

  // additional functionality for closing the navbar
  const navLinks = document.querySelectorAll(".nav-bar ul li a");
  navLinks.forEach(function(link) {
    link.addEventListener("click", function () {
      navbar.classList.remove("active");
    });
  });
  // optional: close navbar when click outside of it
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".nav-bar") &&
    navbar.classList.contains("active")) {
      navbar.classList.remove("active");
    }
  });
});