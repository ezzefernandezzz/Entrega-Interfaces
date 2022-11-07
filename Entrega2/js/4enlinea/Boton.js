class Boton {
    constructor(posX, posY, ancho, alto, texto, fill) {
        this.posX = posX;
        this.posY = posY;
        this.ancho = ancho;
        this.alto = alto;
        this.fill = fill;
        this.texto = texto;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.roundRect(this.posX, this.posY, this.ancho, this.alto, 20);
        ctx.fillStyle = this.fill;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = "black";
        ctx.font = "24px monospace";
        ctx.textAlign = "center";
        ctx.fillText(this.texto, this.posX + this.ancho / 2, this.posY + ((this.alto + 12) / 2) );
    }

    isPointInside(x, y) {
        return x < this.posX + this.ancho && x > this.posX 
            && y < this.posY + this.alto && y > this.posY;
    }

    //Por alguna razón, pinta otro boton en vez de pintar el boton actual
    //Seguramente hay una mejor forma de cambiar el color del boton
    clicked(ctx) {
        ctx.fillStyle = "#BC66FE";
        ctx.fill();
    }
}