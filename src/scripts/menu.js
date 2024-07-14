document.addEventListener("DOMContentLoaded", (event) => {
  const hamburgerButton = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");

  hamburgerButton.addEventListener("click", () => {
    nav.classList.toggle("hidden");
  });
});
