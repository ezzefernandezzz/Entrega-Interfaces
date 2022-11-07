class Casilla {
    constructor(size) {
        this.ficha = null;
        this.size = size;
    }        

    draw(ctx, x, y, canvasWidth, canvasHeight, columna, fila) {
        //TO DO: El (900 - 420) es canvas.width - 7 * 60 en este caso (7 = columnas)
        //Lo mismo para el 500 - 360, es canvas.height - 6 * 60
        //Hay que buscar una forma, ya sea con parametros (Ej: capaz tablero tiene que saber el tamaño del canvas
        //para poder pasarlo a las demas clases y asi hacer las cuentas dinamicamente para los tableros mas grandes)
        //Y pasarle desde tablero a casilla la cantidad de columnas y filas que tiene
        ctx.beginPath();
        
        //ctx.rect(x + ((900 - 420) / 2), y + 30 + ((500 - 360) / 2), this.size, this.size);
        ctx.rect(x + ((canvasWidth - columna) / 2), y + (this.size / 2) + ((canvasHeight - fila) / 2), this.size, this.size);
        ctx.fillStyle = "#FF9D5C"
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        //Idem que lo mencionado antes, y 26 (3er parametro) es el tamaño de las fichas, habria que ver si
        //hay que pasar un parametro para que se mantenga el mismo numero en las fichas que aca en la casilla
        ctx.beginPath();
        //ctx.arc(x + ((900 - 420) / 2) + 50 / 2, y + 25 + ((500 - 360) / 2) + 60 / 2, 22, 0, 2 * Math.PI);   
        ctx.arc(x + ((canvasWidth - columna) / 2) + (this.size / 2), y + (this.size / 2) + ((canvasHeight - fila) / 2) + this.size / 2, this.size/3, 0, 2 * Math.PI);   
        if (this.ficha == null) 
            ctx.fillStyle = "white";
        else
            ctx.fillStyle = this.ficha.fill;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
}