const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

const prev2 = document.querySelector('.prev2')
const next2 = document.querySelector('.next2')

const slider = document.querySelector('.slider')

const slider2 = document.querySelector('.slider2')

const hambmenu = document.querySelector('.hambMenu')
hambmenu.addEventListener('click', mostrarMenu);

const btn_salir = document.querySelector('.btn-salir')
btn_salir.addEventListener('click', mostrarMenu)

let contador = 0;

/* let nombreJuego = document.querySelector(".gamecard-big img");
console.log(nombreJuego.alt)

nombreJuego.addEventListener('mouseover', () => {
    let game_card = document.querySelector(".gamecard-big")
    let overlay = document.querySelector(".overlay")

    // game_card.classList.add("overlay");
    overlay.style.width = game_card.clientWidth;


}) */

function mostrarMenu() {
    if (contador == 0){
        if(document.getElementById("menuDesplegable").classList.contains("ocultar")){
            console.log('d213123n')
            document.getElementById("menuDesplegable").classList.remove("ocultar");
        }
        document.getElementById("menuDesplegable").classList.add("mostrar");
        contador = 1;
        /*  */
        document.getElementById("overlay").style.display = "block";
        return;
    }
    else if (contador == 1){
        if(document.getElementById("menuDesplegable").classList.contains("mostrar")){
            document.getElementById("menuDesplegable").classList.remove("mostrar");
        }
        document.getElementById("menuDesplegable").classList.add("ocultar");
        contador = 0;
        /*  */
        document.getElementById("overlay").style.display = "none";
    }
    /* document.getElementById("menuDesplegable").classList.toggle("mostrar"); */
}

prev.addEventListener('click', () => {
    slider.scrollLeft -= 300
})

next.addEventListener('click', () => {
    slider.scrollLeft += 300
})


prev2.addEventListener('click', () => {
    slider2.scrollLeft -= 300
})

next2.addEventListener('click', () => {
    slider2.scrollLeft += 300
})