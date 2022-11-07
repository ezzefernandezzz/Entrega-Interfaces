window.addEventListener('DOMContentLoaded', () => { 

    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    mostrarMenuInicio();
    //initGame();

    function mostrarMenuInicio() {
        clearCanvas();
        canvas.addEventListener('mousedown', mouseDown);
        let botones = [];
        let boton_fill = "#22CCFF";
        let boton_fill_clicked ="#DD3333";
        let boton_jugar = 
                new Boton((canvas.width - (canvas.width / 4)) / 2, (canvas.height - 80) / 2, canvas.width / 4, 80, "Jugar", "aquamarine");  
        let modo_seleccionado;
        crearBotones();

        function crearBotones() { 
            let boton_tablero_4 = 
                new Boton(((canvas.width - 200) / 4) - 100, canvas.offsetTop, 160, 80, "4 en Linea", boton_fill);
            let boton_tablero_5 = 
                new Boton(((canvas.width - 200) / 4) * 2 - 100, canvas.offsetTop, 160, 80, "5 en Linea", boton_fill);
            let boton_tablero_6 = 
                new Boton(((canvas.width - 200) / 4) * 3 - 100, canvas.offsetTop, 160, 80, "6 en Linea", boton_fill);
            let boton_tablero_7 = 
                new Boton(((canvas.width - 200) / 4) * 4 - 100, canvas.offsetTop, 160, 80, "7 en Linea", boton_fill);

            boton_jugar.draw(ctx);
            botones.push(boton_tablero_4);
            botones.push(boton_tablero_5);
            botones.push(boton_tablero_6);
            botones.push(boton_tablero_7);

            for (let i = 0; i < botones.length; i++) {
                botones[i].draw(ctx);   
            }

            modo_seleccionado = botones[0]; //Default 4 en linea;
            botones[0].clickButton(ctx, boton_fill_clicked);
            boton_jugar.texto = "Jugar " + botones[0].texto;
            boton_jugar.draw(ctx);
        }

        function crearTablero() {
            switch (modo_seleccionado) {
                case botones[0]:
                    return new Tablero(7, 6, 4, canvas.width, canvas.height);
                case botones[1]:
                    return new Tablero(8, 7, 5, canvas.width, canvas.height);
                case botones[2]:
                    return new Tablero(9, 8, 6, canvas.width, canvas.height);
                case botones[3]:
                    return new Tablero(10, 9, 7, canvas.width, canvas.height);
                default:
                    return new Tablero(7, 6, 4, canvas.width, canvas.height);
            }
        }

        function mouseDown(e) {
            let x = e.layerX - e.target.offsetLeft;
            let y = e.layerY - e.target.offsetTop;     
            if (boton_jugar.isPointInside(x,y) && modo_seleccionado) {
                canvas.removeEventListener('mousedown', mouseDown);
                initGame(crearTablero());
            }
            for (let i = 0; i < botones.length; i++) {
                if (botones[i].isPointInside(x,y)) {
                    botones[i].clickButton(ctx, boton_fill_clicked);
                    modo_seleccionado = botones[i];
                    boton_jugar.texto = "Jugar " + botones[i].texto;
                    boton_jugar.draw(ctx);
                }
                else 
                    botones[i].unclickButton(ctx);
            }
        }

        function clearCanvas() {
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
    }

    function initGame(tablero) {
        canvas.addEventListener('mousedown', mouseDown);
        canvas.addEventListener('mouseup', mouseUp);
        canvas.addEventListener('mousemove', mouseMove);

        let boton_reiniciar = new Boton(canvas.width - 50, canvas.height - 50, 50, 50, "R", "#11FF11");
        let boton_menu = new Boton(canvas.width - 100, canvas.height - 50, 50, 50, "M", "#FF1111");

        let botones = [];
        botones.push(boton_reiniciar);
        botones.push(boton_menu);

        //Habria que ver de pasarle el canvas al tablero para que pueda pasarselo a las otras clases
        //Para que puedan realizar sus calculos
        //Ej: Posicion de las fichas de los jugadores
        //fichasTotales
        let cantFichas = (tablero.ancho * tablero.alto);
        
        tablero.draw(ctx);

        let sizeFichas = tablero.getSizeFichas();
       /*  console.log(sizeFichas); */


        let fichaJ1 = new Image();
        fichaJ1.src = "img/4enlinea/fichaaparecium.png";

        let fichaJ2 = new Image();
        fichaJ2.src = "img/4enlinea/fichaincendio.png";

        let jugador1 = new Jugador("Alfonso", fichaJ1, cantFichas / 2, ctx, "red", 0, canvas.offsetHeight, sizeFichas);
        let jugador2 = new Jugador("Carlos", fichaJ2, cantFichas / 2, ctx, "blue", canvas.offsetWidth - 150, canvas.offsetHeight, sizeFichas);

        tablero.jugadores.push(jugador1);
        tablero.jugadores.push(jugador2);

        //Selecciono el jugador actual como el 1ero en el arreglo
        tablero.jugadorActual = tablero.jugadores[0];
        tablero.jugadorActual.iniciarReloj();

        let fichaClickeada = null;
        let coordOriginalFichaX;
        let coordOriginalFichaY;
        let isMouseDown = false; //Click izquierdo presionado

        function mouseDown(e) {
            let x = e.layerX - e.target.offsetLeft;
            let y = e.layerY - e.target.offsetTop;
            for (let i = 0; i < tablero.jugadorActual.fichas.length; i++) {
                if (tablero.jugadorActual.fichas[i].isSelected(x, y) && tablero.jugadorActual.tiempo > 0) {
                    fichaClickeada = tablero.jugadorActual.fichas[i];
                    indiceFicha = i;
                    isMouseDown = true;
                    coordOriginalFichaX = fichaClickeada.posXFicha;
                    coordOriginalFichaY = fichaClickeada.posYFicha;
                }
            }
            if (boton_menu.isPointInside(x,y)) {
                irAlMenu();
            }
            if (boton_reiniciar.isPointInside(x,y)) {
                reiniciarJuego();
            }
        }

        function mouseUp(e) {
            isMouseDown = false;
            if (fichaClickeada != null) {
                let x = e.layerX - e.target.offsetLeft;
                let y = e.layerY - e.target.offsetTop;
                for(let i = 0; i < tablero.ancho; i++) {
                    if (tablero.indicadores[i].isPointInside(x,y) && tablero.jugadorActual.tiempo > 0) {
                        tablero.colocarFicha(fichaClickeada, i);
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
        }

        let interval_id;
        interval_id = setInterval(() => {
            clearCanvas();
            reDraw();
        }, 1    );
            
        function irAlMenu() {
            clearInterval(interval_id);
            limpiarEventos();
            mostrarMenuInicio();
        }

        function reiniciarJuego() {
            clearInterval(interval_id);
            limpiarEventos();
            initGame(new Tablero(tablero.ancho, tablero.alto, tablero.fichas_en_linea, tablero.cW, tablero.cH));
        }

        function limpiarEventos() {
            canvas.removeEventListener('mousedown', mouseDown);
            canvas.removeEventListener('mouseup', mouseUp);
            canvas.removeEventListener('mousemove', mouseMove);
        }

        function reDraw() {
            tablero.draw(ctx);
            tablero.jugadores[0].draw();
            tablero.jugadores[1].draw();     
            for(let boton of botones) {
                boton.draw(ctx);
            }
        }

        function clearCanvas() {
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

    }


    
});