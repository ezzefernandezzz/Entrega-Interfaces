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
    tablero.draw(ctx);
    let jugador1 = new Jugador("Alfonso", ficha1, cantFichas / 2, ctx, "red");
    let jugador2 = new Jugador("Carlos", ficha2, cantFichas / 2, ctx, "blue");
    tablero.jugadores.push(jugador1);
    tablero.jugadores.push(jugador2);
    tablero.jugadorActual = tablero.jugadores[0];

    let fichaClickeada = null;
    let indiceFicha = -1;
    let isMouseDown = false;

    function mouseDown(e) {
        let x = e.layerX - e.target.offsetLeft;
        let y = e.layerY - e.target.offsetTop;
        for (let i = 0; i < tablero.jugadorActual.fichas.length; i++) {
            if (tablero.jugadorActual.fichas[i].isSelected(x, y)) {
                fichaClickeada = tablero.jugadorActual.fichas[i];
                indiceFicha = i;
                isMouseDown = true;
            }
        }
    }

    //TO DO: ver vid de javi para lo del isMouseDown = false y toda la bola
    function mouseUp(e) {
        isMouseDown = false;
        if (fichaClickeada != null) {
            let x = e.layerX - e.target.offsetLeft;
            let y = e.layerY - e.target.offsetTop;
            for(let i = 0; i < tablero.ancho; i++) {
                if (tablero.indicadores[i].isPointInside(x,y)) {
                    tablero.colocarFicha(fichaClickeada, i);
                    //tablero.jugadorActual.fichas.splice(tablero.jugadorActual.fichas.indexOf(fichaClickeada), 1);
                    if (tablero.jugadores[0].fichas.includes(fichaClickeada))
                        tablero.jugadores[0].fichas.splice(tablero.jugadores[0].fichas.indexOf(fichaClickeada), 1);
                    else
                        tablero.jugadores[1].fichas.splice(tablero.jugadores[1].fichas.indexOf(fichaClickeada), 1); 

                }
            }
            fichaClickeada = null;

        }
    }

    function mouseMove(e) {   
        if (isMouseDown && fichaClickeada != null) {               
            let x = e.layerX - e.target.offsetLeft;
            let y = e.layerY - e.target.offsetTop;
            fichaClickeada.setPos(x, y);
        }
        clearCanvas();
        reDraw();
        
    }

    function reDraw() {
        tablero.draw(ctx);
        tablero.jugadores[0].draw();
        tablero.jugadores[1].draw();     
    }

    function clearCanvas() {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
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

    /* jugada ganadora j1 diagonal
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
    */

    //console.log(tablero.tablero);

    /*
    tablero.tablero[0][0].ficha = fichaTest;
    console.log(tablero.tablero[0][0].ficha);
    tablero.tablero[0][5].ficha = fichaTest;
    console.log(tablero.tablero[0][5].ficha);
    */
    
});