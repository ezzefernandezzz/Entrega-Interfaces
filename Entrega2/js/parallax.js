let parallax = document.getElementById('parallax-container');
let imagenes = parallax.getElementsByTagName('img');

parallax.addEventListener('mousemove', mouseMove);
parallax.addEventListener('mouseleave', resetImgPositions);

function mouseMove(event) {
    let x = event.clientX;
    let y = event.layerY;
    let baseY = 263;
    console.log(baseY);
    for(let i = 1; i < imagenes.length; i++) {
        let offsetX =  (i * x) / 150;
        let offsetY = Math.abs((i * y) / 250);
        console.log(offsetY);
        imagenes[i].style.left = offsetX + "px";
        imagenes[i].style.top = (baseY + offsetY) + "px";
    }
}

function resetImgPositions(event) {
    for (let img of imagenes) {
        img.style.setProperty('left', 0);
        img.style.setProperty('top', 263 + "px");
    }
}