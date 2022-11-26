window.addEventListener('DOMContentLoaded', () => {

    let cont_texto = document.querySelector('.container-historia');
    let div_texto = cont_texto.querySelector('.texto-historia');
    let og_div_offset = div_texto.offsetTop;
    let compStyle_h2 = getComputedStyle(cont_texto.querySelector('h2'));
    let compStyle_p = getComputedStyle(cont_texto.querySelector('p'));
    let full_text_height = parseInt(compStyle_h2.height.replace("px", '')) + parseInt(compStyle_p.height.replace("px", ''));
    cont_texto.style.height = full_text_height + "px";

    let imagenes = cont_texto.getElementsByTagName('img');

    document.addEventListener('scroll', scrollText);

    function scrollText(event) {
        let posScroll = document.documentElement.scrollTop;
        if (posScroll >= cont_texto.offsetTop && posScroll <= cont_texto.clientHeight + cont_texto.offsetTop) {
            let posScroll_in_section = posScroll - og_div_offset;
            if (posScroll_in_section > 0) {
                let pos_percentage = (posScroll - div_texto.offsetTop) / 10;
                div_texto.style.setProperty('position', 'sticky');
                div_texto.style.setProperty('top', pos_percentage + "%");
                let cont_texto_percentage_px = cont_texto.clientHeight / 100;
                let text_percentage_px = (div_texto.scrollHeight / 100);
                let scroll_percentage = posScroll_in_section / cont_texto_percentage_px;
                let text_scroll_px = scroll_percentage * text_percentage_px;
                let visible_img_number;
                if (scroll_percentage < 33.3) {
                    visible_img_number = 0;
                } else if (scroll_percentage < 66.6) {
                    visible_img_number = 1;
                } else if (scroll_percentage <= 100) {
                    visible_img_number = 2;
                }
                hideAllImagesExcept(visible_img_number);
                div_texto.scrollTo(0, text_scroll_px);
            }
        } else
            hideAllImages();
    }

    function hideAllImagesExcept(index) {
        for (let img of imagenes) {
            img.style.setProperty("opacity", 0);
        }
        imagenes[index].style.setProperty("opacity", 1);
    }

    function hideAllImages() {
        for (let img of imagenes) {
            img.style.setProperty("opacity", 0);
        }
    }

});