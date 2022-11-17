const ventana_carga = document.querySelector('.prueba')

CSS.registerProperty({
    name: "--p",
    syntax: "<integer>",
    initialValue: 0,
    inherits: true,
  });

setTimeout(function(){
    ventana_carga.style.visibility = "hidden";
}, 10);