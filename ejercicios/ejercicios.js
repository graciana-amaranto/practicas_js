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

const eliminarCaracteres = (texto = "", patron = "") =>
    (!texto)
    ? console.warn("No ingresaste ningun texto.")
    : (!patron)
        ? console.warn("no ingresaste ningun patron para eliminar")
        : console.info()

