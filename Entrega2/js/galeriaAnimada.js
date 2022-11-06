window.addEventListener('DOMContentLoaded', () => {
    
    let galeria = document.querySelector('.slide-track')

    let contenedorImg = document.querySelector('.contenedor-multimedia')

    /* let contenedorImg = document.querySelector('.galeria-imagenes .contenedor-multimedia') */


    contenedorImg.addEventListener('click', mensaje);
    contenedorImg.addEventListener('mouseout', mensaje)
    contenedorImg.addEventListener('mouseover', mensaje)

    function mensaje(){
        console.log("Mouse arriba")
        galeria.classList.toggle("paused"); //se pausa la animacion de la galeria
        //agrando la imagen sobre la que esta parado
    }

})