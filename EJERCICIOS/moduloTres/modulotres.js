"uses strict"
    class usuarios{
        static instancias = [];
        constructor(nombre,apellido,correo,usuario,observaciones,documento){
            this.nombre = nombre;
            this.apellido = apellido;
            this.correo = correo;
            this.usuario = usuario;
            this.observaciones = observaciones;
            this.documento = documento;
            
            usuarios.instancias.push(this);
    }
     mostrarInformacion(){
        console.log(`Nombre : ${this.nombre}, Apellido : ${this.apellido}, Correo : ${this.correo}, usuario : ${this.usuario}, Observaciones ${this.observaciones}, Documento ${this.documento} `);
    }
     static datosformulario(){
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const correo = document.getElementById("correo").value;
        const documento = document.getElementById("documento").value;
        const user = document.getElementById("usuario").value;
        const observaciones = document.getElementById("observaciones").value;
        
        let usuario =  new usuarios(nombre,apellido,correo,documento,user,observaciones);
        usuario.mostrarInformacion();
    }

    static mostrartodaslasinstancias(){
        usuarios.instancias.forEach(instancia =>{
            instancia.mostrarInformacion();
        })
    }
}

    const form = document.getElementById("form");
    const inputs = document.querySelectorAll("#form input");

    const expresiones ={
        enombre:/^([a-zA-Z\s]+){2,60}$/,
        edocumento:/^([0-9]+)$/,
        ecorreo: /^([a-z0-9]+)([@])([a-z]+)([.])([a-z]{2,3})$/,
        eusuario: /^([a-zA-Z0-9\_\-]{2,25})$/,
        eobservaciones:/^([a-zA-ZÁ-ÿ\s]{1,200})$/
    }
    const campos ={
        nombre: false,
        apellido: false,
        correo: false,
        usuario: false,
        observaciones: false,
        documento: false
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
        const terminos= document.getElementById("terminos");
        if(campos.nombre && campos.apellido && campos.correo && campos.usuario && campos.observaciones && campos.documento && terminos.checked)
        {   
            usuarios.datosformulario();
            usuarios.mostrartodaslasinstancias();
            form.reset();
            document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");
            //para eliminar el mensaje despues de 5 segundos
            setTimeout(()=>{
                document.getElementById("formulario__mensaje-exito").classList.remove("formulario__mensaje-exito-activo");
                },5000);
            document.querySelectorAll(".formulario__grupo-correcto").forEach((icono)=>{
                icono.classList.remove("formulario__grupo-correcto");
            });
        }
        else
        {
            document.getElementById("formulario__mensaje").classList.add("formulario__mensaje-activo");
            
        }
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
                campos[campo] = true;
            }



                else{
                    document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
                    document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
                    document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");
                    document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle");
                    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
                    campos[campo] = false;
                }
                
            }        