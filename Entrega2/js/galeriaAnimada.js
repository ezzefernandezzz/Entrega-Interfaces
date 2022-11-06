window.addEventListener('DOMContentLoaded', () => {
    
    let galeria = document.querySelector('.slide-track')

    let contenedorImg = document.querySelectorAll('.contenedor-multimedia')
    console.log(contenedorImg)

    contenedorImg.forEach(element => {
        /* element.addEventListener('click', mensaje); */
        element.addEventListener('mouseout', mensaje)
        element.addEventListener('mouseover', mensaje)
    });

    /* let contenedorImg = document.querySelector('.galeria-imagenes .contenedor-multimedia') */

    function mensaje(){
        console.log("Mouse arriba")
        galeria.classList.toggle("paused"); //se pausa la animacion de la galeria
        //agrando la imagen sobre la que esta parado
    }

})