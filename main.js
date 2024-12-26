let menu = document.querySelector("nav ul");
let menuBtn = document.querySelector("nav svg");
menuBtn.addEventListener("click", function () {
  menu.classList.toggle("show");
});
