"uses strict"
class usuario{
    //metodo constructor//
    constructor(nombre, apellido, documento, correo, usuario){
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.correo = correo;
        this.usuario = usuario;
    }
} 
    const form = document.getElementById("form");
    const inputs = document.querySelectorAll("#form input");

    const nombre = document.getElementById("nombres")
    const apellido = document.getElementById("apellido")
    const documento = document.getElementById("documento")
    const correo = document.getElementById("correo")
    const usu = document.getElementById("usuario")
    const observaciones = document.getElementById("observaciones")


    const expresiones ={
        enombre:/^([a-zA-Z\s]+){2,60}$/,
        edocumento:/^([0-9]+)$/,
        ecorreo: /^([a-z0-9]+)([@])([a-z]+)([.])([a-z]{2,3})$/,
        eusuario: /^([a-zA-Z0-9\_\-]{2,25})$/,
        eobservaciones:/^([a-zA-ZÁ-ÿ\s]{1,200})$/
    }
    const validarformulario = (e)=>{
        switch (e.target.name){
            case "nombre":
                validarCampo(expresiones.enombre, e.target, "nombre");
                break;
            case "apellido":
                validarCampo(expresiones.enombre, e.target, "apellido");
                 break;
            case "correo":
                validarCampo(expresiones.ecorreo, e.target, "correo");                break;
            case "usuario":
                validarCampo(expresiones.eusuario, e.target, "usuario");
                break;
            case "observaciones":
                validarCampo(expresiones.eobservaciones, e.target, "observaciones");
                break;         
            case "documento":
                validarCampo(expresiones.edocumento, e.target, "documento");
                    break;
        }
    }

    inputs.forEach((input)=>{
        input.addEventListener("keyup", validarformulario);
        input.addEventListener("blur", validarformulario);
        })
    

    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        

    })
    

    const validarCampo = (expresion, input, campo)=>{
                if(expresion.test(input.value))
                {
                console.log("funciona!");
                document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
                document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
                document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");
                document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle");
                document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");  
            }



                else{
                    document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
                    document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
                    document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");
                    document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle");
                    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
                }
                
            }        