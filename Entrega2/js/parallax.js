let parallax = document.getElementById('parallax-container');
let imagenes = parallax.getElementsByTagName('img');

parallax.addEventListener('mouseenter', smoothEnter);
parallax.addEventListener('mousemove', mouseMove);
parallax.addEventListener('mouseleave', resetImgPositions);

let posYOriginales = [];

function smoothEnter() {
    for(let img of imagenes) {
        img.style.setProperty('transition', 'all 0.2s linear');
        let compStyles = getComputedStyle(img);
        posYOriginales.push(parseInt(compStyles.top.replace("px", '')));
    }

}

function mouseMove(event) {
    let x = event.clientX;
    let y = event.layerY;
    for(let i = 0; i < imagenes.length; i++) {
        imagenes[i].style.setProperty('transition', 'all 0.1s linear');
        let offsetX =  ((i + 1) * x) / 150;
        let offsetY = Math.abs((i * y) / 250);
        //imagenes[i].style.setProperty('left', offsetX + "px");
        imagenes[i].style.left = offsetX + "px";
        //imagenes[i].style.setProperty('top', offsetY + "px");
        console.log(offsetY + posYOriginales[i] + "px");
        imagenes[i].style.top =  (offsetY + posYOriginales[i]) + "px";
    }
}

function resetImgPositions() {
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].style.setProperty('transition', 'all 1s linear');
        //imagenes[i].style.setProperty('left', 0 + "px");
        //imagenes[i].style.setProperty('top', posYOriginales[i] + "px");
        imagenes[i].style.left = "0px";
        imagenes[i].style.top = posYOriginales[i] + "px";
    }
}