// Apil Sapkota//
//December 07, 2024 implemented the voting system for herodog,workingdog, and companion dog//

document.addEventListener("DOMContentLoaded", function () {
  // Check if the navbar is already added to prevent duplication
  if (!document.querySelector("nav")) {
    // Define the navbar HTML structure
    const navbarHTML = `
        <nav>
          <div id="menu-toggle" class="mobile-menu">
            <span>&#9776;</span>
          </div>
          <div id="nav-links">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="heroDog.html">Hero Dogs</a></li>
              <li><a href="workingDog.html">Working Dogs</a></li>
              <li><a href="companionDog.html">Companion Dogs</a></li>
            </ul>
          </div>
        </nav>
      `;

    // Find a placeholder element on the page (for example, at the top of the body)
    const body = document.body;

    // Insert the navbar HTML before the first element inside the body
    body.insertAdjacentHTML("afterbegin", navbarHTML);

    // JavaScript for hamburger menu toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }
});
