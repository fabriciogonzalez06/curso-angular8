
class Avenger{

    nombre:string;
    equipo:string;
    nombreReal:string;

    puedePelear:boolean;
    peleasGanadas:number;

    constructor(nombre:string,equipo:string,nombrereal:string){

        this.nombre=nombre;
        this.equipo=equipo;
        this.nombreReal=nombrereal;

    }

}



//crear objeto de la clase 

let antman:Avenger=new Avenger("antman","cap","angel F");

console.log(antman);