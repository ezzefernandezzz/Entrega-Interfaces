class Jugador {
    constructor(nombre, url_icono, cantidad, ctx) {
        this.nombre = nombre;
        this.url_icono = url_icono /* default */;
        this.ctx = ctx;
        this.fichas = this.generarFichas(cantidad);
    }

    generarFichas(cantidad) {
        let fichas = [];
        for (let i = 0; i < cantidad; i++) {
            fichas.push(new Ficha(this.url_icono));
            //fichas[i].draw(this.ctx);
        }
        return fichas;
    }
}