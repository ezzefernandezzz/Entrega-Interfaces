window.addEventListener('DOMContentLoaded', () => {
    
    let sections = document.getElementsByClassName('section');
    /* let container = document.querySelector('.on-scroll-content'); */
    /* container.addEventListener('wheel', isBeingScrolled); */

    document.addEventListener("scroll", isBeingScrolled);

    isBeingScrolled(); //para cargar la primer img sin scrollear y que no aparezcan todas juntas

    function isBeingScrolled(event) {
        /* let y = event.pageY; */
        let y = document.documentElement.scrollTop + 300; 
        
        for (let section of sections) {
            isOnScreen(y, section);
        }
    }

    function isOnScreen(y, section) {
        let p = section.querySelector('.col-2');
        console.log(p);
        if (y >= section.offsetTop && y < section.clientHeight + section.offsetTop) {
            /* section.style.setProperty("opacity", 1); */
            /* console.log(section.children) */
            for (const item of section.children) {
                item.style.setProperty("opacity", 1);   //se los pongo por separado al IMG y al P porque si se lo hago al SECTION
                //no puedo agregarle transicion al P
            }
            //tuve que agregarle un padding-top: 300px; al P para que se llegue a ver cuando se disolvia.
            //El problema es que no arranca "centrado"
        }
        else{
            for (const item of section.children) {
                item.style.setProperty("opacity", 0);
            }
        }
            /* section.style.setProperty("opacity", 0); */
    }

});