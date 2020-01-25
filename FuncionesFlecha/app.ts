
//ejemplo funciones de flecha

let miFuncion= function(a:string){
    return a;
}

let miFuncionF=(a:string) =>a;


console.log(miFuncion("Normal"));
console.log(miFuncion("Flecha"));


let miFuncion2=function(a:number,b:number){
    return a + b;
}

let miFuncion2F=(a:number,b:number)=> a + b;

//ejemplo 3
let miFuncion3=function(nombre:string){
    nombre.toUpperCase();
    return nombre;
}

let miFuncion3F=(nombre:string)=>{
    nombre.toUpperCase();
    return nombre;
}


let hulk={
    nombre:"hulk",
    smash(){
        setTimeout(()=>console.log(this.nombre + " smash!!"),1500);
    }
}


hulk.smash();