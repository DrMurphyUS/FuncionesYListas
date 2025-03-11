
let numeroSecreto = generarNumeroSecreto();

console.log(numeroSecreto);

function asignarTextoElemento(elemento , texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML= texto;
    return;
}
function intentoDeUsuario(){
    alert ('Click desde la funcion');
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

asignarTextoElemento('h1','Juego Del Número Secreto');
asignarTextoElemento('p','Indica un numero del 1 al 100');