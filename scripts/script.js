// Apil Sapkota//

// December 07, 2024 implemented the voting system for herodog,workingdog, and companion dog//

// JavaScript for Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
//When the menu toggle is clicked, add or remove the 'active' class to #nav-links
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
