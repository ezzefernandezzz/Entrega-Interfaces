window.addEventListener('DOMContentLoaded', () => {

    /* Carrousel's */
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    
    const prev2 = document.querySelector('.prev2');
    const next2 = document.querySelector('.next2');
    const slider = document.querySelector('.slider');
    const slider2 = document.querySelector('.slider2');
    
    let interval_s1;
    let interval_s2;

    slider.addEventListener('mouseleave', () => {
        interval_s1 = startAnimation(slider);
    });
    slider.addEventListener('mouseenter', () => {
        stopAnimation(interval_s1);
    });

    slider2.addEventListener('mouseleave', () => {
        interval_s2 = startAnimation(slider2);
    });
    slider2.addEventListener('mouseenter', () => {
        stopAnimation(interval_s2);
    });


    interval_s1 = startAnimation(slider);
    interval_s2 = startAnimation(slider2);

    function startAnimation(element, interval) {
        let cards = element.getElementsByClassName('gamecard');
        console.log(cards);
        return interval = setInterval(() => {
            for (let card of cards) {
                card.style.setProperty("animation", "carousel-bounce 0.7s forwards ease-in-out");
            }
            setTimeout(() => {
                for (let card of cards) {
                    card.style.removeProperty("animation");
                }
            }, 700);
            element.scrollLeft += 400;
            if (element.scrollLeft == element.scrollWidth - element.clientWidth) {
                element.scrollLeft = 0;
            };
        }, 4000);
    };

    function stopAnimation(interval_id) {
        clearInterval(interval_id);
    };

    prev.addEventListener('click', () => {
        if (slider.scrollLeft == 0) {
            playShakeAnimation(slider);
        }
        else
            slider.scrollLeft -= 400
    });

    next.addEventListener('click', () => {
        if (slider.scrollLeft == slider.scrollWidth - slider.clientWidth) {
            playShakeAnimation(slider);
        }
        else
            slider.scrollLeft += 400
    });

    prev2.addEventListener('click', () => {
        if (slider2.scrollLeft == 0) {
            playShakeAnimation(slider2);
        } else
            slider2.scrollLeft -= 400
    });

    next2.addEventListener('click', () => {
        if (slider2.scrollLeft == slider2.scrollWidth - slider2.clientWidth) {
            playShakeAnimation(slider2);
        } else 
            slider2.scrollLeft += 400
    });

    function playShakeAnimation(element) {
        element.style.setProperty("animation", "carousel-shake 0.5s forwards ease-in");
        setTimeout(() => {
            element.style.removeProperty("animation");
        }, 500);
    }

})