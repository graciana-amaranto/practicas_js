export const PI = Math.PI;

export let usuario = "Jon";
let pass = "12345";  //puedo exportar solo lo que necesite a otro modulo js
//export default pass;  no puedo poner export default en la misma linea, tengo que exportar despues de crear la variable

//agrupar funciones y devolverlas en un objeto

function sumar(a, b){
    return a + b;
}

function restar(a, b){
    return a - b;
}

export const aritmetica = {
    sumar,
    restar
};

export default function saludar(){  //solo se puede tener una sola funcion x default
    console.log("hola!!!!")
}
