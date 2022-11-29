window.addEventListener('DOMContentLoaded', () => {
    let secciones = document.querySelectorAll('.features .class-f')
    for (const seccion of secciones) {
        seccion.addEventListener('mouseenter', () => {
            mover(0, 0, seccion.querySelector('h3'), seccion.querySelector('p'));
            //console.log("ENTRO")
        });
    }

    let titulos = document.querySelectorAll('.features .class-f h3');
    let parrafos = document.querySelectorAll('.features .class-f p');

    iniciar();

    function mover(cant1, cant2, e1, e2){
        for(let i = 0; i < titulos.length; i++){
            e1.style.setProperty('transform', `translateX(${cant1}%)`);
            e2.style.setProperty('transform', `translateX(${cant2}%)`);
        }
    }
    
    function iniciar(){
        let direccionMovT= "-";;
        let direccionMovP= "+";
        for (let i = 0; i < titulos.length; i++) {
            if(i >= Math.ceil(titulos.length/2)){
                direccionMovT = "+";
                direccionMovP = "-";
            }

            titulos[i].style.setProperty('transition', `0s ease-in-out`);
            parrafos[i].style.setProperty('transition', `0s ease-in-out`);
            titulos[i].style.setProperty('transform', `translateX(${direccionMovP}300%)`);
            parrafos[i].style.setProperty('transform', `translateX(${direccionMovT}300%)`);
            titulos[i].style.setProperty('transition', `0.8s ease-in-out`);
            parrafos[i].style.setProperty('transition', `0.8s ease-in-out`);
        }
    }
});