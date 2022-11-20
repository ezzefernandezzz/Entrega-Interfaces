// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("head");
let contenedorLogo = document.querySelector(".logo-container")
let btn_burger = document.querySelector(".btn-burger")
let btn_header = document.querySelector(".btn-header")

/* let btn_burger = document.getElementById("btn-burger") */

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    contenedorLogo.classList.add("stick");
    btn_burger.classList.add("stick");
    btn_header.classList.add("stick");
  } else {
    header.classList.remove("sticky");
    contenedorLogo.classList.remove("stick");
    btn_burger.classList.remove("stick");
    btn_header.classList.remove("stick");
  }
}