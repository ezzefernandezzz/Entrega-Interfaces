window.addEventListener('DOMContentLoaded', () => { 

    let canvas = document.getElementById("myCanvas");
    console.log(canvas);
    let ctx = canvas.getContext("2d");

    //instancia tablero
//    let tablero = new Tablero(7, 6, 4); 
    let tablero = new Tablero(ctx, canvas.offsetWidth, canvas.offsetHeight, 4); 
    //fichasTotales
    let cantFichas = (tablero.ancho * tablero.alto);
    //instancia jugadores
    let jugador1 = new Jugador("Alfonso", "../img/iconos/perfil.png", cantFichas / 2);
    let jugador2 = new Jugador("Carlos", "../img/iconos/moneda.jpg", cantFichas / 2);
    tablero.jugadores.push(jugador1);
    tablero.jugadores.push(jugador2);
    tablero.jugadorActual = tablero.jugadores[0];

    console.log(tablero);

    console.log(jugador1);
    console.log(jugador2);

    tablero.colocarFicha(jugador1.fichas.pop(), 0);
    tablero.colocarFicha(jugador2.fichas.pop(), 0);
    

    console.log(tablero.tablero);


    /*
    tablero.tablero[0][0].ficha = fichaTest;
    console.log(tablero.tablero[0][0].ficha);
    tablero.tablero[0][5].ficha = fichaTest;
    console.log(tablero.tablero[0][5].ficha);
    */
    
});