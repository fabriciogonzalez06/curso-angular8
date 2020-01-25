function activar(quien, objeto, hora) {
    if (objeto === void 0) { objeto = "alarma"; }
    var mensaje;
    if (hora) {
        console.log(quien + " activo  la  " + objeto + " a las " + hora);
    }
    else {
        console.log(quien + " activo  la  " + objeto);
    }
}
activar("Fabricio", "estufa", "12 pm");
