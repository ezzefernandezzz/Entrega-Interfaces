window.addEventListener('DOMContentLoaded', () => {

    /* Pop-up Compartir */
    const btn_compartir = document.querySelector('.btn-compartir')
    btn_compartir.addEventListener('click', abrirPU);

    const btn_salir = document.querySelector('.btn-close_PU')
    btn_salir.addEventListener('click', cerrarPU)

    const pop_up = document.querySelector('.pop-up')

    const body = document.querySelector('body')


function abrirPU() {
    pop_up.style.width = '786px';
    document.getElementById("overlay").style.display = "block";
    document.body.style.overflow = "hidden";
}

function cerrarPU() {
    pop_up.style.width = '0px';
    document.getElementById("overlay").style.display = "none";
    document.body.style.overflow = "visible";
}
})