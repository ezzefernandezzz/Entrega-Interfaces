class Tablero {
    constructor(ancho, alto, fichas_en_linea, ctx) {
        this.ancho = ancho;
        this.alto = alto;
        this.tablero = [];
        this.indicadores = [];
        for(let j = 0; j < alto; j++) {
            let fila = [];
            for(let i = 0; i < ancho; i++) {
                if (j == 0) {
                    this.indicadores.push(new Indicador(i * 60, 60));
                }
                fila.push(new Casilla);
            }
            this.tablero.push(fila);
        }
        this.fichas_en_linea = fichas_en_linea;
        this.jugadores = [];
        this.jugadorActual = null;
    }

    colocarFicha(nueva, columna) {
        //Esta forma es temporal, dsp de poder seleccionar una ficha clickeando hay que pasarla como parametro
        //a esta funcion para distinguir la ficha seleccionada y no solo sacar la ultima del arreglo
        //let nueva = this.jugadorActual.fichas.pop();
        //Compruebo que el primer lugar de la columna no este ocupado
        if (this.tablero[0][columna].ficha == null) {
            for(let i = 0; i < this.alto; i++) {
                if (this.tablero[i + 1] == undefined || this.tablero[i + 1][columna].ficha != null) {
                    this.tablero[i][columna].ficha = nueva;
                    return this.jugadaGanadora(i, columna);
                }
            }
        }
    }

    jugadaGanadora(fila, columna) {
        if (this.checkHorizontal(fila, columna) || this.checkVertical(fila, columna) 
            || this.checkDiagonales(fila, columna)) {
                console.log("Jugador ganador: " + this.jugadorActual.nombre);
                return true;
            }
        this.cambiarTurnoJugador();
        return false;
    }

    cambiarTurnoJugador() {
        if (this.jugadorActual == this.jugadores[0])
            this.jugadorActual = this.jugadores[1];
        else
            this.jugadorActual = this.jugadores[0];

    }

    checkHorizontal(fila, columna) {
        let pos = columna - 1;
        let sumaFichas = 1;
        let contiguo = true;
        //Check izq
        while (pos >= 0 && contiguo) {  
            if (this.casillaTieneFichaJugadorAct(fila, pos)) {
                sumaFichas++;
                pos--;
            } else
            contiguo = false;
        }
        //Check der
        pos = columna + 1;
        contiguo = true;
        while (pos < this.ancho && contiguo) {
            if (this.casillaTieneFichaJugadorAct(fila, pos)) {
                sumaFichas++;
                pos++;
            } else
                contiguo = false;
        }
        return sumaFichas >= this.fichas_en_linea;
    }

    checkVertical(fila, columna) {
        let pos = fila - 1;
        let sumaFichas = 1;
        let contiguo = true;
        //Check arriba
        while (pos >= 0 && contiguo) {
            if (this.casillaTieneFichaJugadorAct(pos, columna)) {
                sumaFichas++;
                pos--;
            } else
                contiguo = false;
        }
        pos = fila + 1;
        contiguo = true;
        //Check abajo
        while (pos < this.alto && contiguo) {
           if (this.casillaTieneFichaJugadorAct(pos, columna)) {
                sumaFichas++;
                pos++;
           } else
            contiguo = false;
        }
        return sumaFichas >= this.fichas_en_linea;
    }

    casillaTieneFichaJugadorAct(fila, columna) {
        let tipo_ficha = this.jugadorActual.url_icono;
        if (this.tablero[fila][columna].ficha != null) {
            if (this.tablero[fila][columna].ficha.imagen == tipo_ficha)
                return true;
        }
        return false;
    }

    checkDiagonales(fila, columna) {
        return (this.checkDiagonalIzq(fila, columna) || this.checkDiagonalDer(fila, columna));

    }

    //Diagonal que va desde la esq sup izq hasta la esq inf der '\' 
    checkDiagonalIzq(fila, columna) { 
        let posX = columna - 1;
        let posY = fila - 1;
        let sumaFichas = 1;
        let contiguo = true;
        while (posX >= 0 && posY >= 0 && contiguo) {
            if (this.casillaTieneFichaJugadorAct(posY, posX)) {
                sumaFichas++;
                posX--;
                posY--;
            } else
                contiguo = false;
        }
        contiguo = true;
        posX = columna + 1;
        posY = fila + 1;
        while (posX < this.ancho && posY < this.alto && contiguo) {
            if (this.casillaTieneFichaJugadorAct(posY, posX)) {
                sumaFichas++;
                posX++;
                posY++;
            } else
                contiguo = false;
        }
        return sumaFichas >= this.fichas_en_linea;

    }

    //Diagonal que va desde la esq sup der hasta la esq inf izq '/'
    checkDiagonalDer(fila, columna) {
        let posX = columna + 1;
        let posY = fila - 1;
        let sumaFichas = 1;
        let contiguo = true;
        while(posX < this.ancho && posY >= 0 && contiguo) {
            if (this.casillaTieneFichaJugadorAct(posY, posX)) {
                sumaFichas++;
                posX++;
                posY--;
            } else
                contiguo = false;
        }
        contiguo = true;
        posX = columna - 1;
        posY = fila + 1;
        while(posX >= 0 && posY < this.alto && contiguo) {
            if (this.casillaTieneFichaJugadorAct(posY, posX)) {
                sumaFichas++;
                posX--;
                posY++;
            } else
                contiguo = false;
        }
        return sumaFichas >= this.fichas_en_linea;

    }

    draw(ctx) {
        for(let i = 0; i < this.alto; i++) {
            for(let j = 0; j < this.ancho; j++) {
                if (i == 0) {
                    this.indicadores[j].draw(ctx);
                }
                this.tablero[i][j].draw(ctx, 60 * j, 60 * i);    
            }
        }
    }

    
}
