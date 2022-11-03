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

    colocarFicha(nueva, columna) {
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
        let pos = columna;
        //Arranca en 1 contando la pos actual (ficha recien colocada)
        let sumaFichas = 1;
        //Check izq
        //Check der
    }

    checkVertical(fila, columna) {

    }

    checkDiagonal(fila, columna) {

    }

    
}
