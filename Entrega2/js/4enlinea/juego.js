window.addEventListener('DOMContentLoaded', () => { 

    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    mostrarMenuInicio();
    //initGame();

    function mostrarMenuInicio() {
        canvas.addEventListener('mousedown', mouseDown);

        let botones = [];

        let boton_jugar = 
            new Boton((canvas.width - 300) / 2, (canvas.height - 80) / 2, 300, 80, "Jugar", "aquamarine");

        let boton_fill = "#22CCFF";
        let boton_fill_clicked ="#DD3333";

        let boton_tablero_4 = 
            new Boton((canvas.width - 200) / 3 - 100, canvas.offsetTop, 200, 80, "4 en Linea", boton_fill);
        let boton_tablero_5 = 
            new Boton(((canvas.width - 200) / 3) * 2 - 100, canvas.offsetTop, 200, 80, "5 en Linea", boton_fill);
        let boton_tablero_6 = 
            new Boton(((canvas.width - 200) / 3) * 3 - 100, canvas.offsetTop, 200, 80, "6 en Linea", boton_fill);

        boton_jugar.draw(ctx);
        botones.push(boton_tablero_4);
        botones.push(boton_tablero_5);
        botones.push(boton_tablero_6);

        for (let i = 0; i < botones.length; i++) {
            botones[i].draw(ctx);   
        }

        function getBotonSeleccionado() {
            for(let i = 0; i < botones.length; i++) {
                if (botones[i].isClicked)
                    return botones[i];
            }
        }

        function crearTablero(filas, columnas, x_en_linea) {
            return new Tablero(filas, columnas, x_en_linea);
        }

        function mouseDown(e) {
            let x = e.layerX - e.target.offsetLeft;
            let y = e.layerY - e.target.offsetTop;     
            if (boton_jugar.isPointInside(x,y)) {
                canvas.removeEventListener('mousedown', mouseDown);
                initGame();
            }
            for (let i = 0; i < botones.length; i++) {
                if (botones[i].isPointInside(x,y))
                    botones[i].clickButton(ctx, boton_fill_clicked);
                else
                    botones[i].unclickButton(ctx);
            }
            console.log(getBotonSeleccionado());
        }
    }

    function initGame() {
        canvas.addEventListener('mousedown', mouseDown);
        canvas.addEventListener('mouseup', mouseUp);
        canvas.addEventListener('mousemove', mouseMove);

        
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

        let jugador1 = new Jugador("Alfonso", ficha1, cantFichas / 2, ctx, "red", 0, canvas.offsetHeight);
        let jugador2 = new Jugador("Carlos", ficha2, cantFichas / 2, ctx, "blue", canvas.offsetWidth - 200, canvas.offsetHeight);

        //Al arreglo de jugadores del tablero, agrego el j1 y j2
        tablero.jugadores.push(jugador1);
        tablero.jugadores.push(jugador2);

        //Selecciono el jugador actual como el 1ero en el arreglo
        tablero.jugadorActual = tablero.jugadores[0];
        //Comienzo a descontar tiempo del jugador
        tablero.jugadorActual.iniciarReloj();

        let fichaClickeada = null;
        let coordOriginalFichaX;
        let coordOriginalFichaY;
        let isMouseDown = false; //Click izquierdo presionado

        function mouseDown(e) {
        //  console.log(e.layerX);
        //  console.log(e.clientX - canvas.offsetLeft);
            let x = e.layerX - e.target.offsetLeft;
            let y = e.layerY - e.target.offsetTop;
            for (let i = 0; i < tablero.jugadorActual.fichas.length; i++) {
                if (tablero.jugadorActual.fichas[i].isSelected(x, y)) {
                    fichaClickeada = tablero.jugadorActual.fichas[i];
                    indiceFicha = i;
                    isMouseDown = true;
                    coordOriginalFichaX = fichaClickeada.posXFicha;
                    coordOriginalFichaY = fichaClickeada.posYFicha;
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
                    } else {
                        fichaClickeada.posXFicha = coordOriginalFichaX;
                        fichaClickeada.posYFicha = coordOriginalFichaY;
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
                if (y > canvas.height || x > canvas.width || y < canvas.offsetTop || x < canvas.offsetLeft) {
                    fichaClickeada.setPos(coordOriginalFichaX, coordOriginalFichaY);
                    isMouseDown = false;
                }
            }
            clearCanvas();
            reDraw();        
        }

        setInterval(() => {
            clearCanvas();
            reDraw();
        }, 1    );

        function reDraw() {
            tablero.draw(ctx);
            tablero.jugadores[0].draw();
            tablero.jugadores[1].draw();     
        }

        function clearCanvas() {
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

    }


    
});