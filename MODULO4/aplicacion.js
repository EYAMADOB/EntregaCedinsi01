//const path = require("path");
let pagina = 1;
const btnAnterior= document.getElementById("btnAnterior");
const btnSiguiente= document.getElementById("btnSiguiente");
btnSiguiente.addEventListener('click', ()=>{
    if (pagina<1000){
    pagina +=1;
    cargarPeliculas();
}
})
btnAnterior.addEventListener('click', ()=>{
    if (pagina>1){
    pagina -=1;
    cargarPeliculas();
}
})
trabajoapidos.addEventListener('click', ()=>{
    window.location.href='./index2.html';
 }
 )


const cargarPeliculas = async ()=>{
    try {    
    const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7e18178e6ab2a46ffd4c67e757b680a9&languaje=es-MX&page=${pagina}`);
    console.log(respuesta);

    if(respuesta.status === 200){
        const datos = await respuesta.json();
        let peliculas = '';
        datos.results.forEach(pelicula => {
            peliculas +=  `
            <div class="pelicula">
                <img class = "poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"> 
            </div>
            <h3 class="titulo">${pelicula.title}</h3>` 
        });//https://api.themoviedb.org/3/movie/movie_id/images', options
        
        document.getElementById('contenedor').innerHTML= peliculas;

    }else if (respuesta.status === 401){
        console.log('pusiste la llave mal');
    }else if (respuesta.status === 404){
        console.log('la pelicula no existe');
        }else{
            console.log('error indefinido')
        }

}
catch(error){
    console.log(error);
}

} 
cargarPeliculas();