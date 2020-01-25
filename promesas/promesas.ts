//crear una promesa

let prom1=new Promise( function(resolve, reject){

    setTimeout(()=>{
        console.log("promesa terminada");

        //termina bien
        //resolve();

        //termina mal
        reject();
    
    },1500);

})


//llamar a la promesa y sus funciones 
//primero va la función que todo se ejecuto bien y despues el error
prom1.then(function(){
    console.log("ejecutame cuando se termine bien!!");
},
function(){
    console.error("Ejecutame si todo sale mal!!");
});