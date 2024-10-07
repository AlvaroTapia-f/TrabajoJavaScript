
function reducirNumero(){
    let numeroReducible = 10;
    while(numeroReducible > 0){
        console.log(numeroReducible);
        numeroReducible--;    
    }
}

reducirNumero();

function MayorQueCien(){
    let numeroIngresado;
    do {
        numeroIngresado = prompt("Ingrese un número, por favor");
    } while (numeroIngresado <= 100){
        console.log("El número ingresado por el usuario es: " + numeroIngresado);
    }
}
