import saludar, { PI, usuario, aritmetica as ari} from "./aritmetica.js";
import cuentaCaracteres, { aleatorio, cadenaAArreglo, capicua, celciusFarenheit, cuentaCarac, eliminarCaracteres, factorial, invetirCadena, palindromo, parImpar, primo, recortarTexto, repetirTexto, textoEnCadena } from "../ejercicios/ejercicios.js";


console.log(PI,usuario);
console.log(ari.sumar(7,3)); //le cree un alias a aritmetica para usarlo en este archivo
console.log(ari.restar(45,6));
saludar()  //llamo directamente saludar 


cuentaCaracteres("");
cuentaCaracteres("Hola Mundo");
cuentaCarac("Cadena en una arrow function"); 

recortarTexto("hola buenos dias", 8);

cadenaAArreglo("hola esta es una frase separada por espacios", " ");

repetirTexto("hola mundo", 3);

invetirCadena("hola mundo");

textoEnCadena("Occaecatno duis fugiatno voluptate nostrud enim laborum.", "no");

palindromo("hola");

eliminarCaracteres("xyz1, xyz2, xyz3, xyz4, xyz5", "xyz");

aleatorio();

capicua(2002);

factorial(5);

primo(7);

parImpar(2);

celciusFarenheit(3, "C");
celciusFarenheit(32, "F");

