class Ficha {
    constructor(url) {
        this.imagen = url;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(Math.random() * 100 + 30, Math.random() * 200 + 30, 20, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
