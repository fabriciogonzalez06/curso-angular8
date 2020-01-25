function activar(quien:string,objeto:string="alarma",hora?:string){

let mensaje:string;

if(hora){
     console.log(`${quien} activo  la  ${objeto} a las ${hora}`);
}else{
    console.log(`${quien} activo  la  ${objeto}`);
}

}


activar("Fabricio","estufa","12 pm");