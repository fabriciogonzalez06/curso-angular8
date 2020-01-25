//ejemplo funciones de flecha
var miFuncion = function (a) {
    return a;
};
var miFuncionF = function (a) { return a; };
console.log(miFuncion("Normal"));
console.log(miFuncion("Flecha"));
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncion2F = function (a, b) { return a + b; };
//ejemplo 3
var miFuncion3 = function (nombre) {
    nombre.toUpperCase();
    return nombre;
};
var miFuncion3F = function (nombre) {
    nombre.toUpperCase();
    return nombre;
};
var hulk = {
    nombre: "hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash!!"); }, 1500);
    }
};
hulk.smash();
