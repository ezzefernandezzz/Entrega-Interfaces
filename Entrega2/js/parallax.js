let parallax = document.getElementById('parallax-container');
let imagenes = parallax.getElementsByTagName('img');

parallax.addEventListener('mouseenter', smoothEnter);
parallax.addEventListener('mousemove', mouseMove);
parallax.addEventListener('mouseleave', resetImgPositions);

let posXOriginales = [];
let posYOriginales = [];

function smoothEnter() {
    for(let img of imagenes) {
        //img.style.setProperty('transition', 'left 0.2s linear, top 0.2s linear');
        img.style.setProperty('transition', 'all 0.2s linear');
        let compStyles = getComputedStyle(img);
        posXOriginales.push(parseInt(compStyles.left.replace("px", '')));
        posYOriginales.push(parseInt(compStyles.top.replace("px", '')));
    }

}

function mouseMove(event) {
    let x = event.clientX;
    let y = event.layerY;
    for(let i = 0; i < imagenes.length; i++) {
        let offsetX;
        let offsetY;
        //imagenes[i].style.setProperty('transition', 'left 0.1s linear, top 0.1s linear');
        imagenes[i].style.setProperty('transition', 'all 0.1s linear');
        if (i == (imagenes.length - 1)) {
            offsetX = Math.log(i) * x / 50;
            offsetY = Math.log(i) * y / 75;
            imagenes[i].style.left = (offsetX + posXOriginales[i - 1]) + "px";
            imagenes[i].style.top =  (offsetY + posYOriginales[i - 1]) + "px";
        } else {
            offsetX = Math.log(i + 1) * x / 50;
            offsetY = Math.log(i + 1) * y / 75;
            imagenes[i].style.left = (offsetX + posXOriginales[i]) + "px";
            imagenes[i].style.top =  (offsetY + posYOriginales[i]) + "px";
        }
    }
}

function resetImgPositions() {
    for (let i = 0; i < imagenes.length; i++) {
        //imagenes[i].style.setProperty('transition', 'left 1s linear, top 1s linear');
        imagenes[i].style.setProperty('transition', 'all 1s linear');
        //imagenes[i].style.setProperty('left', 0 + "px");
        //imagenes[i].style.setProperty('top', posYOriginales[i] + "px");
        if (i == (imagenes.length - 1)) {
            imagenes[i].style.left = posXOriginales[i - 1] + "px";
            imagenes[i].style.top = posYOriginales[i - 1] + "px";    
        } else {
            imagenes[i].style.left = posXOriginales[i] + "px";
            imagenes[i].style.top = posYOriginales[i] + "px";
        }
    }
}