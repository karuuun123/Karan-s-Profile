let menuIcon = document.querySelector("#menu-icons");
let navBar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  // toggle navbar visibility
  navBar.classList.toggle("active");

  // toggle icon
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-x"); // cross icon
});
