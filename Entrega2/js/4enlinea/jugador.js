class Jugador {
    constructor(nombre, url_icono, cantidad, ctx) {
        this.nombre = nombre;
        this.url_icono = url_icono /* default */;
        this.ctx = ctx;

        //TO DO: Hay que hacer un offset para la posicion de las fichas. Ej: Jugador1 genera las en el primer 
        //cuarto de la pantalla y el jugador2 genera sus fichas en el ultimo cuarto
        //Para esto pensaba pasarle algun parametro a las fichas que indiquen su posicion base
        this.fichas = this.generarFichas(cantidad);
    }

    generarFichas(cantidad) {
        let fichas = [];
        for (let i = 0; i < cantidad; i++) {
            fichas.push(new Ficha(this.url_icono));
            fichas[i].draw(this.ctx);
        }
        return fichas;
    }
}