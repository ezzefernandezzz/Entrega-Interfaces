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
        let boton_jugar;
        let modo_seleccionado;
        let fichas_j1 = [];
        let fichas_j2 = [];
        crearBotones();
        dibujarTexto()
        dibujarSeleccionFichas();
        let ficha_j1_seleccionada = fichas_j1[0].imagen;
        let ficha_j2_seleccionada = fichas_j2[0].imagen;

        function dibujarSeleccionFichas() {
            let hechizo_aparecium = new Image();
            hechizo_aparecium.src = "img/4enlinea/fichaaparecium.png";
            let hechizo_silencio = new Image();
            hechizo_silencio.src = "img/4enlinea/fichasilencio.png";
            let hechizo_aguamenti = new Image();
            hechizo_aguamenti.src = "img/4enlinea/fichaaguamenti.png";
            let hechizo_incendio = new Image();
            hechizo_incendio.src =  "img/4enlinea/fichaincendio.png";
            let hechizo_alohomora = new Image();
            hechizo_alohomora.src =  "img/4enlinea/fichaalohomora.png";
            let hechizo_ascendio = new Image();
            hechizo_ascendio.src =  "img/4enlinea/fichaascendio.png";
            let ficha_muestra1 = new Ficha(hechizo_aparecium, "red", 110, canvas.height / 2, 26);
            let ficha_muestra2 = new Ficha(hechizo_incendio, "red", 110 + 30 * 2, canvas.height / 2, 26);
            let ficha_muestra3 = new Ficha(hechizo_alohomora, "red", 110 + 30 * 4, canvas.height / 2, 26);
            let ficha_muestra4 = new Ficha(hechizo_silencio, "blue", canvas.width - 110, canvas.height / 2, 26);
            let ficha_muestra5 = new Ficha(hechizo_ascendio, "blue", canvas.width - 110 - 30 * 2, canvas.height / 2, 26);
            let ficha_muestra6 = new Ficha(hechizo_aguamenti, "blue", canvas.width - 110 - 30 * 4, canvas.height / 2, 26);
            hechizo_aparecium.onload = function() {ficha_muestra1.draw(ctx);}
            hechizo_incendio.onload = function() {ficha_muestra2.draw(ctx);}
            hechizo_alohomora.onload = function() {ficha_muestra3.draw(ctx);}
            hechizo_silencio.onload = function() {ficha_muestra4.draw(ctx);}
            hechizo_ascendio.onload = function() {ficha_muestra5.draw(ctx);}
            hechizo_aguamenti.onload = function() {ficha_muestra6.draw(ctx);}

            fichas_j1.push(ficha_muestra1); fichas_j1.push(ficha_muestra2); fichas_j1.push(ficha_muestra3);
            fichas_j2.push(ficha_muestra4); fichas_j2.push(ficha_muestra5); fichas_j2.push(ficha_muestra6);

        }

        function dibujarTexto() {
            ctx.textAlign = "center";
            ctx.font = "48px monospace";
            ctx.fillText("Harry Potter vs Voldemort", canvas.width / 2, canvas.offsetTop + 36);
            ctx.fillText("4 en linea", canvas.width / 2, canvas.offsetTop + 48 + 36);

            ctx.textAlign = "left";
            ctx.font = "36px monospace";
            ctx.fillText("Jugador 1", 80, canvas.offsetTop + 48 * 3);

            ctx.textAlign = "right";
            ctx.fillText("Jugador 2", canvas.width - 80, canvas.offsetTop + 48 * 3);
        }

        function crearBotones() { 
            let h_boton_t = canvas.height / 10;
            let w_boton_t = (canvas.width / 12) * 2;
            let posX_base = (canvas.width - w_boton_t) / 4;
            let posY = canvas.height - canvas.offsetTop - h_boton_t;
            boton_jugar = 
                new Boton((canvas.width - (canvas.width / 4)) / 2, (posY - h_boton_t * 1.5), canvas.width / 4, h_boton_t + 10, "Jugar", "aquamarine");  
            let boton_tablero_4 = new Boton(posX_base - 100, posY, w_boton_t, h_boton_t, "4 en Linea", boton_fill);
            let boton_tablero_5 = new Boton(posX_base * 2 - 100, posY, w_boton_t, h_boton_t, "5 en Linea", boton_fill);
            let boton_tablero_6 = new Boton(posX_base * 3 - 100, posY, w_boton_t, h_boton_t, "6 en Linea", boton_fill);
            let boton_tablero_7 = new Boton(posX_base * 4 - 100, posY, w_boton_t, h_boton_t, "7 en Linea", boton_fill);

            botones.push(boton_tablero_4);
            botones.push(boton_tablero_5);
            botones.push(boton_tablero_6);
            botones.push(boton_tablero_7);

            for(let boton of botones) {
                boton.draw(ctx);
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
                initGame(crearTablero(), ficha_j1_seleccionada, ficha_j2_seleccionada);
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
            for (let f_j1 of fichas_j1) {
                if(f_j1.isSelected(x,y))
                    ficha_j1_seleccionada = f_j1.imagen;
            }
            for (let f_j2 of fichas_j2) {
                if(f_j2.isSelected(x,y))
                    ficha_j2_seleccionada = f_j2.imagen;
            }
        }

        function clearCanvas() {
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
    }

    function initGame(tablero, ficha_j1, ficha_j2) {
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


        /* let img = new Image();
        img.src = "img/4enlinea/logo-hp.png";
        ctx.drawImage(img, 10, 10);
        console.log(img); */

        let jugador1 = new Jugador("Alfonso", ficha_j1, cantFichas / 2, ctx, "red", 0, canvas.offsetHeight, sizeFichas);
        let jugador2 = new Jugador("Carlos", ficha_j2, cantFichas / 2, ctx, "blue", canvas.offsetWidth - 150, canvas.offsetHeight, sizeFichas);

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
                if (tablero.jugadorActual.fichas[i].isSelected(x, y) && tablero.jugadorActual.tiempo > 0
                    && tablero.juegoEnCurso) {
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
                    if (tablero.indicadores[i].isPointInside(x,y) && tablero.jugadorActual.tiempo > 0 
                        && tablero.juegoEnCurso) {
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