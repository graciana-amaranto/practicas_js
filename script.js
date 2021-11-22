//clase 22: Prototipos: Programacion orientada a objetos
/*
Js esta basada en prototipos, no en clases. 
Cuando tenemos una clase, en realidad el motor del navegador y el compilador
del lado del servidor (por ej node.js), lo que hacen es transformar esa clase a 
una funcion prototipal. 
Prototipo: es un mecanismo por el cual un obj puede heredar de un objeto padre, atributos y metodos.
El prototipo mas primitivo que tiene js es Object()

Clases: "modelo" a seguir
Objetos: es una instancia de una clase
    -Atributos: es una caracteristica o propiedad del objeto
                son variables dentro de un objeto
    -Metodos: son las acciones que un objeto puede realizar
              son funciones dentro de un objeto
*/

//funcion constructora (genera un prototipo vacío) usa UpperCamelCase
function Animal1(nombre, genero) {
    //atributos
    this.nombre = nombre;
    this.genero = genero; //tanto atributos como metodos llevan this

    //metodos(dentro de la funcion)
    this.sonar1 = function (){ //la funcion se va a repetir por cada instancia que cree
        console.log("hago sonidos porque estoy vivo")
    }
    this.saludar1 = function (){
        console.log(`Hola me llamo ${this.nombre} `)
    }
}

//funcion constructora donde asignamos los metodos al prototipo,no a la funcion como tal
function Animal(nombre, genero) {
    //atributos
    this.nombre = nombre;
    this.genero = genero;
}
//metodos agregados AL PROTOTIPO de la funcion constructora, FUERA de la funcion
Animal.prototype.sonar =  function (){ 
    console.log("hago sonidos porque estoy vivo")
}
Animal.prototype.saludar5 = function (){
    console.log(`Hola me llamo ${this.nombre} `)
}


const snoopy = new Animal("snoppy", "macho"),
    lolaBunny = new Animal("Lola Bunny", "hembra");

console.log(snoopy, lolaBunny);

snoopy.sonar()
snoopy.saludar5()
lolaBunny.sonar()
lolaBunny.saludar5()