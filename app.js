
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
console.log(numeroSecreto);


function asignarTextoElemento(elemento , texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML= texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // igual en valor e igual en tipo ===
    console.log(numeroSecreto);
    if(numeroDeUsuario === numeroSecreto){
    asignarTextoElemento('p',`ACERTASTE EL NÚMERO EN ${intentos} ${(intentos === 1)?'INTENTO':'INTENTOS'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        //El usuario no acerto
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor')
        }else{
            asignarTextoElemento('p','El número secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
    
}
function limpiarCaja(){
   document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

asignarTextoElemento('h1','Juego Del Número Secreto');
asignarTextoElemento('p','Indica un numero del 1 al 10');