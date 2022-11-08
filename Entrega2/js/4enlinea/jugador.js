class Jugador {
    constructor(nombre, imgFicha, cantidadFichas, ctx, fill, posX, posY, sizeFicha) {
        this.nombre = nombre;
        //this.url_icono = url_icono /* default */;

        this.imgFicha = imgFicha;
        /* this.img = new Image();
        this.img.src = url_icono; */
        
        this.ctx = ctx;
        this.fill = fill;
        this.cantidadFichas = cantidadFichas;
        this.tiempo = 150;
        this.interval_id;

        this.sizeFicha = sizeFicha;
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
        for (let i = 0; i < this.cantidadFichas; i++) {
            if (i % 2 == 0) {
                fichas.push(new Ficha(this.imgFicha, this.fill, fila + 50, this.posY / 3 + ((i - 1) / 2) * 12, this.sizeFicha));
            } else {
                fichas.push(new Ficha(this.imgFicha, this.fill, fila, this.posY / 3 + (i / 2) * 12, this.sizeFicha));
            }
            fichas[i].draw(this.ctx);
        }
        return fichas;
    }

    iniciarReloj() {
        this.interval_id = setInterval(() => {
            if (this.tiempo > 0)
                this.tiempo--;
        }, 1000);
    }

    detenerReloj() {
        clearInterval(this.interval_id);
    }

    draw() {
        this.ctx.fillStyle = "white";
        this.ctx.font = '48px serif';
        let minutos = Math.floor(this.tiempo / 60);
        let segundos = (this.tiempo % 60);
        if (segundos < 10) {
            segundos = '0' + segundos;
        };
        this.ctx.fillText(minutos + ":" + segundos, this.posX + 36*2, 50);
        this.ctx.fillStyle = "black";
        for (let i = 0; i < this.fichas.length; i++) {
            this.fichas[i].draw(this.ctx);
        }
    }
}