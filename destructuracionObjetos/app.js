//destructuracion de un objeto
var persona = {
    nombre: "Fabricio",
    apellido: "Gonzalez",
    edad: 30
};
var nombre = persona.nombre, apellido = persona.apellido, edad = persona.edad;
console.log("Objeto  " + nombre + "  " + apellido + "  " + edad);
//destructuracion de un array
var persona2 = ["Mario", "Diand", "Jose"];
var n1 = persona2[0], n2 = persona2[1], n3 = persona2[2];
console.log("Array " + n1 + "  " + n2 + "  " + n3);
