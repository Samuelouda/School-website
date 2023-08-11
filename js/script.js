document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-btn");
    const navbar = document.querySelector(".navbar");
  
    menuButton.addEventListener("click", function () {
      navbar.classList.toggle("show-menu");
    });
  });
  