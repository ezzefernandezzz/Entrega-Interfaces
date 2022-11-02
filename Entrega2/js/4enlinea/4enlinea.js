window.addEventListener('DOMContentLoaded', () => { 

    let fichaTest = new Ficha("alfajor");
    let fichaTest2 = new Ficha("sanguche");
    let casillaTest = new Casilla();
    let jugadorTest = new Jugador("Alfonso", "../img/iconos/perfil.png");
    let tablero = new Tablero(7, 6);

    console.log(fichaTest);
    console.log(fichaTest2);

    tablero.colocarFicha(fichaTest, 0);
    tablero.colocarFicha(fichaTest2, 0);

    console.log(tablero.tablero);


    /*
    tablero.tablero[0][0].ficha = fichaTest;
    console.log(tablero.tablero[0][0].ficha);
    tablero.tablero[0][5].ficha = fichaTest;
    console.log(tablero.tablero[0][5].ficha);
    */
    
    
});