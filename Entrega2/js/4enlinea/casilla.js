class Casilla {
    constructor() {
        this.ficha = null;
        this.size = 60;
    }        

    draw(ctx, x, y) {
        ctx.beginPath();
        ctx.rect(x + ((900 - 420) / 2), y + 30 + ((500 - 360) / 2), this.size, this.size);
        ctx.fillStyle = "#FF9D5C"
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(x + ((900 - 420) / 2) + 60 / 2, y + 30 + ((500 - 360) / 2) + 60 / 2, 26, 0, 2 * Math.PI);   
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
    }
}