class Ficha {
    constructor(url, fill, posXFicha, posYFicha, rad) {
        this.imagen = url;
        this.posX = Math.random() * 850 + 30;
        this.posY = Math.random() * 450 + 30;
        /* this.rad = 26; */
        this.rad = rad;
        this.fill = fill;
        this.posXFicha = posXFicha;
        this.posYFicha = posYFicha;
    }

    draw(ctx) {
        ctx.beginPath();

        let img = new Image();
        img.src="img/4enlinea/fichaaparecium.png";

        /* ctx.arc(this.posX, this.posY, this.rad, 0, 2 * Math.PI); */
        ctx.arc(this.posXFicha, this.posYFicha, this.rad, 0, 2 * Math.PI);

        /* ctx.clip(); *///
        ctx.fillStyle = this.fill;
        ctx.fill();
        ctx.stroke();

        ctx.drawImage(img, this.posXFicha-25, this.posYFicha-25, 50, 50);
    }

    isSelected(x, y) {
        let _x = this.posXFicha - x;
        let _y = this.posYFicha - y;
        return Math.sqrt(_x * _x + _y * _y) < this.rad;
    }

    setPos(x, y) {
        this.posXFicha = x;
        this.posYFicha = y;
    }
}
