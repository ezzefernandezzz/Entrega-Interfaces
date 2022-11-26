window.addEventListener('DOMContentLoaded', () => {
    
    let sections = document.getElementsByClassName('section');
    /* let container = document.querySelector('.on-scroll-content'); */
    /* container.addEventListener('wheel', isBeingScrolled); */

    document.addEventListener("scroll", isBeingScrolled);

    isBeingScrolled(); //para cargar la primer img sin scrollear y que no aparezcan todas juntas

    function isBeingScrolled(event) {
        /* let y = event.pageY; */
        console.log(document);
        let y = document.documentElement.scrollTop + 150; 
        
        for (let section of sections) {
            isOnScreen(y, section);
        }
    }

    function isOnScreen(y, section) {
        let p = section.querySelector('.col-2');
        if (y >= section.offsetTop && y < section.clientHeight + section.offsetTop) {
            /* section.style.setProperty("opacity", 1); */
            /* console.log(section.children) */
            for (const item of section.children) {
                item.style.setProperty("opacity", 1);   //se los pongo por separado al IMG y al P porque si se lo hago al SECTION
                //no puedo agregarle transicion al P
            }
        }
        else{
            for (const item of section.children) {
                item.style.setProperty("opacity", 0);
            }
        }
            /* section.style.setProperty("opacity", 0); */
    }

});