
import saludar, { PI, usuario, aritmetica as ari} from "./aritmetica.js";

console.log(PI,usuario);
console.log(ari.sumar(7,3)); //le cree un alias a aritmetica para usarlo en este archivo
console.log(ari.restar(45,6));
saludar()  //llamo directamente saludar 
