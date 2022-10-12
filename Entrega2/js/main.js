const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

const prev2 = document.querySelector('.prev2')
const next2 = document.querySelector('.next2')

const slider = document.querySelector('.slider')

const slider2 = document.querySelector('.slider2')

const hambmenu = document.querySelector('.hambMenu')
hambmenu.addEventListener('click', mostrarMenu);

let contador = 0;

function mostrarMenu() {
    console.log('dajsjsfan')
    if (contador == 0){
        if(document.getElementById("menuDesplegable").classList.contains("ocultar")){
            console.log('d213123n')
            document.getElementById("menuDesplegable").classList.remove("ocultar");
        }
        document.getElementById("menuDesplegable").classList.add("mostrar");
        contador = 1;
        return;
    }
    else if (contador == 1){
        if(document.getElementById("menuDesplegable").classList.contains("mostrar")){
            document.getElementById("menuDesplegable").classList.remove("mostrar");
        }
        document.getElementById("menuDesplegable").classList.add("ocultar");
        contador = 0;
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