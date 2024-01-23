let numeroSecreto = 0;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let etiqueta = document.querySelector(elemento);
    etiqueta.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.querySelector("#reiniciar").removeAttribute("disabled");
    }else
    // El usuario no acertó
        { if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
            
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor');
            
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    // Si ya sorteamos todos los números
    if(listaNumerosSorteados.length === numeroMaximo){
        asignarTextoElemento('p', 'Todos los números han sido sorteados');
    }else{
        

    // Si el número generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            // Llamar a la misma función
            return generarNumeroSecreto();
        }else{
            // Guardar el número en la lista
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

    
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // Limpuar la caja
    limpiarCaja();
    // Indicar mensaje de intervalo de números
    // Generar el número aleatorio
    // Inicializar el número de intentos

    condicionesIniciales();

    // Deshabilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

function intentoDeUsuario(){
    alert("click desde el boton");
    return;
}







condicionesIniciales();