const menu = document.querySelector("#menu");
const menuBtn = document.querySelector("#menu-button");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("invisible");
});
