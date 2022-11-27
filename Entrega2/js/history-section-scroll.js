window.addEventListener('DOMContentLoaded', () => {
    let main_test = document.querySelector('main');
    let section = document.querySelector('.historia');
    let cont_texto = document.querySelector('.container-historia');
    let div_texto = cont_texto.querySelector('.texto-historia');
    let compStyle_h2 = getComputedStyle(cont_texto.querySelector('h2'));
    let compStyle_p = getComputedStyle(cont_texto.querySelector('p'));
    let full_text_height = parseInt(compStyle_h2.height.replace("px", '')) + parseInt(compStyle_p.height.replace("px", ''));
    cont_texto.style.height = full_text_height + "px";

    let imagenes = cont_texto.getElementsByTagName('img');

    document.addEventListener('scroll', scrollText);

    hideAllImages();

    function scrollText() {
        let posScroll_in_section =  document.documentElement.scrollTop - section.offsetTop;
        if (posScroll_in_section > 0 && posScroll_in_section <= cont_texto.clientHeight - imagenes[0].clientHeight) {
            let cont_texto_percentage_px = cont_texto.clientHeight / 100;
            let text_percentage_px = div_texto.scrollHeight / 100;
            let scroll_percentage = posScroll_in_section / cont_texto_percentage_px;
            let text_scroll_px = scroll_percentage * text_percentage_px;
            let visible_img_index;
            div_texto.style.setProperty('position', 'absolute');
            if (scroll_percentage >= 5 && scroll_percentage <= 85)
                div_texto.style.setProperty('top', scroll_percentage + '%');
            if (scroll_percentage < 33.3) {
                visible_img_index = 0;
            } else if (scroll_percentage < 66.6) {
                visible_img_index = 1;
            } else {
                visible_img_index = 2;
            }
            hideAllImagesExcept(visible_img_index);
            div_texto.scrollTo(0, text_scroll_px);
        } else {
            hideAllImages();
        }
    }

    function hideAllImagesExcept(index) {
        for (let img of imagenes) {
            img.style.setProperty("opacity", 0);
        }
        if (index != undefined)
            imagenes[index].style.setProperty("opacity", 1);
    }

    function hideAllImages() {
        for (let img of imagenes) {
            img.style.setProperty("opacity", 0);
        }
    }

});