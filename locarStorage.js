const botonGuardarCorreo = document.getElementById('bottGuardarCorreo');
const botonEliminarCorreo = document.getElementById('bottEliminarCorreo');
const parrafoCorreo = document.getElementById('emailGuardado');
const correoIngresado = localStorage.getItem("email");

if(correoIngresado){
    parrafoCorreo.textContent = `El correo guardado es: ${JSON.parse(correoIngresado)} `;
}

const guardarCorreo = () =>{
    const correo = document.getElementById('email').value;
    
    if(! correoIngresado){
        localStorage.setItem("email", JSON.stringify(correo));
    }
}


botonGuardarCorreo.addEventListener('click', () =>{
    guardarCorreo();
});

botonEliminarCorreo.addEventListener('click', () =>{
    localStorage.removeItem("email")
});