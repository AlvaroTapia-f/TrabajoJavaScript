//Ejercicio1
function booleanEsPar(numero){
    if (numero%2 === 0) {
        return true;
    } else {
        return false;
    }
}

let numeroParOImpar = 101;
console.log("El número " + numeroParOImpar + " es par: " + booleanEsPar(numeroParOImpar));
numeroParOImpar =102;
console.log("El número " + numeroParOImpar + " es par: " + booleanEsPar(numeroParOImpar));

//Ejercicio2
function convertirCelsiusAFahrenheit(valorCelsius){
    let valorFahrenheit = (valorCelsius * 1.8) + 32;
    return valorFahrenheit;
}

console.log(convertirCelsiusAFahrenheit(60));