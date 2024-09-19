let cantidad = document.getElementById('cantidad');  
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let password = '';


const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';


function generar(){

    let numeroDigitado = parseInt (cantidad.value);


  
    if( numeroDigitado < 8){
        alert("la cantidad de caracteres tiene que ser mayor que 8");


}

  

    for(let i= 0;  i < numeroDigitado;  i++   ){

    let caracterAleatorio = cadenaCaracteres[Math.floor( Math.random()* cadenaCaracteres.length)]; 

      
    password = password+caracterAleatorio; 



    contrasena.value = password; 
    cantidad.value = null;
 
}

}

function limpiar(){

    cantidad.value=null;
    contrasena.value=null;


}
    
