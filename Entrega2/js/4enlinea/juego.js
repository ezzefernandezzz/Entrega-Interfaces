window.addEventListener('DOMContentLoaded', () => { 

    let canvas = document.getElementById("myCanvas");
    //console.log(canvas);
    canvas.addEventListener('mousedown', mouseDown);
    canvas.addEventListener('mouseup', mouseUp);
    canvas.addEventListener('mousemove', mouseMove);


    let ctx = canvas.getContext("2d");
    let ficha1 = new Image();
    ficha1.src = "img/iconos/perfil.png";
    let ficha2 = new Image();
    ficha2.src = "img/iconos/icono moneda.png";

    //instancia tablero
    let tablero = new Tablero(7, 6, 4); 
    //fichasTotales
    let cantFichas = (tablero.ancho * tablero.alto);
    //instancia jugadores
    let jugador1 = new Jugador("Alfonso", ficha1, cantFichas / 2, ctx);
    let jugador2 = new Jugador("Carlos", ficha2, cantFichas / 2, ctx);
    tablero.jugadores.push(jugador1);
    tablero.jugadores.push(jugador2);
    tablero.jugadorActual = tablero.jugadores[0];

    tablero.draw(ctx);

    function mouseDown(e) {
        console.log(e);
        let x = e.layerX - e.target.offsetLeft;
        let y = e.layerY - e.target.offsetTop;
        console.log(x);
        console.log(y);
    }

    function mouseUp(e) {

    }

    function mouseMove(e) {
    }
    /* console.log(tablero);

    console.log(jugador1);
    console.log(jugador2); */

    /* Jugada ganadora Jugador1 horizontal
    tablero.colocarFicha(0);
    tablero.colocarFicha(0);
    tablero.colocarFicha(1);
    tablero.colocarFicha(0);
    console.log(tablero.colocarFicha(2));
    tablero.colocarFicha(0);
    console.log(tablero.colocarFicha(3));
    */

    /* Jugada ganadora Jugador1 vertical
    tablero.colocarFicha(0);
    tablero.colocarFicha(1);
    tablero.colocarFicha(0);
    tablero.colocarFicha(2);
    console.log(tablero.colocarFicha(0));
    tablero.colocarFicha(3);
    console.log(tablero.colocarFicha(0));
    tablero.colocarFicha(5); */

    tablero.colocarFicha(3); //1
    tablero.colocarFicha(2);
    tablero.colocarFicha(2); //1
    tablero.colocarFicha(1); 
    tablero.colocarFicha(1); //1
    tablero.colocarFicha(0);
    tablero.colocarFicha(1); //1
    tablero.colocarFicha(0);
    console.log(tablero.colocarFicha(0)); //1
    tablero.colocarFicha(6);
    console.log(tablero.colocarFicha(0)); //1
    

    
    


    console.log(tablero.tablero);


    /*
    tablero.tablero[0][0].ficha = fichaTest;
    console.log(tablero.tablero[0][0].ficha);
    tablero.tablero[0][5].ficha = fichaTest;
    console.log(tablero.tablero[0][5].ficha);
    */
    
});