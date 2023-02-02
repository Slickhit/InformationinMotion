// Add active class to current tab
const navLinks = document.querySelectorAll("header nav a");
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function() {
    for (let j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove("active");
    }
    this.classList


