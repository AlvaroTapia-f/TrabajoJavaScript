//Introducción al DOM
const cambiarColor = () =>{
    const parrafos = document.querySelectorAll('.cambioColor')
    parrafos.forEach((parrafo) => {
        parrafo.classList.add('textoAzul')
    });
}




document.getElementById('botonCambioColor').addEventListener('click', () => {
    console.log("El usuario hizo click");
    cambiarColor();
})

const capturarValorIngresado = () =>{
    const textoIngresado = document.getElementById('texto').value;
    alert("Has ingresado: " + textoIngresado);
}

const botonInput = document.getElementById('botonInput');
botonInput.addEventListener('click', () => {
    capturarValorIngresado();
})