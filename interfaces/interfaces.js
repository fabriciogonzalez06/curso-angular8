function enviarMision(xmen) {
    console.log("enviando a :  " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("enviando al cuartel  :  " + xmen.nombre);
}
//crear objeto
var wolworine = {
    nombre: "Wolworine",
    poder: "Regeneración"
};
enviarMision(wolworine);
enviarCuartel(wolworine);
