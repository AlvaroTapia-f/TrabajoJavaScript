//Ejercicio 1
const elementoLi = document.querySelectorAll('.elementoClick');
elementoLi.forEach((elemento) =>{
    elemento.addEventListener('click', () => {
        console.log(elemento.textContent);
    })
});

//Ejercicio 2
const botonDeshabilitar = document.getElementById('botonDeshabilitar');
const botonHabilitar = document.getElementById('botonHabilitar');
botonHabilitar.classList.add('botonOculto');

const deshabilitarCampo = () =>{
    const campo = document.getElementById('campoHabilitable');
    campo.disabled = true;
    
    if(botonHabilitar.classList.contains('botonOculto')){
        botonHabilitar.classList.remove('botonOculto');
    }
}

const habilitarCampo = () =>{
    const campo = document.getElementById('campoHabilitable');
    campo.disabled = false;
    
    if(! botonHabilitar.classList.contains('botonOculto')){
        botonHabilitar.classList.add('botonOculto');
    }
}




botonDeshabilitar.addEventListener('click', () =>{
    deshabilitarCampo();
});
botonHabilitar.addEventListener('click', () =>{
    habilitarCampo();
})