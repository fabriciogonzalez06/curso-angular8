var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombrereal) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombrereal;
    }
    return Avenger;
}());
//crear objeto de la clase 
var antman = new Avenger("antman", "cap", "angel F");
console.log(antman);
