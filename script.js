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
/*--
let alerta = alert('Hola esta es una alerta'),  //simple aviso, me da undefined siempre
    confirmacion = confirm("hola esta es una confirmacion"),  //tengo 2 botones, si doy aceptar me guarda TRUE, si doy cancelar me guarda FALSE
    aviso = prompt("hola esto es un aviso y le permite al usuario ingresar un valor"); //si escribo algo me guarda eso, si escribo pero le doy cancelar me guarda NULL */

//expresiones regulares: se usan para validaciones de todo tipo

let cadena = "Do consectetur culpa incididunt sit id cupidatat incididunt.";

let expresionRegular = new RegExp("culpa","ig") //lo que quiero buscar/ bandera
let expresionRegular2 = /culpa/ig; //i significa q ignore las mayus, g me cuenta todas las palabras encontradas, no solo la primera.

console.log(expresionRegular.test(cadena)); //me devuelve true o false si encuentra la palabra o no.
console.log(expresionRegular.exec(cadena)); //me devuelve un arreglo con mas info (donde, posicion...)

//temporizadores setTimeOut y setInterval: permiten lanzar otras acciones despues de haber pasado cierto tiempo o n cantidad de veces

console.log("inicio")
let timeout3Segundos = setTimeout(() => {
    console.log("ejecutando un setTimeout, esto se ejecuta una sola vez.")
}, 3000); //3 segundos

/*
setInterval(() => {
    console.log("Ejecutando un setInterval, esto se ejecuta indefinidamente cada cierto intervalo de tiempo")
}, 2000); */

let intervalo = setInterval(() => {
    console.log("Ejecutando un setInterval, esto se ejecuta indefinidamente cada cierto intervalo de tiempo")
}, 10000000);

/*
setInterval(() => {
    console.log(new Date().toLocaleDateString())  muestra la hora cada segundo en una linea nueva
}, 1000);
*/
clearTimeout(timeout3Segundos); //para cancelarlo, no se ejecuta nunca, tengo que guardar el setTimeout en una variable primero
clearInterval(intervalo); 

/* 

Asincronia y Event Loop 

Procesamiento Singlethread y Multithread: significa que solo puede ejecutar una cosa a la vez, simplifican la escritura de codigo pero no pueden realizar operaciones largas,
como el acceso a al red sin que se bloquee el hilo principal, por ej, cuando envias una solicitud a una API, el hilo principal se queda bloqueado, esto hace que la pagina web no responda.
- Lo que hace la asincronía es poder enviar solicitudes largas a la red sin bloquear el hilo principal. Js tiene un loop de eventos implementado de un solo hilo para operaciones de entrada/salida
gracias a esto es que js es altamente concurrente (posee las estructuras necesarias para definir y manejar diferentes tareas dentro de un programa.

Operaciones de Input/Output : operaciones q pasan la mayor parte del tiempo esperando la peticion del recurso que solicitamos, ej: hacemos un pago en linea, esperamos a que la API cobre y responda a los datos
Operaciones Concurrentes y Paralelas: concurrencia es cuando varias tareas van PROGRESANDO al mismo tiempo. Si son paralelas, se ejecutan AL MISMO TIEMPO. 
Operaciones Bloqueantes y No Bloqueantes: siempre hay una fase de espera cada vez que se ejecuta una operacion del codigo. Una op. bloqueante no devuelve el control a la app hasta que haya terminado toda su tarea, 
mientras que las no bloqueantes las operaciones se ejecutan y devuelven nmediatamente el control al hilo principal, no importando si han terminado o no la tarea.

Operaciones Síncronas y Asíncronas: Una operacion sincrona espera el resultado, mientras que asincrono la respuesta sucede en un futuro, se ejecuta pero no sabe cuando va a venir la respuesta, es decir no espera el resultado,
es por eso que suelta el control y se lo regresa al hilo principal. 

*/

//Código Sincrono Bloqueante

(() => {
    console.log("Codigo Sincrono");  //ejecuta primero
    console.log("Inicio"); //segundo

    function dos(){   
        console.log("Dos"); //quinto-se mantiene el tercero
    }

    function uno(){
        console.log("Uno"); //cuarto
        dos();
        console.log("Tres") //sexto-se mantiene el tercero
    }

    uno(); //tercero
    console.log("Fin"); //ultimo 
})();

//Codigo Asincrono No Bloqueante

/*
(() =>{
    console.log("Codigo Asincrono"); //ejecuta primero
    console.log("Inicio"); //segundo

    function dos(){
        setTimeout(function(){
            console.log("Dos"); //ultimo
        }, 1000);
    }

    function uno(){
        setTimeout(function(){ //ignora el settimeout y lo pone al ultimo
            console.log("Uno");  //sexto- antes que dos() porque el tiempo es menor
        }, 0);
        dos(); //ingora dos porque tiene settimeout-lo deja al ultimp
        console.log("Tres"); //cuarto
    }

    uno(); //tercero
    console.log("Fin"); //quinto
})();

*/

//Callbacks: function que se ejecuta despues de que otra lo haga. Mecanismo para trabajar con la asincronía.

function cuadradoCallback(value, callback){  //funcion que toma un valor y lo resuelve en otra funcion "callback"
    setTimeout(() => {
        callback(value, (value * value));
    },2500);
}

/*
cuadradoCallback(0, (value, result) =>{  //toma un valor y otra funcion
    console.log("Inicia callback");
    console.log(`Callback: ${value}, ${result}`);
    cuadradoCallback(1, (value, result) =>{
        console.log(`Callback: ${value}, ${result}`);
        cuadradoCallback(2, (value, result) =>{
            console.log(`Callback: ${value}, ${result}`);
            cuadradoCallback(3, (value, result) =>{
                console.log(`Callback: ${value}, ${result}`);
                cuadradoCallback(4, (value, result) =>{
                    console.log(`Callback: ${value}, ${result}`);
                    cuadradoCallback(5, (value, result) =>{
                        console.log(`Callback: ${value}, ${result}`);
                        console.log("Fin callback");
                        console.log("Callback hell!!!!");
                    });
                });
            });
            
        });
    });
}); */

/*

Promesas: Sirve como solucion al callback hell y al tedioso manejo de errores que estas tienen; habria que hacer una validacion por cada funcion dentro del callback
 Las promesas funcionan con dos recursos principales: 
 resolve: si la promesa se cumple, es decir accedemos al recurso ej peticion a una API, la promesa se cumple y se ejecuta el resolve
 reject: si la promesa por alguna razon falla, se ejecuta el reject.

*/

function cuadradoPromise(value){ 
    if (typeof value !== "number") return Promise.reject(`Error, el valor ${value} ingresado no es un numero`);
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve({
                value,
                result: value * value
        })
    },0);
    })   
}

cuadradoPromise(0) //cuando es exitoso devuelve un objeto con el valor y el resultado
    .then(obj =>{ //siguiente bloque que se va a ejecutar una vez que se cumpla la funcion inicial
        console.log("Inicia promise");
        console.log(`Promise: ${obj.value}, ${obj.result}`)
        return cuadradoPromise(1);
    })  
    .then(obj =>{
        console.log(`Promise: ${obj.value}, ${obj.result}`)
        return cuadradoPromise(2);
    })
    .then(obj =>{
        console.log(`Promise: ${obj.value}, ${obj.result}`)
        return cuadradoPromise("3");  //error, salta directamente al catch sin ejecutar los demas 
    })
    .then(obj =>{
        console.log(`Promise: ${obj.value}, ${obj.result}`)
        console.log("Fin de la promise");
    })
    .catch(err => console.error(err));  //captura el error resultante del reject



//funciones asincronas Async - Await: peticiones asincrincronas dadas de una promesa, NO REEMPLAZAN LAS PROMESAS
//la optimizacion sería que al trabajar con funciones asincronas, cada peticion la puedo guardar en una variable y evito el uso de muchos .then 

async function funcionAsincronaDeclarada (){
    try{
        console.log("inicio de async function declarada")
        let obj = await cuadradoPromise(0); //await: espera el resultado de esta ejecucion antes de pasar a la siguiente linea 
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise((1));
        console.log(`Async Function: ${obj.value}, ${obj.result}`); //cuadradoPromise(1) NO ESPERA a cuadradoPromise(0)
        
        obj = await cuadradoPromise(("2"));
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

    } catch (err) {
        console.error(`Error de Async Function declarada: ${err} `)
    }
}

funcionAsincronaDeclarada();

//la misma funcion pero expresada

const funcionAsincronaExpresada = async () => {
    try{
        console.log("inicio de async function expresada")
        let obj = await cuadradoPromise(3); //await: espera el resultado de esta ejecucion antes de pasar a la siguiente linea 
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise((4));
        console.log(`Async Function: ${obj.value}, ${obj.result}`); //cuadradoPromise(1) NO ESPERA a cuadradoPromise(0)
        
        obj = await cuadradoPromise((5));
        console.log(`Async Function: ${obj.value}, ${obj.result}`);

    } catch (err) {
        console.error(`Error de Async Function expresada: ${err} `)
    }

}

funcionAsincronaExpresada();

//Symbols: tipo de dato primitivo que una vez que lo creamos, su valor se mantiene privado para uso interno (del tipo objeto)

/*
let id = "Hola";
let id2 = "Hola"; son exactamente iguales
*/ 

let id = Symbol("id")  //ahora son diferentes. para diferenciar cada symbol agrego una descripcion
let id2 = Symbol("id") //en este caso "id", tambien puede ser un numero

const NOMBRE = Symbol("nombre"); //las constantes se escriben todo en mayus
const SALUDAR = Symbol("saludar");

const personaa = {  //creo un objeto
    [NOMBRE]: "graciana"   //el valor de "graciana" es un SIMBOLO, le doy la propiedad entre corchetes
}

personaa.NOMBRE = "graciana amaranto"; //creo una nueva propiedad, NO SE REESCRIBE, muestra que se llama NOMBRE, pero en el primero solo dice Symbol()

console.log(personaa.NOMBRE); //muestra solo "graciana amaranto"
console.log(personaa[NOMBRE])  //muestra "graciana", en ningun momento me dice que se llama NOMBRE, lo oculta

personaa[SALUDAR] = function () {
    console.log("Hola!!!!!!!")  //agrego esta funcion al objeto
}

console.log(personaa) //muestra el objeto con 2 simbolos, NOMBRE y SALUDAR
personaa[SALUDAR](); //muestra Hola!!!!!!, lleva () porque es un parametro

for (let propiedad in personaa){
    console.log(propiedad);           //muestra NOMBRE, la propiedad que cree en la linea 401, que no es del tipo Symbol
    console.log(personaa[propiedad]);  //muestra el valor de NOMBRE, osea "graciana amaranto"
} //las propiedades que tienen Symbol, no se muestran porque son privadas.

Object.getOwnPropertySymbols(personaa); //para ver las propiedades con Symbol que no me muestra normalmente.


//Sets: similar a un array pero solo de datos unicos

const set = new Set([1,2,3,3,4,5, true, false, false, {}, {}, "hola", "HOLA"])
//el 3 y false aparecen una sola vez, los objetos muestra ambos, y los holas tambien por ser case sensive.
console.log(set.size); //para saber la cantidad de elem que tiene filtrados los que se repiten

const set2 = new Set(); //otra forma de escribirlo
set2.add(1);
set2.add(2);
set2.add(3);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(true);
set2.add({});

console.log("Recorriendo set");
for (item of set){
    console.log(item);
}
console.log("Recorriendo set2");
set2.forEach(item => console.log(item)); //2 formas distintas de recorrerlos

console.log(set[0]); //undefined: NO FUNCIONA

let arregloSet = Array.from(set); //convierto el set en array para poder acceder a sus items
console.log(arregloSet[0]); //muestra 1, ahora si funciona

set.delete("hola"); //para borrar un item del set
console.log(set.has(19)) //muestra false: es para validar si un dato existe o no dentro del set. 
set2.clear(); //para limpiar todos los items de set2
