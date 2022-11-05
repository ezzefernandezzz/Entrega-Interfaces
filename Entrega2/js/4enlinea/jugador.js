class Jugador {
    constructor(nombre, url_icono, cantidadFichas, ctx, fill, posX, posY) {
        this.nombre = nombre;
        this.url_icono = url_icono /* default */;
        this.ctx = ctx;
        this.fill = fill;
        this.cantidadFichas = cantidadFichas;
        //TO DO: Hay que hacer un offset para la posicion de las fichas. Ej: Jugador1 genera las en el primer 
        //cuarto de la pantalla y el jugador2 genera sus fichas en el ultimo cuarto
        //Para esto pensaba pasarle algun parametro a las fichas que indiquen su posicion base
        
        this.posX = posX;
        this.posY = posY;
        this.fichas = this.generarFichas();

    }

    generarFichas() {
        let fichas = [];
        let fila = this.posX + 50;

        //Falta pensar como hacer una distribucion del total de las fichas, por ejemplo: 20 fichas, 2 columnas, con 10
        //filas cada una. Actualmente la forma de estos valores hardcodeados esta mal, por eso tampoco permite moverlas,
        //ya que busca las mismas en otro xy

        /* for (let i = 0; i < this.cantidadFichas; i++) { */
        for (let i = 0; i < (5); i++) {
            /*if(i >= this.cantidadFichas /2){
                fila += fila * 2; 
                console.log(fila)
            }*/
            console.log(this.canvas);
            fichas.push(new Ficha(this.url_icono, this.fill, fila , this.posY/2 + i *50, 26));
            fichas.push(new Ficha(this.url_icono, this.fill, fila + 60 ,this.posY/2 + i *50, 26));
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