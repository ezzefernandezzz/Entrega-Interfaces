class Boton {
    constructor(posX, posY, ancho, alto, texto, fill) {
        this.posX = posX;
        this.posY = posY;
        this.ancho = ancho;
        this.alto = alto;
        this.fill = fill;
        this.texto = texto;
        this.isClicked = false;
    }

    draw(ctx, fill = this.fill) {
        ctx.beginPath();
        ctx.roundRect(this.posX, this.posY, this.ancho, this.alto, 20);
        ctx.fillStyle = fill;
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

    unclickButton(ctx) {
        this.isClicked = false;
        this.draw(ctx);
    }

    clickButton(ctx, fill) {
        this.isClicked = true;
        this.draw(ctx, fill);
    }
}