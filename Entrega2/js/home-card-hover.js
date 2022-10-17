window.addEventListener('DOMContentLoaded', () => {

    let gamecards = document.getElementsByClassName('gamecard-wide');
    crearOverlays(gamecards);
    let gamecards2 = document.getElementsByClassName('gamecard-small');
    crearOverlays(gamecards2);
    let gamecards3 = document.getElementsByClassName('gamecard-big');
    crearOverlays(gamecards3);

    function crearOverlays(gamecards){
        for(gamecard of gamecards) {
            let alt = gamecard.firstElementChild.alt;
            let price = gamecard.firstElementChild.dataset.price;
            let card_overlay = ``;
            if (price === undefined) {
                card_overlay = 
                    `<div class="overlay">
                        <text>${alt}</text>
                        <a href="4enlinea.html"><button class="btn-jugar">Jugar</button></a>
                    </div> `
            } else {
                card_overlay = 
                    `<div class="overlay">
                        <text>${alt}</text>
                        <text>${price}</text>
                        <button class="btn-jugar">Comprar</button>
                    </div> `;
            }

            gamecard.insertAdjacentHTML('beforeend', card_overlay);
        }
    }


});