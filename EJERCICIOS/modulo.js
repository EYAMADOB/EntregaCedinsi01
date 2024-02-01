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
//Cuarto ejercicio
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

