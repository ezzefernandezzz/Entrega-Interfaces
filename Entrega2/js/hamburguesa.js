window.addEventListener('DOMContentLoaded', () => {
    /* Menu-hamburguesa */
    const hambmenu = document.querySelector('.hambMenu')
    hambmenu.addEventListener('click', mostrarMenu);

    const btn_salir = document.querySelector('.btn-salir')
    btn_salir.addEventListener('click', mostrarMenu)

    let contador = 0;

    function mostrarMenu() {
        /* Es posible acortar el code ya que debido al z-index no lo puede cerrar tocando de nuevo el menu */
        if (contador == 0){
            if(document.getElementById("menuDesplegable").classList.contains("ocultar")){
                document.getElementById("menuDesplegable").classList.remove("ocultar");
            }
            document.getElementById("menuDesplegable").classList.add("mostrar");
            contador = 1;
            /*  */
            document.getElementById("overlay").style.display = "block";
            document.body.style.overflow = "hidden";
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
            document.body.style.overflow = "visible";
        }
    }
})