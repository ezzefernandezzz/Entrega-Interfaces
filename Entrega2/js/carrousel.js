window.addEventListener('DOMContentLoaded', () => {

    /* Carrousel's */
    const prev = document.querySelector('.prev')
    const next = document.querySelector('.next')

    const prev2 = document.querySelector('.prev2')
    const next2 = document.querySelector('.next2')

    const slider = document.querySelector('.slider')
    const slider2 = document.querySelector('.slider2')
    /* Carrousel's */

    /* let nombreJuego = document.querySelector(".gamecard-big img");
    console.log(nombreJuego.alt)

    nombreJuego.addEventListener('mouseover', () => {
        let game_card = document.querySelector(".gamecard-big")
        let overlay = document.querySelector(".overlay")

        // game_card.classList.add("overlay");
        overlay.style.width = game_card.clientWidth;


    }) */

    prev.addEventListener('click', () => {
        slider.scrollLeft -= 300
    })

    next.addEventListener('click', () => {
        slider.scrollLeft += 300
    })


    prev2.addEventListener('click', () => {
        slider2.scrollLeft -= 300
    })

    next2.addEventListener('click', () => {
        slider2.scrollLeft += 300
    })

})