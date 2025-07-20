// Navbar click
const navLinks = document.querySelectorAll(".nav-list");

navLinks.forEach((navlink) => {
  navlink.addEventListener("click", function () {
    navLinks.forEach((link) => {
      link.classList.remove("navclick");
    });

    this.classList.add("navclick");
  });
});

// Drop down menu
const toggleBtn = document.querySelector(".toggle-icon");
const toggleBtnIcon = document.querySelector(".toggle-icon i");
const dropDownMenu = document.querySelector(".dropDownMenu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
};
