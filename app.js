let numeroSecreto;
let intentos;

function iniciarJuego(){
    numeroSecreto = generarNumeroSecreto();
    intentos = 0;
}

function juegoNuevo(){
    alert("Nuevo Juego iniciado");
    // limpiar entrada de número
    let entradaNumero = document.querySelector("#valorUsuario");
    entradaNumero.value = '';
    iniciarJuego();
    console.log(numeroSecreto);
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    intentos++;
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        alert(`Felicidades has acertado en ${intentos} ${intentos > 1 ? "intentos": "intento"}`);
        juegoNuevo();
        return;
    } 
    
    if (numeroDeUsuario > numeroSecreto){
        alert("Ingresa un número más bajo");
    } else{
        alert("Ingresa un número más alto");
    }
}


function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

iniciarJuego();
asignarTextoElemento('h1','Juego del número secreto!!!');
asignarTextoElemento('p',`Indica un número del 1 al 10`);