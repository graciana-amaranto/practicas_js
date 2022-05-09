/**  1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.  
**/

//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

export default function cuentaCaracteres (cadena=""){   //funcion declarada
    if(!cadena){
        console.warn("No ingresaste ninguna cadena.")
    }
    else{
        console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres. `)
    }

}

//la puedo hacer tambien como funcion expresada - arrow function:

export const cuentaCarac = (cadena="") => 
    (!cadena)  //operador ternario
    ? console.warn("No ingresaste ninguna cadena.")
    : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres. `);


//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

export const recortarTexto = (cadena="", longitud = undefined) =>
    (!cadena)
    ? console.warn("No ingresaste ninguna cadena.")
    : (longitud === undefined)
        ? console.warn("No ingresaste ninguna longitud para recortar la cadena.")
        : console.info(cadena.slice(0, longitud));

//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

export const cadenaAArreglo = (cadena="", separador = undefined) =>
    (!cadena)
    ? console.warn("No ingresaste ninguna cadena.")
    : (separador === undefined)
        ? console.warn("No ingresaste el caracter para separar.")
        :console.info(cadena.split(separador));

//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.  

export const repetirTexto = (texto="", veces = undefined) =>{
    if (!texto) return console.warn("No ingresaste ningun texto");
    if (veces === undefined) return console.warn("no ingresaste las veces que quieres que se repita el texto.");
    if (veces === 0) return console.error("el numero de veces no puede ser cero");
    if (Math.sign(veces) === -1) return console.error("el numero de veces no puede ser negativo.")

    for (let i = 1; i <= veces; i++){
        console.info(`${texto}, ${i}`);
    }
}

//5)Programa una funcion que invierta las palabras de una cadena de texto, pe, miFuncion("Hola Mundo") devolvera "odnuM aloH"

export const invetirCadena = (cadena ="") => 
    (!cadena)
    ? console.warn("No ingresaste ninguna cadena.")
    : console.info(cadena.split("").reverse().join("")); //reverse da vuelta los elem de un array, join une los elementos del array en una cadena de texto
    
//6)Programa una funcion para contar el numero de veces que se repite una palabra en un texto largo, pe miFuncion("hola mundo adios mundo", "mundo") devolvera 2

export const textoEnCadena = (cadena = "", palabra = "") =>{
    if (!cadena) return console.warn("No ingresaste ninguna cadena");
    if (!palabra) return console.warn("No ingresaste la palabra a evaluar");
    
    let i = 0,
        contador = 0;

    while (i!== -1){   //si no encuentra la palabra, indexof me tira -1
        i = cadena.indexOf(palabra, i);
        if (i !== -1){
            i++;
            contador++;
        }
    }
    return console.info(`La palabra "${palabra}" se repite ${contador} veces.`);

}

//7) Programa una funcion que valide si una palabra es un palindromo (que se lee igual en ambos sentidos).

export const palindromo = (palabra = "") =>{
    if (!palabra) return console.warn("No ingresaste ninguna palabra");

    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");

    return (palabra === alReves)
    ? console.info(`Si es un palindromo, la palabra original es ${palabra}, y la palabra al reves es ${alReves}`)
    : console.info(`No es un palindromo, la palabra original es ${palabra}, y la palabra al reves es ${alReves}`);
}

//8) Programa una funcion que elimine cierto patron de caracteres de un texto dado, pe. miFuncion ("xyz1, xyz2, xyz3, xyz4, xyz5", "xyz") devolvera "1,2, 3, 4, 5"

export const eliminarCaracteres = (texto = "", patron = "") =>
    (!texto)
    ? console.warn("No ingresaste ningun texto.")
    : (!patron)
        ? console.warn("no ingresaste ningun patron para eliminar")
        : console.info(texto.replace(new RegExp(patron, "ig"), ""));  //reemplaza el patron dentro del regexp por "nada", de esa forma solo elimino

//ejemplo de uso de replace()
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
        
const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
 // expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"


 //9) Programa una funcion que obtenga un numero aleatorio entre 501 y 600

export const aleatorio = () => console.info(Math.round(Math.random() * 100 + 500)) //random me da entre 0 y 1, con round lo hago del 1 al 100

//10) programa una funcion que reciba un numero y evalue si es capicúa o no. pe. mifuncion(2002) devolverá true

export const capicua = (numero = 0) =>{
    if (!numero) return console.warn("No ingresaste ningun numero")
    if (typeof numero !== "number") return console.error(`El valor "${numero}" no es un numero`)

    numero = numero.toString();
    let numeroAlReves = numero.split("").reverse().join("");

    return (numero === numeroAlReves)
    ? console.info(`el numero ${numero} si es capicua, al reves es ${numeroAlReves}`)
    : console.info(`el numero ${numero} no es capicua. Al reves es ${numeroAlReves}`)
}

//11) programa una funcion que calcule el factorial de un numero

export const factorial = (numero = undefined) =>{
    if (numero === undefined) return console.warn("No ingresaste ningun numero")
    if (typeof numero !== "number") return console.error(`El valor "${numero}" no es un numero`)
    if (numero === 0) return console.error("el numero no puede ser 0")
    if (Math.sign(numero) === -1) return console.error("el numero no puede ser negativo")

    let factorial = 1;

    for (let i = numero; i > 1; i--){
        factorial *= i; 
    }

    return console.info(`El factorial del numero ${numero} es ${factorial}`);
}

//12) programa una funcion que determine si un numero es primo (solo divisible por si mismo y por 1) ej miFuncion(7) devolvera true

export const primo = (numero = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste ningun numero")
    if (typeof numero !== "number") return console.error(`El valor "${numero}" no es un numero`)
    if (numero === 0) return console.error("el numero no puede ser 0")
    if (numero === 1) return console.error("el numero no puede ser 1")
    if (Math.sign(numero) === -1) return console.error("el numero no puede ser negativo")

    let esDivisible = false;

    for (let i = 2; i < numero; i++){
        if ((numero % i) === 0){
            esDivisible = true;
            break;
        }
    }
    return (esDivisible)
    ? console.info(`El numero ${numero} NO es primo`)
    : console.info(`El numero ${numero} es un numero primo. `)
}

//13) programa una funcion que determine si un numero es par o impar

export const parImpar = (numero = undefined) =>{
    if (numero === undefined) return console.warn("No ingresaste ningun numero")
    if (typeof numero !== "number") return console.error(`El valor "${numero}" no es un numero`)

    return ((numero % 2) === 0)
    ? console.info(`El numero ${numero} es un numero par`)
    : console.info(`El numero ${numero} es un numero impar`)
}

//14) Programa una funcion que convierta grados Celcius a Farenheit y viceversa: 0°C = 32 °F, ej miFuncion(0, "C" devolvera 32 °F)

export const celciusFarenheit = (numero = undefined, letra = "") => {
    if (numero === undefined) return console.warn("No ingresaste ningun numero")
    if (typeof numero !== "number") return console.error(`El valor "${numero}" no es un numero`)
    if (typeof letra !== "string") return console.error(`El valor "${letra}" no es una letra`)
    if (letra.length !== 1) return console.warn("Valor de unidad no reconocido.")

    if (letra === "C"){
        return console.info(`${numero}°C = ${Math.round((numero * 1.8) + 32)}°F`);
    }
    if (letra === "F"){
        return console.info(`${numero}°F = ${Math.round(((numero -32) / 0.55))}°C`)
    }
}



