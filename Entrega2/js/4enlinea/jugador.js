class Jugador {
    constructor(nombre, icono, cantidad) {
        this.nombre = nombre;
        this.icono = icono /* default */;
        this.fichas = this.generarFichas(cantidad);
        this.tiempoJugador = 300;
    }

    generarFichas(cantidad) {
        let fichas = [];
        for (let i = 0; i < cantidad; i++) {
            fichas.push(new Ficha(this.icono));
        }
        return fichas;
    }
}