const titulo = document.getElementById('t1');

const cargarImagen = (entradas, observador) => {
	 /* console.log(entradas)
	 console.log(observador) */

	 entradas.forEach((entrada) => {
		if(entrada.isIntersecting){
            console.log(entrada);
			entrada.target.classList.add('skale');
		} else {
			// entrada.target.classList.remove('visible');
		}
	}); 
}

const observador = new IntersectionObserver(cargarImagen, {
	root: null,
	rootMargin: '0px 0px 0px 0px',
	threshold: 0.0
});

observador.observe(titulo);