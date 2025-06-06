// nav.js: highlights current page nav link and disables clicking on it
const currentPage = location.pathname.split("/").pop();
console.log("Current page is:", currentPage);

const navLinks = document.querySelectorAll(".nav-link");

// 3. Loop through each link and compare its href with the current page
navLinks.forEach(link => {
  const href = link.getAttribute("href");
  
  if (href === currentPage) {
    // 4. If it matches, add an "active" class
    link.classList.add("active");

    // Optional: prevent user from clicking the current page link again
    link.style.pointerEvents = "none"; // disables clicking
    link.style.color = "gray";         // makes it gray
  }
});
