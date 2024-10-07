function mayor(a, b){
    let c = 0;
    if(a > b){
        c = a;
    } else {
        c = b;
    }
    
    return c
}

let resultadoMayor = mayor(14, 5);
console.log("El mayor de los número es: " + resultadoMayor);
