
const aplicacion = document.querySelector(".container");
const url= 'https://jsonplaceholder.typicode.com/users'
fetch(url)
.then(res => res.json())
.then(data => 
    {
        data.forEach(usuario => {
            console.log(usuario.name)
            const p = document.createElement("p")
            p.innerHTML= usuario.name
            aplicacion.appendChild(p)
        });
    })
.catch(error => console.log(error))
document.getElementById(btn)
btn.addEventListener('click', ()=>{
    window.location.href='./index.html';
 }
 )