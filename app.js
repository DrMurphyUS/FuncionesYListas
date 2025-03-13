
let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];

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
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    // Si el número generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego Del Número Secreto');
    asignarTextoElemento('p','Indica un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //inicia mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Desabiliar el boton del nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();
