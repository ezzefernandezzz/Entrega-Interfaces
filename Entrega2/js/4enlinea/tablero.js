class Tablero {
    constructor(ancho, alto, fichas_en_linea) {
        this.ancho = ancho;
        this.alto = alto;
        this.tablero = [];
        for(let j = 0; j < alto; j++) {
            let fila = [];
            for(let i = 0; i < ancho; i++) {
                fila.push(new Casilla);
            }
            this.tablero.push(fila);
        }
        this.fichas_en_linea = fichas_en_linea;
        this.jugadores = [];
        this.jugadorActual = null;
    }

    colocarFicha(columna) {
        //Compruebo que el primer lugar de la columna no este ocupado
        let nueva = this.jugadorActual.fichas.pop();
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
            || this.checkDiagonal(fila, columna)) {
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
        let tipo_ficha = this.jugadorActual.url_icono;
        //Check izq
        while (pos >= 0 && contiguo) {            
            if (this.tablero[fila][pos].ficha != null) {
                if (this.tablero[fila][pos].ficha.imagen == tipo_ficha) {
                    sumaFichas++;
                    pos--;
                } else
                    contiguo = false;
            } else
                contiguo = false;
        }
        pos = columna + 1;
        //Check der
        while (pos < this.ancho && contiguo) {
            if (this.tablero[fila][pos].ficha != null) {
                if (this.tablero[fila][pos].ficha.imagen == tipo_ficha) {
                    sumaFichas++;
                    pos++;
                } else
                    contiguo = false;
            } else
                contiguo = false;
        }
        return sumaFichas >= this.fichas_en_linea;
    
    }

    checkVertical(fila, columna) {

    }

    checkDiagonal(fila, columna) {

    }

    
}
