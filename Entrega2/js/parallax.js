window.addEventListener('DOMContentLoaded', () => {

    //Parallax
    let parallax = document.getElementById('parallax-container');
    let imagenes = parallax.getElementsByClassName('prx');
    
    parallax.addEventListener('mouseenter', smoothEnter);
    parallax.addEventListener('mousemove', mouseMove);
    parallax.addEventListener('mouseleave', resetImgPositions);
    let posYOriginales = [];

    let logo = document.getElementById("game-logo");
        
    inicialY = logo.offsetTop;
    inicialX = logo.offsetLeft;
    /* console.log(inicial); */

    window.addEventListener('scroll', function(){
        var value = window.scrollY;
        logo.style.top = inicialY + value * 0.7 + 'px';
        logo.style.left = inicialX + value * 0.2 + 'px'; //opcional
    });
    
    function smoothEnter() {
        for(let img of imagenes) {
            img.style.setProperty('transition', 'left 0.2s linear, top 0.2s linear');
            let compStyles = getComputedStyle(img);
            posYOriginales.push(parseInt(compStyles.top.replace("px", '')));
        }
    
    }
    
    function mouseMove(event) {
        let x = event.clientX;
        let y = event.layerY;
        for(let i = 0; i < imagenes.length; i++) {
            imagenes[i].style.setProperty('transition', 'left 0.1s linear, top 0.1s linear');
            let offsetX = x * Math.pow(i, 1.5) / 300;
            let offsetY = y * Math.pow(i, 1.5) / 600;
            imagenes[i].style.left = offsetX + "px";
            imagenes[i].style.top =  (offsetY + posYOriginales[i]) + "px";
        }
    }
    
    function resetImgPositions() {
        for (let i = 0; i < imagenes.length; i++) {
            imagenes[i].style.setProperty('transition', 'left 1s linear, top 1s linear');
            imagenes[i].style.top = posYOriginales[i] + "px";
        }
    }
    //Fin Parallax

    //Ojo Inferno Trooper
    let boton_preordenar = document.querySelector('.boton-pre-ordenar');
    let inferno_trooper = document.querySelector('.inferno-trooper');
    boton_preordenar.addEventListener('mouseenter', () => {
        inferno_trooper.style.setProperty('opacity', 0);
    });
    boton_preordenar.addEventListener('mouseleave', () => {
        inferno_trooper.style.setProperty('opacity', 1);
    });
    
});
