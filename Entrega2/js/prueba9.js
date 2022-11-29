window.addEventListener('DOMContentLoaded', () => {

    document.addEventListener("scroll", prueba2);

    let nombresPersonajes = document.querySelectorAll('.card-personaje h3');
    let sect = document.querySelector('.personajes');
    let original = nombresPersonajes[0].offsetTop;


    function prueba2(){
        const scrolled = window.pageYOffset; 
        if (scrolled >= sect.offsetTop - 700 && scrolled < sect.clientHeight + sect.offsetTop){ 
            const val = (scrolled - sect.offsetTop) * 0.4;

            nombresPersonajes.forEach(personaje => {
                valor = Math.floor(30 - val);
                if(valor > -30)
                    personaje.style.top = valor + 'px';
                else
                    personaje.style.top = -30 + 'px';
            });

            console.log(val)

        }
        
    }

    function prueba(){
        let y = document.documentElement.scrollTop; 
        if (y >= sect.offsetTop && y < sect.clientHeight + sect.offsetTop){
            
            cuenta = (original - ((y - sect.offsetTop) /100));
            console.log(cuenta)
            if (cuenta < 0)
                cuenta = 0;
            
            nombresPersonajes.forEach(personaje => {
                personaje.style.top = cuenta + 'px';
            });
        }
    }

    function acercar(){
        let Y = window.scrollY * 0.001;
        /* let Y2 = document.documentElement.scrollTop;
        console.log(Y + " ----- " + Y2); */

        /* nombresPersonajes.style.left = Y * 0.01 + 'px'; */
        /* if(nombresPersonajes.offsetLeft < 0){ */
            console.log("Original : " + nombresPersonajes.offsetTop);
            console.log("Y : " + Y);
            nombresPersonajes.style.top = nombresPersonajes.offsetTop + Y + 'px';
            console.log("Modificado: " + nombresPersonajes.offsetTop)
            /* if(nombresPersonajes.offsetLeft < 0)
                console.log("Da esto: " + (nombresPersonajes.offsetLeft + Y)) */
        /* } */

        if(nombresPersonajes.offsetTop > 0)
            nombresPersonajes.style.top = 0 + "px";
        /* console.log("Y-- " + Y); */
        
    }
});