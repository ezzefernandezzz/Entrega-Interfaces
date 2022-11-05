class Jugador {
    constructor(nombre, url_icono, cantidad, ctx, fill) {
        this.nombre = nombre;
        this.url_icono = url_icono /* default */;
        this.ctx = ctx;
        this.fill = fill;
        this.cantidad = cantidad;
        //TO DO: Hay que hacer un offset para la posicion de las fichas. Ej: Jugador1 genera las en el primer 
        //cuarto de la pantalla y el jugador2 genera sus fichas en el ultimo cuarto
        //Para esto pensaba pasarle algun parametro a las fichas que indiquen su posicion base
        this.fichas = this.generarFichas();
    }

    generarFichas() {
        let fichas = [];
        for (let i = 0; i < this.cantidad; i++) {
            fichas.push(new Ficha(this.url_icono, this.fill));
            fichas[i].draw(this.ctx);
        }
        return fichas;
    }

    draw() {
        for (let i = 0; i < this.fichas.length; i++) {
            this.fichas[i].draw(this.ctx);
        }
    }
}