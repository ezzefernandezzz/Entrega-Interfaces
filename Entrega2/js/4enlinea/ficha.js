class Ficha {
    constructor(url) {
        this.imagen = url;
        this.posX = Math.random() * 850 + 30;
        this.posY = Math.random() * 450 + 30;
        this.rad = 26;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(posX, posY, this.rad, 0, 2 * Math.PI);
        let asd = ctx.createPattern(this.imagen, "repeat");
        ctx.fillStyle = asd;
        ctx.fill();
        ctx.stroke();
    }

    isSelected(x, y) {
        let _x = this.posX - x;
        let _y = this.posY - y;
        return Math.sqrt(_x * _x + _y * _y) < this.rad;
    }
}
