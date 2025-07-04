var updateElement = document.querySelector(".menu-icon");
var sideMenu = document.querySelector(".side-menu");

function toggleNav() {
    updateElement.classList.toggle("open");
    sideMenu.classList.toggle("open");
}     

updateElement.addEventListener("click", toggleNav);

console.log("working")