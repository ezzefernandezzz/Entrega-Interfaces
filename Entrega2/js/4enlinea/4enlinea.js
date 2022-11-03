window.addEventListener('DOMContentLoaded', () => { 

    let tablero = new Tablero(7, 6, 4);
    let jugador1 = new Jugador("Alfonso", "../img/iconos/perfil.png", (tablero.ancho * tablero.alto) / 2);
    let jugador2 = new Jugador("Carlos", "../img/iconos/moneda.jpg", (tablero.ancho * tablero.alto) / 2);
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