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
    //Habria que ver de pasarle el canvas al tablero para que pueda pasarselo a las otras clases
    //Para que puedan realizar sus calculos
    //Ej: Posicion de las fichas de los jugadores
    let tablero = new Tablero(7, 6, 4); 
    //fichasTotales
    let cantFichas = (tablero.ancho * tablero.alto);
    
    tablero.draw(ctx);  //Dibujo el tablero

    //Instancia jugadores con mitad de fichas para cada 1

    let jugador1 = new Jugador("Alfonso", ficha1, cantFichas / 2, ctx, "red");
    let jugador2 = new Jugador("Carlos", ficha2, cantFichas / 2, ctx, "blue");

    //Al arreglo de jugadores del tablero, agrego el j1 y j2
    tablero.jugadores.push(jugador1);
    tablero.jugadores.push(jugador2);

    //Selecciono el jugador actual como el 1ero en el arreglo
    tablero.jugadorActual = tablero.jugadores[0];

    let fichaClickeada = null;
    let indiceFicha = -1;
    let isMouseDown = false;

    function mouseDown(e) {
        console.log(e.layerX);
    //    console.log(e.clientX - canvas.offsetLeft);
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

    function mouseUp(e) {
        isMouseDown = false;
        if (fichaClickeada != null) {
            let x = e.layerX - e.target.offsetLeft;
            let y = e.layerY - e.target.offsetTop;
            for(let i = 0; i < tablero.ancho; i++) {
                if (tablero.indicadores[i].isPointInside(x,y)) {
                    tablero.colocarFicha(fichaClickeada, i);
                    //Esto deberia funcionar de forma similar al if pero elimina otras fichas que no son
                    //las seleccionadas por alguna razon
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
    
});