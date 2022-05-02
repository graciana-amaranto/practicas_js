import saludar, { PI, usuario, aritmetica as ari} from "./aritmetica.js";
import cuentaCaracteres, { cadenaAArreglo, cuentaCarac, invetirCadena, palindromo, recortarTexto, repetirTexto, textoEnCadena } from "../ejercicios/ejercicios.js";


console.log(PI,usuario);
console.log(ari.sumar(7,3)); //le cree un alias a aritmetica para usarlo en este archivo
console.log(ari.restar(45,6));
saludar()  //llamo directamente saludar 

//ejercicio1
cuentaCaracteres("");
cuentaCaracteres("Hola Mundo");
cuentaCarac("Cadena en una arrow function"); 

recortarTexto("hola buenos dias", 8)

cadenaAArreglo("hola esta es una frase separada por espacios", " ")

repetirTexto("hola mundo", 3)

invetirCadena("hola mundo")

textoEnCadena("Occaecatno duis fugiatno voluptate nostrud enim laborum.", "no")

palindromo("hola")