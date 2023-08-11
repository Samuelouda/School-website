// js/script.js
document.addEventListener("DOMContentLoaded", function() {
  var logo = document.querySelector(".logo");

  function updateLogoColor() {
      if (navigator.onLine) {
          logo.classList.remove("offline");
      } else {
          logo.classList.add("offline");
      }
  }

  updateLogoColor();

  window.addEventListener("online", updateLogoColor);
  window.addEventListener("offline", updateLogoColor);
});
