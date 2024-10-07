let numeros1 = Array.from({length: 10}, (_,i) => i + 1);
let numeros2 = Array.from({length: 20}, (_,i) => i + 1);


/*
let numerosX2 = [];
numeros.forEach((num, i) =>{
    numerosX2[i] = num * 2;
});
*/

let numerosX2 = numeros1.map((numero) => numero * 2 );

console.log("Número originales: " + numeros1);
console.log("Números multiplicados: " + numerosX2);

let pares = [];
for(let i = 0; i <= 19 ; i++){
    if(numeros2[i] % 2 == 0){
        pares.push(numeros2[i]);
    }
}

console.log("Primeros 10 números pares: " + pares);