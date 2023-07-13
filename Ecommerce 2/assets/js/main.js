const iconMenu = document.getElementById("btn_menu");
const iconMenuClose = document.getElementById("btn_menu_close");
const menuNavbar = document.getElementById("menu_link");
iconMenu.addEventListener("click", function () {
  iconMenu.style.display = "none";
  iconMenuClose.style.display = "block";
  menuNavbar.classList.add("menu_show");
});
iconMenuClose.addEventListener("click", function () {
  iconMenuClose.style.display = "none";
  iconMenu.style.display = "block";
  menuNavbar.classList.remove("menu_show");
});
