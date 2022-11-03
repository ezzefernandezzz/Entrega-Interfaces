class Tablero {
    constructor(ancho, alto) {
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
    }

    colocarFicha(nueva, columna) {
        //Compruebo que el primer lugar de la columna no este ocupado
        if (this.tablero[0][columna].ficha == null) {
            for(let i = 0; i < this.alto; i++) {
                if (this.tablero[i + 1] == undefined || this.tablero[i + 1][columna].ficha != null) {
                    this.tablero[i][columna].ficha = nueva;
                    return [i, columna];
                }
            }
        }
    }

    checkHorizontal(fila, columna) {
        let pos = columna;
    }

    
}
