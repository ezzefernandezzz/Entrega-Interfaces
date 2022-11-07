class Boton {
    constructor(posX, posY, ancho, alto) {
        this.posX = posX;
        this.posY = posY;
        this.ancho = ancho;
        this.alto = alto;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.posX, this.posY, this.ancho, this.alto);
        ctx.fillStyle = "aquamarine";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.fillStyle = "black";
        ctx.font = "24px monospace";
        ctx.textAlign = "center";
        ctx.fillText("Jugar", this.posX + this.ancho / 2, this.posY + ((this.alto + 12) / 2) );
    }

    isPointInside(x, y) {
        return x < this.posX + this.ancho && x > this.posX 
            && y < this.posY + this.alto && y > this.posY;
    }
}