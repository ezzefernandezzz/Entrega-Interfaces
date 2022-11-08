window.addEventListener('DOMContentLoaded', () => { 
    let boton_jugar = document.getElementById('boton-jugar');
    boton_jugar.addEventListener('mousedown', iniciarJuego);

    let canvas_juego = document.getElementById('myCanvas');

    function iniciarJuego() {
        console.log("aaa");
        canvas_juego.classList.remove("z-index-min");
    }
});