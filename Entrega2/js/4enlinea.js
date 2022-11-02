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
            for(let i = 0; i < ancho; i++) {
                for(let j = 0; j < alto; j++) {
                    
                }
            }
        }
    }

    let fichaTest = new Ficha("../img/iconos/estrella-active.png");
    let casillaTest = new Casilla();
    let jugadorTest = new Jugador("Alfonso", "../img/iconos/perfil.png");

    console.log(fichaTest.imagen)
    console.log(casillaTest.ficha);
    console.log(jugadorTest.nombre);
    console.log(jugadorTest.icono);

    
    
});