let persona = {
    nombre : "Alvaro",
    edad: 21,
    ciudad: "Mendoza",
}

console.log("Propiedades iniciales: " + persona.nombre + ", " + persona.edad + ", " + persona.ciudad );
const modificarCiudad = (persona, ciudad) => {
    persona.ciudad = ciudad;
}

modificarCiudad(persona, "Córdoba");
console.log("Propiedades actualizadas: " + persona.nombre + ", " + persona.edad + ", " + persona.ciudad );

let libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    año: 1967,
}

const libroAntiguo = (libro) => {
    const fechaActual = new Date();
    const diferenciaEnAños = fechaActual.getFullYear() - libro.año;
    if(diferenciaEnAños > 10){
        console.log("El libro " + libro.titulo + " es antiguo");
    } else{
        console.log("El libro " + libro.titulo + " es reciente");
    }
}

libroAntiguo(libro);