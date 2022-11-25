window.addEventListener('DOMContentLoaded', () => {
    
    let sections = document.getElementsByClassName('section');
    let container = document.querySelector('.on-scroll-content');

    /* container.addEventListener('wheel', isBeingScrolled); */
    document.addEventListener("scroll", isBeingScrolled);

    function isBeingScrolled(event) {
        /* let y = event.pageY; */
        let y = document.documentElement.scrollTop + 8; //el +8 es pq sino empieza en 0 arriba del todo, y la primer section
        //esta a los 8, entonces si scrolleas hasta arriba queda en blanco
        console.log(y);
        
        for (let section of sections) {
            isOnScreen(y, section);
        }
    }

    function isOnScreen(y, section) {
        console.log(section.offsetTop + " ------ "+ y)
        if (y >= section.offsetTop && y < section.clientHeight + section.offsetTop) {
            console.log("entra?");
            section.style.setProperty("opacity", 1);
        }
        else
            section.style.setProperty("opacity", 0);
    }

});