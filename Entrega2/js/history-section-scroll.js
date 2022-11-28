window.addEventListener('DOMContentLoaded', () => {
    let section = document.querySelector('.historia');
    let cont_texto = document.querySelector('.container-historia');
    let div_texto = cont_texto.querySelector('.texto-historia');

    let compStyle_h2 = getComputedStyle(cont_texto.querySelector('h2'));
    let compStyle_p = getComputedStyle(cont_texto.querySelector('p'));

    let full_text_height = parseInt(compStyle_h2.height.replace("px", '')) + parseInt(compStyle_p.height.replace("px", ''));
    cont_texto.style.height = full_text_height*3 + "px";

    let imagenes = cont_texto.getElementsByTagName('img');

    let mouse_icon = cont_texto.querySelector('.mouse-icon');

    document.addEventListener('scroll', scrollText);

    hideAllImages();

    function scrollText(event) {
        let posScroll_in_section =  document.documentElement.scrollTop - section.offsetTop;
        // posScroll >= X
        // scroll_percentage = (posScroll - X)
        let scr_height = window.screen.availHeight;
        if (posScroll_in_section >= scr_height/2
        && posScroll_in_section <= cont_texto.clientHeight - scr_height/2 - div_texto.clientHeight/2) {
            
            let cont_texto_percentage_px = (cont_texto.clientHeight) / 100;
            let text_percentage_px = div_texto.scrollHeight / 100;
            let scroll_percentage = (posScroll_in_section - scr_height/2) / cont_texto_percentage_px;
            let text_scroll_px = scroll_percentage * text_percentage_px;
            let visible_img_index;

            div_texto.style.setProperty('position', 'fixed');
            div_texto.style.setProperty('top', 20 + '%');

            mouse_icon.style.setProperty('position', 'fixed');
            mouse_icon.style.setProperty('top', 8 + '%');

            if (scroll_percentage <= 33.3) {
                visible_img_index = 0;
            } else if (scroll_percentage <= 66.6) {
                visible_img_index = 1;
            } else {
                visible_img_index = 2;
            }
            hideAllImagesExcept(visible_img_index);
            div_texto.scrollTo(0, text_scroll_px);
        } else {     
            let container_percentage = section.clientHeight / 100;
            let text_top_pos = (scr_height/2 + div_texto.clientHeight/2) / container_percentage;
            let text_bot_pos = 100 - text_top_pos;
            let mouse_top_pos = (scr_height/2 + mouse_icon.clientHeight) / container_percentage;
            let mouse_bot_pos = 100 - mouse_top_pos*1.5;
            div_texto.style.setProperty('position', 'absolute');
            mouse_icon.style.setProperty('position', 'absolute');
            if (posScroll_in_section < scr_height/2) {
                mouse_icon.style.setProperty('top', mouse_top_pos + '%');
                div_texto.style.setProperty('top', text_top_pos + "%");
            } else if (posScroll_in_section > cont_texto.clientHeight - scr_height/2 - div_texto.clientHeight/2) {
                mouse_icon.style.setProperty('top', mouse_bot_pos + '%');
                div_texto.style.setProperty('top', text_bot_pos + "%");
            }
            hideAllImages();
        }
    }

    function hideAllImagesExcept(index) {
        for (let img of imagenes) {
            img.style.setProperty("opacity", 0);
        }
        if (index != undefined) {
            imagenes[index].style.setProperty("opacity", 1);
            imagenes[index].style.setProperty("position", "fixed");
        }
    }

    function hideAllImages() {
        for (let img of imagenes) {            
            img.style.setProperty("position", "absolute");                
            img.style.setProperty("opacity", 0);
        }
    }

});