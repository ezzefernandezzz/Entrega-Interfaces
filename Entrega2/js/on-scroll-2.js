window.addEventListener('DOMContentLoaded', () => {
    let cont_texto = document.querySelector('.container-historia');
    let div_texto = cont_texto.querySelector('.texto-historia');
    let og_div_offset = div_texto.offsetTop;
    let compStyle_div = getComputedStyle(div_texto);
    let compStyle_h2 = getComputedStyle(cont_texto.querySelector('h2'));
    let compStyle_p = getComputedStyle(cont_texto.querySelector('p'));
    let full_text_height = parseInt(compStyle_h2.height.replace("px", '')) + parseInt(compStyle_p.height.replace("px", ''));
    cont_texto.style.setProperty('height', full_text_height + "px");
    document.addEventListener('scroll', isTextoVisibible);

    function isTextoVisibible(event) {
        let posScroll = document.documentElement.scrollTop;
        if (posScroll >= cont_texto.offsetTop && posScroll <= cont_texto.clientHeight + cont_texto.offsetTop) {
            let posScroll_in_section = posScroll - og_div_offset;
            if (posScroll_in_section > 0) {
                let pos_percentage = (posScroll - div_texto.offsetTop) / 10;
                div_texto.style.setProperty('position', 'sticky');
                div_texto.style.setProperty('top', pos_percentage + "%");
                let cont_texto_percentage = cont_texto.clientHeight / 100;
                console.log((posScroll_in_section) / cont_texto_percentage);
                let text_percentage_px = (div_texto.scrollHeight / 100);
                let scroll_percentage = (posScroll_in_section / cont_texto_percentage) * text_percentage_px;
                div_texto.scrollTo(0, scroll_percentage);
            }
        }
    }

});