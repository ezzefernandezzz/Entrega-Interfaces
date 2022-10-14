window.addEventListener('DOMContentLoaded', () => {

    /* Pop-up Compartir */
    const btn_compartir = document.querySelector('.btn-compartir')
    btn_compartir.addEventListener('click', abrirPU);

    const btn_salir = document.querySelector('.btn-close_PU')
    btn_salir.addEventListener('click', cerrarPU)

    const pop_up = document.querySelector('.pop-up')

    /* const body = document.querySelector('body') */


    const url = document.querySelector('.items-link > h1');
    
    const btn_clipboard = document.querySelector('.btn-clipboard')
    btn_clipboard.addEventListener('click', copyLink)


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

function copyLink() {
    const inputOculto = document.createElement('input');

    inputOculto.setAttribute('value', url.innerText);
    document.body.appendChild(inputOculto);
    inputOculto.select();
    document.execCommand('copy');
    document.body.removeChild(inputOculto);

    const mensaje_copy = document.querySelector('.pop-up-portapapeles')

    mensaje_copy.classList.add("mostrar-ocultar");
    setTimeout(function(){
        mensaje_copy.classList.remove("mostrar-ocultar");
    }, 2000);
    /* mensaje_copy.style.visibility = "visible"; */
    /*if (mensaje_copy.classList.contains("mostrar-ocultar")){
        mensaje_copy.classList.remove("mostrar-ocultar")
    } else {
        mensaje_copy.classList.add("mostrar-ocultar");
        //setTimeout(mensaje_copy.classList.remove("mostrar-ocultar"), 2000);
        //mensaje_copy.classList.remove("mostrar-ocultar");
    }*/
}
})