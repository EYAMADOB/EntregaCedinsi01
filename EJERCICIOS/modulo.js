"use strict"
//Primer Ejercicio
/*let litros =0;
let aconvertir=0;
const decilitro =10;
const centilitro =100;
const galones =0.264;
const onzas = 33.814;
let resultado =0;
litros= prompt("digita cantidad de litros a convertir");
aconvertir=prompt("digita para convertir decilitros 1 - centilitros 2 - galones 3 - onzas 4 "," ");
if (parseInt(aconvertir)===1)
    {
        resultado=parseInt(litros)/decilitro;
        console.log(resultado)
    }
    if (parseInt(aconvertir)===2)
    {
        resultado=parseInt(litros)/centilitro;
        console.log(resultado)
    }
    if (parseInt(aconvertir)===3)
    {
        resultado=parseInt(litros)/galones;
        console.log(resultado)
    }
    if (parseInt(aconvertir)===4)
    {
        resultado=parseInt(litros)/galones;
        console.log(resultado);
    }
*/
/*Segundo Ejercicio 
let numero1 = 0;
let numero2 = 0;
let seleccion = 0;
let suma=0;
let resta=0;
let multipliacacion=0;
let division=0;
numero1= prompt("digita prmier numero");
numero2= prompt("digita segundo numero");
seleccion=prompt("digita para; sumar 1 - restar 2 - dividir 3 - multiplicar 4 "," ");
seleccion=parseInt(seleccion);
switch (seleccion){
    case 1: suma=parseInt(numero1)+parseInt(numero2);
            document.write(suma);
            break;
    case 2: resta=parseInt(numero1)-parseInt(numero2);
            document.write(resta);
            break; 
    case 3: division=parseInt(numero1)/parseInt(numero2);
            document.write(multipliacacion);
            break;
    case 4:  multipliacacion=parseInt(numero1)*parseInt(numero2);
            document.write(multipliacacion);
            break;
    default: document.write("debe ingresar un valor comprendido entre 1y 4")          
}

*/
/*Tercer Ejercicio
const factorconversion = 33.8;
let gradosC = 0;
let gradosF = 0;
let pibote = 0;
let seleccion = 0;
seleccion=prompt("SI DESEAS CONVERTIR GRADOS CENTIGRADOS A FARENHEIT DIGITA 1 O DOS PARA FARENHEIT A CENTIGRADOS")
seleccion=parseFloat(seleccion); 
switch(seleccion){
                   case 1: 
                   gradosC=prompt("digita los grados centigrados a convertir");
                   gradosC=parseFloat(gradosC);
                   pibote=gradosC;
                   gradosC=gradosC*factorconversion;
                   document.write(pibote +"  centigrados corresponden a "+gradosC+" Grados farenheit")
                   break;
                   case 2: 
                   gradosF=prompt("digita los grados Farenheit a convertir")
                   gradosF=parseFloat(gradosF)
                   pibote=gradosF;
                   gradosF=gradosF/factorconversion;
                   document.write(pibote +" grados farenheit corresponden a " +gradosF+" Grados Centigrados")
                   break;
                   default :
                   document.write("debe ingresar un valor comprendido entre 1 y 2")          
                   break;
                }                
*/
/*Cuarto ejercicio
const factorconversion = 3.785;
const costocl =25;
let costotanqueada = 0;
let galon = 0;
let litros =0;
galon=prompt("digite la cantidad de galones a Surtir");
galon=parseFloat(galon);
litros=galon*factorconversion;
costotanqueada=((litros*100)*25);
document.write("La cantidad despachada en litros es: "+litros+"y su costo es de:  "+costotanqueada);

*/
/*EJERCICIO 5
let salarioempleado =0;
const auxitrans =0.06;
const despension = 0.02;
const despensionmedio = 0.04;
const subfamiliar = 12000;
const despensionalto = 0.06
let basico=0;
let sueldo = 0;

basico=prompt("Digita el sueldo basico ");
basico = parseInt(basico);
if (basico > 1000000)
            {   
                sueldo = basico;
                sueldo = sueldo - (basico*despensionalto);
                document.write(sueldo);
            }
else
    {
        if (basico < 999999) 
            {
                if (basico < 699999)
                    {
                        sueldo= basico;
                        sueldo = sueldo - (basico*despension);
                        sueldo = sueldo + (basico*auxitrans);
                        document.write(sueldo);
                    }
                else 
                    {
                        sueldo= basico;
                        sueldo = sueldo - (basico*despensionmedio);
                        sueldo = sueldo + 12000;
                        document.write(sueldo);
                    }  
            }
    }
*/
    
//EJERCICIOS SEMANA 2
/*function ejerciciosuno(){
    console.log("ejercicio Uno "); 
    let arreglouno = [];
    for(let i = 1; i <= 100; i++)
        {
        //genero numeros aleatorios con Math interv 1 a 100 tofixed 0 elimina decimales
        arreglouno.push((Math.random()*(100 -1) + 1).toFixed(0));      
        }
        console.log(arreglouno);
        console.log("Estes es el arreglo original" + "<br/>")
       //filtro con propiedad filter usando element para condicionar los pares con mod(%) 2 0 0 
    let nuevoarreglo = arreglouno.filter(element => element % 2 == 0);
    console.log("ARREGLO FILTRADO POR PARES"+ "<br/>");
    console.log(nuevoarreglo)      
  }*/
  function ejerciciodos(){
    console.log("Ejerciico Dos");
    let arreglodos = [];
    let suma = 0;
    for(let i = 1; i <= 150; i++)
        {
        //genero numeros aleatorios con Math interv 1 a 100 tofixed 0 elimina decimales
        arreglodos.push(i); 
        suma= suma + i;    
        }
        console.log(arreglodos);
        console.log("Estes es el arreglo de 150 numeros" + "<br/>");
        console.log("Esta es la suma de los primeros 150 numeros : " + suma);
       //filtro con propiedad filter usando element para condicionar los pares con mod(%) 2 0 0 
    //let nuevoarreglo = arreglouno.filter(element => element % 2 == 0);
    //console.log("ARREGLO FILTRADO POR PARES"+ "<br/>");
    //console.log(nuevoarreglo)      
   }
   function ejerciciotres(){
    let producto = 0;
    let suma = 0;
    let vectorproductos = [];
    console.log("Ejercicio Tres")
    for(let i=0;i<=9;i++)
        {
            let dato = prompt("digita el precio  para que el programa lo lea");
            dato = parseInt(dato);
            vectorproductos.push(dato);
            suma= suma+dato;
        }
        console.log(vectorproductos);
        console.log("Esta es la suma de los precios ingresados  $ " + suma);    
   }
 function ejerciciocuatro(){
    console.log("Ejercicio 4");
    let promedio = 0;
    let suma = 0;
    let vectornotas = [];
    console.log("Ejercicio Cuatro")
    for(let i=0;i<=11;i++)
        {
            let nota = prompt("digita la Nota "+ i+1);
            nota = parseFloat(nota);
            vectornotas.push(nota);
            suma= suma+nota;
        }
        promedio = suma/12;
        if (promedio < 6)
            {
             console.log("estas son las notas" + vectornotas);
             console.log("El estudiante a reprobado");   
            }
        if (promedio >=6) 
            {
                console.log("estas son las notas" + vectornotas);
                console.log("El estudiante a aprobado");
            }
 }
 //ejercicio 5
 function ejerciciocinco(){
    console.log("Ejercicio Cinco");
    let arreglocinco = [];
    let suma = 0;
    let validadorM = 0;
    for(let i = 1; i <= 50; i++)
        {
          if (i % 3 == 0)
          {
           validadorM = validadorM + 1;
           arreglocinco.push(i); 
          }
        }       
        
        console.log("Estos son los multiplos de 3 en los pirmeros 50  numeros  " + arreglocinco);
        console.log("Esta es la cantidad de numeros multiplos de 3 -->  " + validadorM);         
   }
 function ejercicioseis(){
    console.log("Ejercicio Seis");
    let continuar= false;
    let arregloseis = [];
    do
    {
    console.log("digita Nota");
    let nota = prompt("Digita nota");
    nota =  parseFloat(nota);
    if (isNaN(nota))
    {
        alert("Error, No digitaaste un numero");
    }   
    else {
        alert("¡Dato válido! Es un número.");
        arregloseis.push(nota);
        alert("este es la nota que ingresaste : " + nota);
    }
    continuar = confirm("Quieres ingresar mas notas");
    } while (continuar == true)
    alert("Estas son las notas que ingresaste : " + arregloseis);
 }
 function ejerciciosiete(){
    alert("Ejercicio Siete");
    let continuar= false;
    let arreglosiete = [];
    do
    {
    let num = prompt("Digita numero");
    num =  parseInt(num);
    if (isNaN(num))
    {
        alert("Error, No digitaaste un numero");
    }   
    else {
        alert("¡Dato válido! Es un número.");
        arreglosiete.push(num);
    }
    continuar = confirm("Quieres ingresar mas numeros");
    } while (continuar == true)
    let nuevoarreglo = arreglosiete.filter(element => element % 2 == 0);
    alert("Estas son los numeros que ingresaste : " + arreglosiete);
    alert("Estos son los numeros pares encontrados en los numeros digitados " + nuevoarreglo );

 }
 function ejercicioocho(){
    alert("Ejercicio Ocho");
    let continuar= false;
    let arreglocho = [];
    do
    {
    let sueldo = prompt("Digita sueldo");
    sueldo =  parseInt(sueldo);
    if (isNaN(sueldo))
    {
        alert("Error, No digitaaste un numero");
    }   
    else {
        alert("¡Dato válido! Es un número.");
        arreglocho.push(sueldo);
    }
    continuar = confirm("Quieres ingresar mas sueldos");
    } while (continuar == true)
    let nuevoarreglo = arreglocho.sort();
    alert("Este es el sueldo mas bajo : " + nuevoarreglo[0]);
    alert("Estos son los sueldos que ingresaste " + nuevoarreglo );
 }     
 function ejercicionueve()
 {
    let resultado = 1;
    let modulo=1;
    let continuar = false;
    let base =1;
    let exponente = 0;
    let basem = 0;
    do
    {   base =1;
        exponente = 0;
        basem = 0;
        resultado = 1;
        base = prompt("Digita la base");
        base =  parseInt(base);
        basem = base ;
        if (isNaN(base))
            {
                alert("Error, No digitaaste un numero");
            }   
        /*else {
            alert("¡Dato válido! Es un número.");
            //arreglocho.push(sueldo);
             }*/
        exponente = prompt("Digita el exponente");
        exponente =  parseInt(exponente);
        if (isNaN(exponente))
            {
                alert("Error, No digitaaste un numero");
            }   
        /*else {
            alert("¡Dato válido! Es un número.");
            //arreglocho.push(sueldo);
            }*/
        if (exponente == 0)
        {
            resultado = 1;
            alert("Todo número elevado a CERO es :  " + resultado);
        }
        else
        {
            for(let i=0;i<exponente;i++)
            {
                resultado= resultado*base;
            }
        }
        alert("este es el numero que elevaste  : " + base);
        alert(" Esta es la potencia a la que se elevará" + exponente);
        alert("El resultado es  " + resultado);
        continuar = confirm("Quieres ingresar mas datos");
    }while (continuar == true)
        //let nuevoarreglo = arreglocho.sort();
}  


//ejerciciosuno();
//ejerciciodos();
//ejerciciotres();
//ejerciciocuatro();
//ejerciciocinco();
//ejercicioseis();
//ejerciciosiete();
//ejercicioocho();
//ejercicionueve();