class Jugador {
    constructor(nombre, url_icono, cantidad) {
        this.nombre = nombre;
        this.url_icono = url_icono /* default */;
        this.fichas = this.generarFichas(cantidad);
        this.tiempoJugador = 300;
    }

    generarFichas(cantidad) {
        let fichas = [];
        for (let i = 0; i < cantidad; i++) {
            fichas.push(new Ficha(this.url_icono));
        }
        return fichas;
    }
}