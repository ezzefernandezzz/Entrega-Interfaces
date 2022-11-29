// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};
//Hago el llamado a la funcion desde el LOADER.js una vez que desaparecio la pantalla de carga

// Get the header
var header = document.getElementById("head");
let contenedorLogo = document.querySelector(".logo-container");
let btn_burger = document.querySelector(".btn-burger");
let btn_header = document.querySelector(".btn-header");
let main = document.querySelector("main");

/* let btn_burger = document.getElementById("btn-burger") */

// Get the offset position of the navbar
var sticky = header.offsetTop;

/* console.log(main) */

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  /* console.log("ta escondido"); */
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    contenedorLogo.classList.add("stick");
    btn_burger.classList.add("stick");
    btn_header.classList.add("stick");
    main.classList.add("stick");
  } else {
    header.classList.remove("sticky");
    contenedorLogo.classList.remove("stick");
    btn_burger.classList.remove("stick");
    btn_header.classList.remove("stick");
    main.classList.remove("stick");
  }
}