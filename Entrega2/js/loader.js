const ventana_carga = document.querySelector('.prueba')
document.body.style.overflow = "hidden";  //Para que no se pueda scrollear mientras esta la pantalla de carga

CSS.registerProperty({
    name: "--p",
    syntax: "<integer>",
    initialValue: 0,
    inherits: true,
  });

setTimeout(function(){
    ventana_carga.style.visibility = "hidden";
    window.onscroll = function() {myFunction()};
    document.body.style.overflow = "visible";
}, 5000); //correcto 5000