class Indicador {
    constructor(posX, size){
        this.posX = posX;
        this.posY = 0;
        this.size = size;
        //Ancho de canvas - ancho de tablero dividido 2
        this.offsetX = (900 - 420) / 2;
        //Alto de canvas - alto de tablero dividido 2
        this.offsetY = - 20 + (500 - 360) / 2;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.posX + this.offsetX, this.posY + this.offsetY, this.size, this.size);
        ctx.fillStyle = "#FFFF00";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    isPointInside(x, y) {
        return x < this.posX + this.size + this.offsetX && x > this.posX + this.offsetX 
            && y < this.posY + this.size + this.offsetY && y > this.posY + this.offsetY;
    }
}