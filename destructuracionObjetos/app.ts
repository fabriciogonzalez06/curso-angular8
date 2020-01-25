
//destructuracion de un objeto
let persona={
    nombre:"Fabricio",
    apellido:"Gonzalez",
    edad:30
}


let {nombre,apellido,edad} = persona;

console.log(`Objeto  ${nombre}  ${apellido}  ${edad}`);


//destructuracion de un array
let persona2:string[]=["Mario","Diand","Jose"];

let [n1,n2,n3] =persona2;

console.log(`Array ${n1}  ${n2}  ${n3}`);
