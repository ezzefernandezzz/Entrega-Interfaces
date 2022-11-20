let parallax = document.getElementById('parallax-container');
let imagenes = parallax.getElementsByTagName('img');

parallax.addEventListener('mousemove', mouseMove);
parallax.addEventListener('mouseleave', resetImgPositions);

function mouseMove(event) {
    let x = event.clientX;
    let y = event.layerY;
    for(let i = 0; i < imagenes.length; i++) {
        let offsetX =  ((i + 1) * x) / 150;
        let offsetY = Math.abs((i * y) / 250);
        imagenes[i].style.left = offsetX + "px";
        imagenes[i].style.top = (offsetY) + "px";
    }
}

function resetImgPositions(event) {
    for (let img of imagenes) {
        img.style.setProperty('left', 0 + "px");
        img.style.setProperty('top', 0 + "px");
    }
}