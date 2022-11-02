window.addEventListener('DOMContentLoaded', () => { 

    class Ficha {
        constructor(url) {
            this.imagen = url;
        }
    }
    
    class Casilla {
        constructor() {
            this.ficha = null;
        }        
    }

    class Jugador {
        constructor(nombre, icono) {
            this.nombre = nombre;
            this.icono = icono;
            this.fichas = [];
            this.tiempoJugador = 300;
        }
    }

    class Tablero {
        constructor(ancho, alto) {
            this.tablero = [];
            for(let j = 0; j < alto; j++) {
                let fila = [];
                for(let i = 0; i < ancho; i++) {
                    fila.push(new Casilla);
                }
                this.tablero.push(fila);
            }
        }
    }

    let fichaTest = new Ficha("../img/iconos/estrella-active.png");
    let casillaTest = new Casilla();
    let jugadorTest = new Jugador("Alfonso", "../img/iconos/perfil.png");
    let tablero = new Tablero(7, 6);

    console.log(fichaTest.imagen)
    console.log(casillaTest.ficha);
    console.log(jugadorTest.nombre);
    console.log(jugadorTest.icono);
    console.log(tablero.tablero);
    console.log(tablero.tablero[0][0]);
    tablero.tablero[0][0] = fichaTest;
    console.log(tablero.tablero[0][0]);

    
    
});