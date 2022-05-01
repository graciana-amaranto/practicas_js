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

//herencia prototipica
function Perro(nombre, genero, tamanio) {
    this.super = Animal;
    this.super(nombre, genero);
    this.tamanio = tamanio;
}

//perro esta heredando variales y metodos de Animal
Perro.prototype = new Animal;
Perro.prototype.constructor = Perro; 

//si quiero puedo sobreescribir un metodo que este heredando
Perro.prototype.sonar = function (){
    console.log("Soy un perro y mi sonido es un ladrido");
}
//puedo agregar a Perro un metodo que no este en la funcion padre Animal:
Perro.prototype.ladrar = function(){
    console.log("guau guau");
}




const snoopy = new Perro("snoppy", "macho", "mediano"),
    lolaBunny = new Animal("Lola Bunny", "hembra");

console.log(snoopy, lolaBunny);

snoopy.sonar()
snoopy.saludar5()
snoopy.ladrar()

lolaBunny.sonar()
lolaBunny.saludar5()


//Clases y herencias:podemos escribir los prototipos como clases; es una forma mas simple --> sugar syntax

class Animall {
    constructor(nombre, genero){  //constructor es un metodo especial de las clases que se ejecuta en momento de instanciar
        this.nombre = nombre;
        this.genero = genero;
    }
    //metodos: se simplifica su escritura, y ya no necesito asignarlas a prototype; js lo hace por nosotros.
    sonar(){
        console.log("hago sonidos porque estoy vivo")
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre}`);
    }

}

class Dog extends Animall{
    constructor(nombre, genero, tamanio){
        super(nombre, genero) //atributos de la clase padre que ya existen (animal)
        this.tamanio = tamanio; //atributo nuevo
    }
    sonar(){
        console.log("soy un perro y mi sonido es ladrar"); //sobreescribo un metodo que ya existe en el padre
    }
    ladrar(){  //creo un nuevo metodo para esta clase y que no existe en el padre
        console.log("guauu guauu");
    }
    
}



const mimi =  new Animall("mimi", "hembra"),
    scooby = new Dog("scooby", "macho", "gigante");

console.log(mimi, scooby)

//metodos estaticos, getters y setters

class Cat extends Animall{
    constructor(name, gender, size){
        super(name, gender) //atributos que ya existen en Animal
        this.size = size;
        this.breed = null; //al inicio de se cree un gato, raza es nulo, no necesito ponerlo en constructor()
    }
    sonar(){
        console.log("soy un gato y mi sonido es el maullido")
    }
    maullar(){
        console.log("miau miau");
    }
    static queEres(){ //el metodo estatico se puede usar sin necesidad de crear un objeto con esta clase "const leona = new Cat..."
        console.log("leona es una gata de 6 años")
    }
    get getRaza(){ //metodo obtenedor get
        return this.breed;
    }
    set setRaza(raza){ //metodo set: metodo establecedor que modifique el valor del atributo
        this.breed = raza;
    }
}

Cat.queEres(); //aca lo llamo 


const leona = new Cat("Leona", "Hembra", "Mediana")
console.log(leona)
leona.sonar()
leona.maullar()
leona.saludar()

console.log(leona.getRaza);  //muestra null porque todavia no le di ningun valor
leona.setRaza = "Siamés"; //le doy un valor como si fuera un ATRIBUTO, no una funcion, si lo hago como funcion me tirar error
console.log(leona.getRaza);

//clase 30 - metodos alert, confirm, prompt

let alerta = alert('Hola esta es una alerta'),  //simple aviso, me da undefined siempre
    confirmacion = confirm("hola esta es una confirmacion"),  //tengo 2 botones, si doy aceptar me guarda TRUE, si doy cancelar me guarda FALSE
    aviso = prompt("hola esto es un aviso y le permite al usuario ingresar un valor"); //si escribo algo me guarda eso, si escribo pero le doy cancelar me guarda NULL

//expresiones regulares: se usan para validaciones de todo tipo

let cadena = "Do consectetur culpa incididunt sit id cupidatat incididunt.";

let expresionRegular = new RegExp("culpa","ig") //lo que quiero buscar/ bandera
let expresionRegular2 = /culpa/ig; //i significa q ignore las mayus, g me cuenta todas las palabras encontradas, no solo la primera.

console.log(expresionRegular.test(cadena)); //me devuelve true o false si encuentra la palabra o no.
console.log(expresionRegular.exec(cadena)); //me devuelve un arreglo con mas info (donde, posicion...)

//funciones anónimas autoejecutables: es una funcion en donde se engloba todo el codigo que quiero ejecutar


