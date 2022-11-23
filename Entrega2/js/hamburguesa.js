window.addEventListener('DOMContentLoaded', () => {
    /* Menu-hamburguesa */
    const hambmenu = document.querySelector('.btn-burger')
    hambmenu.addEventListener('click', mostrarMenu);
    const elems_hamb_menu = document.querySelectorAll('.menu-hamburguesa div');

    /* const btn_salir = document.querySelector('.btn-salir')
    btn_salir.addEventListener('click', mostrarMenu) */

    let isVisible = false;

    function mostrarMenu() {
        document.querySelector(".btn-burger").classList.toggle("visible_menu");

        let x = window.scrollY;
        let headerHeight = document.getElementById('head').clientHeight;
        console.log(headerHeight);
        document.getElementById("menuDesplegable").style.top= x + headerHeight + "px";

        /* Es posible acortar el code ya que debido al z-index no lo puede cerrar tocando de nuevo el menu */
        if (!isVisible){
            if(document.getElementById("menuDesplegable").classList.contains("ocultar")){
                document.getElementById("menuDesplegable").classList.remove("ocultar");
            }
            document.getElementById("menuDesplegable").classList.add("mostrar");
            isVisible = true;
            for(let i = 0; i < elems_hamb_menu.length; i++) {
                let delay_anim = 600 + 60 * i;
                let anim_value = "left-slide-in " + delay_anim + "ms ease-in-out forwards";
                elems_hamb_menu[i].style.setProperty("animation", anim_value);
            }
            /*for (const elem of elems_hamb_menu) {
                elem.style.setProperty("animation", "left-slide-in 600ms ease-in-out forwards");
            }*/
            document.getElementById("overlay").style.display = "block";
            document.body.style.overflow = "hidden";
            return;
        }
        else if (isVisible){
            if(document.getElementById("menuDesplegable").classList.contains("mostrar")){
                document.getElementById("menuDesplegable").classList.remove("mostrar");
            }
            document.getElementById("menuDesplegable").classList.add("ocultar");
            isVisible = false;
            for (const elem of elems_hamb_menu) {
                elem.style.removeProperty("animation");
            }
            document.getElementById("overlay").style.display = "none";
            document.body.style.overflow = "visible";
        }
        
    }
})