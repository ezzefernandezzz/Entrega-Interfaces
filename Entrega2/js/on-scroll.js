window.addEventListener('DOMContentLoaded', () => {
    let sections = document.getElementsByClassName('section');
    let container = document.querySelector('.on-scroll-content');
    container.addEventListener('wheel', isBeingScrolled);
    //body.addEventListener('scroll', isBeingScrolled);

    function isBeingScrolled(event) {
        let y = event.pageY;
        for (let section of sections) {
            isOnScreen(y, section);
        }

    }

    function isOnScreen(y, section) {
        if (y > section.offsetTop && y < section.clientHeight + section.offsetTop) {
            section.style.setProperty("opacity", 1);
        }
        else
            section.style.setProperty("opacity", 0);
    }

});