window.addEventListener('DOMContentLoaded', () => {
    
    let sections = document.getElementsByClassName('section');
    document.addEventListener("scroll", isBeingScrolled);

    isBeingScrolled();

    function isBeingScrolled(event) {
        let y = document.documentElement.scrollTop + 150; 
        
        for (let section of sections) {
            isOnScreen(y, section);
        }
    }

    function isOnScreen(y, section) {
        let p = section.querySelector('.col-2');
        if (y >= section.offsetTop && y < section.clientHeight + section.offsetTop) {
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