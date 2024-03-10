
const jsonData = {
    "imagen_visible": true,
    "ruta_imagen_visible": "IMAGENES/logo-txt-white-2 1.png",
    "ruta_imagen_no_visible": "IMAGENES/baloncesto.jpg"
  };
  
  function mostrarCambio(jsonData){
  // Obtén la referencia a la imagen
  const miImagen = document.getElementById('imagencentral');
  // Cambia la imagen y la visibilidad según el valor de "imagen_visible"
  miImagen.src = jsonData.imagen_visible ? jsonData.ruta_imagen_visible : jsonData.ruta_imagen_no_visible;
  miImagen.style.display = jsonData.imagen_visible ? 'block' : 'none';
}
 
 
 








const tiposDeServicios = [
    {
        "nombre": "FUNDAMENTACION",
        "precio": 30.000,
        "descripcion": "Aprende desde cero y mejora tu rendimiento en el juego"
    },
    {
        "nombre": "MEJORAMIENTO DE TECNICAS",
        "precio": "Desde 50.000",
        "descripcion": "Mejora tus habilidades y obten los resultados deseados"
    },
    {
        "nombre": "ALTO RENDIMIENTO",
        "precio": "Desde 50000",
        "descripcion": "Preparate para dar lo mejor en los toneros deportivos"
    },
]

function mostrarTarjetas(arregloInformacion){
    let lista = "<h2>Listado de servicios aqui</h2>";
    arregloInformacion.forEach(element => {
        lista += `<div class="listaContenedor"> 
            <h1 class="titulo">${element.nombre}</h1>
            <span>${element.precio}</span>
            <p>${element.descripcion}</p>
        </div>`
    });

    //document.getElementById('informaciondeservicios').innerHTML = lista;
}

mostrarTarjetas(tiposDeServicios)
//mostrarCambio(jsonData)