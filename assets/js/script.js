/* ==============================================================
   PROJECT: AWS Static Website Hosting
   AUTHOR: Sakshi Kohli
   INTERN ID: CITS5437
   FILE: script.js
   PURPOSE: Mobile navigation and automatic footer year
   ============================================================== */

// Get the required HTML elements.
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const currentYear = document.getElementById("currentYear");

// Open or close the mobile navigation menu.
menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");

    // Update accessibility state.
    const isOpen = navLinks.classList.contains("show");
    menuButton.setAttribute("aria-expanded", isOpen);
});

// Close the mobile menu after a navigation link is selected.
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
        menuButton.setAttribute("aria-expanded", "false");
    });
});

// Display the current year automatically in the footer.
currentYear.textContent = new Date().getFullYear();
