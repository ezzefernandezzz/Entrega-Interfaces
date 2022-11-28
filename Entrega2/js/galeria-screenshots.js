window.addEventListener('DOMContentLoaded', () => {

    //Obtengo el body para settear su overflow en hidden y evitar que se pueda scrollear mientras este
    //el overlay abierto
    let body = document.querySelector('body');

    let main_container = document.querySelector('.galeria-screenshots');
    let container_scr = main_container.querySelector('.container-screenshots');
    let imagenes = container_scr.getElementsByTagName('img');

    let left_marker = main_container.querySelector('.left-marker');
    let right_marker = main_container.querySelector('.right-marker');
    
    let tenth_of_container = container_scr.clientWidth / 10;

    let scroll_act = container_scr.scrollLeft;

    let delay = 40;
    
    show_markers();


    left_marker.addEventListener('click', () => {
        let left_scroll = -1 * tenth_of_container * 4;
        container_scr.scrollBy(left_scroll, 0);
        scroll_act += left_scroll;
        set_anim();
        remove_anim();
        show_markers();
    });
    
    right_marker.addEventListener('click', () => {
        let right_scroll = tenth_of_container * 4;
        container_scr.scrollBy(right_scroll, 0);
        scroll_act += right_scroll;
        set_anim();
        remove_anim();
        show_markers();
    });

    for (let img of imagenes) {
        img.addEventListener('click', expand_image);
    }

    function show_markers() {
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

    let overlay = main_container.querySelector('#overlay');
    let big_img_container = main_container.querySelector('.big-img-container');

    overlay.style.setProperty('background-color', 'rgba(0,0,0,0.75)');
    overlay.style.setProperty('transition', 'opacity 0.3s ease');
    overlay.style.setProperty('opacity', 0);
    overlay.style.setProperty('z-index', 4);

    overlay.addEventListener('click', () => {
        overlay.style.setProperty('opacity', 0);        
        big_img_container.style.setProperty('opacity', 0);
        body.style.setProperty('overflow-y', 'auto');
        setTimeout(() => {
            overlay.style.setProperty('display', 'none');
            big_img_container.style.setProperty('display', 'none');
        }, 300);
    });

    function expand_image(event) {
        big_img_container.src = this.src;
        setTimeout(() => {
            overlay.style.setProperty('opacity', 1);
            big_img_container.style.setProperty('opacity', 1);
        }, 0);
        overlay.style.setProperty('display', 'block');
        big_img_container.style.setProperty('display', 'block');
        body.style.setProperty('overflow-y', 'hidden');
    }

    //Auto-anim
    let interval_id = start_auto_scroll();
    
    container_scr.addEventListener('mouseenter', stop_interval);
    left_marker.addEventListener('mouseenter', stop_interval);
    right_marker.addEventListener('mouseenter', stop_interval);
    
    container_scr.addEventListener('mouseleave', restart_interval);
    left_marker.addEventListener('mouseleave', restart_interval);
    right_marker.addEventListener('mouseleave', restart_interval);

    function restart_interval() {
        interval_id = start_auto_scroll();
    }

    function stop_interval() {
        clearInterval(interval_id);
    }

    function start_auto_scroll() {
        return setInterval(() => {
            set_anim();
            remove_anim();
            scroll_act += tenth_of_container * 4;
            container_scr.scrollBy(tenth_of_container * 4, 0);
            if (container_scr.scrollLeft >= container_scr.scrollWidth - container_scr.clientWidth) {
                container_scr.scrollLeft = 0;
                scroll_act = 0;
            };
            show_markers();
        }, 4000);
    };

    function stop_auto_scroll(id) {
        clearInterval(id);
    };

    function set_anim() {
        for (let i = 0; i < imagenes.length; i++) {
            setTimeout(() => {
                imagenes[i].style.setProperty("animation", "screenshot-transform 0.5s forwards linear");                    
            }, i * delay);
        }
    }

    function remove_anim() {
        for (let i = 0; i < imagenes.length; i++) {
            setTimeout(() => {
                imagenes[i].style.removeProperty('animation');
            }, i * delay + 500);
        }
    }
    //End auto-anim


});