window.addEventListener('DOMContentLoaded', () => {
    let main_container = document.querySelector('.galeria-screenshots');
    let container_scr = main_container.querySelector('.container-screenshots');
    let imagenes = container_scr.getElementsByTagName('img');

    let left_marker = main_container.querySelector('.left-marker');
    let right_marker = main_container.querySelector('.right-marker');
    
    let tenth_of_container = container_scr.clientWidth / 10;

    let scroll_act = container_scr.scrollLeft;
    
    show_markers();

    left_marker.addEventListener('click', () => {
        let left_scroll = -1 * tenth_of_container * 4;
        container_scr.scrollBy(left_scroll, 0);
        scroll_act += left_scroll;
        show_markers();

    });
    
    right_marker.addEventListener('click', () => {
        let right_scroll = tenth_of_container * 4;
        container_scr.scrollBy(right_scroll, 0);
        scroll_act += right_scroll;
        show_markers();
    });

    for (let img of imagenes) {
        img.addEventListener('click', () => {
            //enviar a expand_img el img src
            //y hacer un div flotante con la imagen
            //para crear la ilusion de que se agrandó
            //mover el div de la galeria no sirve porque lo quita del flujo
            //y desaparece al clickearlo
            console.log(img.src);
        });
    }

    function show_markers(scroll_pos) {
        if (scroll_act <= 0) {
            left_marker.style.setProperty('display',  'none');
            right_marker.style.setProperty('display', 'block');
        } else if (scroll_act >= container_scr.scrollWidth - container_scr.clientWidth) {
            left_marker.style.setProperty('display', 'block');
            right_marker.style.setProperty('display', 'none');            
        } else {
            left_marker.style.setProperty('display', 'block');
            right_marker.style.setProperty('display', 'block');
        }
    }

    function expand_image() {

    }
});