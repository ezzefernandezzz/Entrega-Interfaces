let parallax = document.getElementById('parallax-container');
let imagenes = parallax.getElementsByTagName('img');

parallax.addEventListener('mouseenter', smoothEnter);
parallax.addEventListener('mousemove', mouseMove);
parallax.addEventListener('mouseleave', resetImgPositions);
let posYOriginales = [];

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