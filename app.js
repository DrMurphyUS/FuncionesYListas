
let numeroSecreto = generarNumeroSecreto();



function asignarTextoElemento(elemento , texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML= texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroDeUsuario===numeroSecreto);
    // igual en valor e igual en tipo ===
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

asignarTextoElemento('h1','Juego Del Número Secreto');
asignarTextoElemento('p','Indica un numero del 1 al 100');