class Tablero {
    constructor(ancho, alto, fichas_en_linea, cW, cH) {
        this.ancho = ancho; //Cant columnas
        this.alto = alto;   //Cant filas
        this.cW = cW; // Canvas Width
        this.cH = cH; // Canvas height

        this.sizeFicha = cW / (fichas_en_linea*3.2);
        
        /* this.sizeFicha = 60 * fichas_en_linea/4; */

        this.tablero = [];
        this.indicadores = [];

        this.tamanioColumnas = (this.ancho * this.sizeFicha);
        this.tamanioFilas = (this.alto * this.sizeFicha);

        for(let j = 0; j < alto; j++) { //de 0 a cantidad de filas
            let fila = [];  // instancio una fila
            for(let i = 0; i < ancho; i++) {   //de 0 a cantidad de columnas
                if (j == 0) {   //si estoy en el primer ciclo
                    this.indicadores.push(new Indicador(i * this.sizeFicha, this.sizeFicha, this.cW, this.cH, this.tamanioColumnas, this.tamanioFilas));   //Creo indicador donde tirar como cant de columnas
                }
                fila.push(new Casilla(this.sizeFicha)); //Instancio cantidad de casillas como columnas
            }
            this.tablero.push(fila); // Agrego la fila generada al tablero y repito
        }
        this.fichas_en_linea = fichas_en_linea; //genero x cantidad de ficha
        this.jugadores = [];    //Creo el arreglo de jugadores
        this.jugadorActual = null;  //El jugador inicial esta vacio
    }

    getSizeFichas(){
        return this.sizeFicha/2;
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
            || this.checkDiagonales(fila, columna)) {
                console.log("Jugador ganador: " + this.jugadorActual.nombre);
                this.jugadorActual.detenerReloj();
                return true;
        }
        this.cambiarTurnoJugador();
        return false;
    }

    cambiarTurnoJugador() {
        this.jugadorActual.detenerReloj();
        if (this.jugadorActual == this.jugadores[0]) 
            this.jugadorActual = this.jugadores[1];
        else {
            this.jugadorActual = this.jugadores[0];
        }
        this.jugadorActual.iniciarReloj();
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
        let tipo_ficha = this.jugadorActual.imgFicha;
        /* console.log(tipo_ficha); */

        if (this.tablero[fila][columna].ficha != null) {
            /* console.log(this.tablero[fila][columna].ficha.imagen.src); */
            if (this.tablero[fila][columna].ficha.imagen.src == tipo_ficha.src)
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
        for(let i = 0; i < this.alto; i++) {    //De 0 a cantidad de filas
            for(let j = 0; j < this.ancho; j++) {   //De 0 a cantidad de columnas
                if (i == 0) {
                    this.indicadores[j].draw(ctx);  //Dibujo el indicador en el contexto
                }
                /* console.log(this.ancho * this.sizeFicha);
                console.log(this.alto * this.sizeFicha); */
                this.tablero[i][j].draw(ctx, this.sizeFicha * j, this.sizeFicha * i, this.cW, this.cH, this.tamanioColumnas, this.tamanioFilas);
                //Accedo a la pos i del tablero, que me va a devolver una FILA, y accedo a la pos J de la fila y la dibujo 
            }
        }
    }

    
}
