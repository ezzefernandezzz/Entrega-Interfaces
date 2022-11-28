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

    //Auto-anim
    let interval_id = start_auto_scroll();

    container_scr.addEventListener('mouseleave', () => {
        interval_id = start_auto_scroll();
    });
    container_scr.addEventListener('mouseenter', () => {
        stop_auto_scroll(interval_id);
    });

    function start_auto_scroll() {
        return setInterval(() => {
            for (let img of imagenes) {
                img.style.setProperty("animation", "carousel-bounce 0.7s forwards ease-in-out");
            }
            setTimeout(() => {
                for (let img of imagenes) {
                    img.style.removeProperty("animation");
                }
            }, 700);
            scroll_act += tenth_of_container * 4;
            container_scr.scrollBy(tenth_of_container * 4, 0);
            if (container_scr.scrollLeft >= container_scr.scrollWidth - container_scr.clientWidth) {
                container_scr.scrollLeft = 0;
            };
        }, 4000);
    };

    function stop_auto_scroll(id) {
        clearInterval(id);
    };
    //End auto-anim

});