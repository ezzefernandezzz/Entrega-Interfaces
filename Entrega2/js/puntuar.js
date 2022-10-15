window.addEventListener('DOMContentLoaded', () => {
    
    estrellas = document.getElementsByClassName('estrella-puntuar');
    estrella_hover_url = "../img/iconos/estrella-hover.png";
    estrella_normal_url = "../img/iconos/estrella-normal.png";
    estrella_active_url = "../img/iconos/estrella-active.png";

    console.log(estrellas);
    for(let i = 0; i < estrellas.length; i++) {
        estrellas[i].addEventListener('mouseover', () => {
            if (!estrellas[i].classList.contains('puntuado'))
            for(let j = 0; j <= i; j++) {
                estrellas[j].src = estrella_hover_url;
            }
        });
        estrellas[i].addEventListener('mouseout', () => {
            if (!estrellas[i].classList.contains('puntuado'))
            for(let j = 0; j <= i; j++) {
                estrellas[j].src = estrella_normal_url;
            }
        })
        estrellas[i].addEventListener('mousedown', () => {
            for(let j = 0; j <= i; j++) {
                estrellas[j].src = estrella_active_url;
                estrellas[j].classList.add('puntuado');
            }
        });
    }

});