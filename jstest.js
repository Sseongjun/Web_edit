const toggleBtn = document.querySelector(".Menu_Toggle_Button");
const menu = document.querySelector(".Menu_Bar");
const icons = document.querySelector(".Menu_Login");

toggleBtn.addEventListener("click",() => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});
