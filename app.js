function asignarTextoElemento(elemento , texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML= texto;    
}
function intentoDeUsuario(){
    alert ('Click desde la funcion');
}

asignarTextoElemento('h1','Juego Del Número Secreto');
asignarTextoElemento('p','Indica un numero del 1 al 100');