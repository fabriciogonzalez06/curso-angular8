//crear una interface
interface Xmen{
    nombre:string,
    poder:string
}

function enviarMision(xmen:Xmen){

    console.log("enviando a :  " + xmen.nombre);
}

function enviarCuartel(xmen:Xmen) {

    console.log("enviando al cuartel  :  " + xmen.nombre);
}


//crear objeto y decir que es de tipo interface
let wolworine:Xmen={
    nombre:"Wolworine",
    poder:"Regeneración"
}

enviarMision(wolworine);
enviarCuartel(wolworine);