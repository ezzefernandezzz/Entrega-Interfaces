let parallax = document.getElementById('parallax-container');
let imagenes = parallax.getElementsByTagName('img');

parallax.addEventListener('mousemove', mouseMove);
parallax.addEventListener('mouseleave', resetImgPositions);

function mouseMove(event) {
    let x = event.clientX;
    let y = event.layerY;
    console.log(x);
    for(let i = 1; i < imagenes.length; i++) {
        let offsetX =  (i * x) / 150;
        console.log(offsetX);
        imagenes[i].style.left = offsetX + "px";
    }
}

function resetImgPositions() {
    for (let img of imagenes) {
        img.style.setProperty('left', 0);
    }
}