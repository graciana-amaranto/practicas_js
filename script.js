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

//Maps: objeto iterador que sirven para almacenar conjuntos de valores asociados a un objeto

let mapa = new Map();  //creamos un map con 3 items
mapa.set("nombre", "gra");
mapa.set("apellido", "amaranto");
mapa.set("edad", 26);

console.log(mapa.size); //muestra 3
console.log(mapa.has("correo")); //muestra false
console.log(mapa.has("nombre")); //muestra true
console.log(mapa.get("nombre")); //muestra gra
mapa.set("nombre", "graciana amaranto"); //para sobreescribir
console.log(mapa.get("nombre")); //ahora muestra graciana amaranto
mapa.delete("apellido") //para eliminar un dato

for (let [dato, value] of mapa){ //para recorrer el Map
    console.log(`Dato: ${dato}, valor del dato: ${value}`) //muestra nombre: grciana amaranto, 26
}

//otra forma de inicializar los maps
const mapa2 = new Map([
    ["nombre", "micha"],
    ["edad", 1],
    ["animal", "gatito"]
]);

const llavesMapa2 = [...mapa2.keys()]; //si quiero mostrar las lleves y lso valores por separado
const valoresMapa2 = [...mapa2.values()]; //se guardan como array

console.log(llavesMapa2);
console.log(valoresMapa2);

/*
WeakSets y WeakMaps: Solo pueden almacenar referencias debil, es decir que las llaves deben ser del tipo objeto. 
 - No son elementos iterables ni podemos borrar con el metodo clear() (solo uno por uno), ni ver el tamaño con size()
 - Cuando mis variables se vuelven undefined o null, automaticamente se eliminan para mejorar el rendimiento de nuestra app
 */
//const ws = new WeakSet([1,2,3,3,4,5, true, false, false, {}, {}, "hola", "HOLA"]); //TIRA ERROR PORQUE DEBO AGREGAR CADA ITEM UNO X UNO.

let v1 = {"valor1":1};
let v2 = {"valor2":2};
let v3 = {"valor3":3}; //estos son objetos guardados en variables

const ws = new WeakSet();
ws.add(v1);
ws.add(v2);

console.log(ws.has(v1)); //da true
console.log(ws.has(v3)); //da false

ws.delete(v2);

ws.add(v2);
ws.add(v3);

setTimeout(() => {
    v1 = null;
    v2 = null;
    v3 = null;
}, 5000); //cuando pasan los 5 segundos, Weakset borra las variables y queda vacía

const wm = new WeakMap();
let llave1 = {};
let llave2 = {};
let llave3 = {}; //inicializo las referencias (objetos) vacios

//si quiero agregar alguna llave al weakmap, lo hago con el metodo set (igual que en map)
 wm.set(llave1, 1);
 wm.set(llave2, 2); //detecta que hay dos propiedades
 
 console.log(wm.has(llave1)); //da true
 console.log(wm.has(llave3)); //da false

 console.log(wm.get(llave1)); //muestra 1
 console.log(wm.get(llave2)); //muestra 2
 console.log(wm.get(llave3)); //muestra undefined porque no agregue llave3

 wm.delete(llave2);


 /*
 Iterables & Iterators: cuando un tipo de dato es iterable, significa que su estructura de datos es lineal que hace que sus elem sean publicos
 y se puedan recorrer (como los arreglos, strings, maps, sets y elementos del dom)
- Un iterador es un "apuntador" que es el mecanismo que recorre los elementos. Hay diferentes mecanismos para recorrer un iterable
Puedo acceder a la interfaz del iterador con Symbol.iterator() y next
*/

const iterable = [1,2,3,4,5];
const iterador = iterable[Symbol.iterator]();

console.log(iterador.next()); //value: 1, done: false <-- me indica que no se acabo el array
console.log(iterador.next()); //value: 2, done: false... 5 veces hasta q da true
//si tuviese 1000 items esto no seria lo mejor, tendria que usar un iterador para recorrer todos los items automaticamente

let next = iterador.next();

while (!next.done){ //mientras next.done sea false, segui recorriendo
    console.log(next.value);
    next = iterador.next();  //muevo el iterador al item que sigue
}


/*
Generators: una funcion mucho mas sencilla que next con la interfaz de los iteradores
- Sirven para volver iterable una funcion
*/

function* iterable1 (){
    yield "hola"; //yield es como una especie de return iterador
    console.log("Hola consola");
    yield "hola 2";
    console.log("seguimos con las instrucciones de nuestro codigo");
    yield "hola 3";
    yield "hola 4";
}

let iterador1 = iterable1(); //lo mismo que interable[Symbol.iterator](); accedo a la interfaz del iterador

for (const y of iterador1) {
    console.log(y);
}

const arreglo = [...iterable1()]; //guarda cada yield en un arreglo ["hola", "hola 2", "hola 3", "hola 4"]


/*
Proxies: permite crear un obj basado en un objeto literal inicial. Parecido a las clases y sus instancias que heredan ciertas caract. de la clase principal
el proxy recibe un objeto literal, genera una copia y permite que hagas ciertas operaciones dentro de la copia que se esta creando.
Todo eso se administra a traves de un objeto especial llamado handler.
Proxy() recibe un objeto y un handler, ambos tengo que crear.
*/

const person = {
    nombre: "",
    apellido: "",
    edad: 0
}

//en set, yo le digo: al objeto, en cada una de las propiedades, le voy a asignar el valor que me esta dando el user en el proxy.
const manejador = {            //set recibe el objeto como tal, c/u de las propiedades a evaluar
    set(obj, prop, valor){      //y el valor que recibe cada una de esas propiedades
        if (Object.keys(obj).indexOf(prop) === -1){ //si index of no encuentra la propiedad en el objeto, no se le puede agregar un valor porque no existe. 
            return console.error(`La propiedad "${prop}" no existe en el objeto principal persona.`)
        }
        //dentro de set hago todas mis validaciones
        if (
            (prop === "nombre" || prop === "apellido") && (/^[A-Za \s]+ $/g.test(valor))
        ){
            return console.error(`La propiedad "${prop}" solo acepta letras y espacios en blanco.`)
        }
    
        obj[prop] = valor;      //puedo hacer validaciones para restringir para que el objeto original no sufra cambios
    }
}

const g = new Proxy(person, manejador);

g.nombre = "gra";    //se modificaron porque en el handler le dije que les diera un valor.
g.apellido = "amaranto";
g.edad = 26;
console.log(g);

g.twitter = "@graciana333"; //la key/propieddad twitter no existe en person, no la puedo agregar.
console.log(g); //veo que twitter no fue agergado al proxy.

/*
Propiedades dinamicas de los Objetos: genera el nombre de las propiedades cuando los items (de un array o API por ej)
son muchos y seria tedioso agregar una propiedad a cada uno. Aca genera automaticamente una propiedad a cada uno.
*/

let aleatorio = Math.round(Math.random() * 100 + 5); //para que me de un numero mayor que 5

const objUsuarios = {
    propiedad: "valor",
    [`id_${aleatorio}`]: "Valor aleatorio" //puedo hacerlo dentro del objeto directamente
}
console.log(objUsuarios);

const usuarios = ["graciana", "juan", "efrain", "tere"];
usuarios.forEach((usuario, index) => objUsuarios[`id_${index}`] = usuario);

console.log(objUsuarios); //muestra id_0: "graciana", id_1:"juan" en el objeto objUsuarios


//.this va a retornar cierto valor depende de los contextos (global, objeto, funcion), tambien dependiendo del scope 

this.nombre1 = "Contexto Global";
console.log(this.nombre1);  //muestra el string Contexto Global

function imprimir(){
    console.log(this.nombre1);
}
imprimir(); //me sigue mostrando contexto global porque sigo en el ambito global windows

const objetoThis = {
    nombre1: "Contexto Objeto",
    imprimir: function (){ //funcion anonima
        console.log(this.nombre1);
    }
}
objetoThis.imprimir();  //cambia el scope, estoy dentro de un objeto, muestra Contexto Objeto

const objThis2 = {
    nombre1: "Contexto Objeto 2",
    imprimir    //shorthand imprimir:imprimir -> funcion declarada fuera del objeto al principio
}
objThis2.imprimir();  //NO ME SALGO DEL SCOPE PORQUE TRAJE UNA FUNCION DE AFUERA, el this sigue haciendo referencia al nombre1 del objeto 2.
                      //es lo mismo que imprimir del objeto 1, solo que en lugar de crearla a la funcion, traje una de afuera. 
                       
const objetoThis3 = {
    nombre1: "Contexto Objeto 3",
    imprimir:() => {  //las arrow function no maneja su propio scope, agarra el this del padre del objeto, osea el this del contexto global  
    console.log(this.nombre1);
    }
}              
objetoThis3.imprimir(); //imprime Contexto Global, genera como un enlace entre el this de la funcion y el PADRE del this.    

function Personathis (nombre1){
    this.nombre1 = nombre1;
    //return console.log(this.nombre1);  linea que hace que muestre Gra
    /*
    return function (){  //retorno una nueva funcion para que me muestre en consola
        console.log(this.nombre1); //GENERA UN NUEVO SCOPE DONDE NO ESPECIFIQUE this.nombre!!! me devuelve Contexto Global
    }*/
    return () => console.log(this.nombre1); //muestra Gra otra vez!!! porque la arrow function me devuelve el this. nombre del padre, en este caso Gra
    
}
let gr = new Personathis("Gra") //muestra Gra porque genera su propio scope donde defini nombre
gr();  //ejecuto gr como metodo porque la funcion Personathis retorna una una funcion
//gr() muestra Contexto Global si a la funcion la escribo como funcion anonima, si la escribo como arrow function retorna Gra

//call, apply, bind

this.lugar = "Contexto Global";

function saludothis(palabraSaludo, aQuien){
    console.log(`${palabraSaludo} ${aQuien} desde el ${this.lugar}`);  
}

//saludo() muestra Contexto Global

const objLugar = {
    lugar: "Contexto Objeto"
}

saludothis.call(objLugar, "Hola", "Graciana"); //call me trae a qué esta apuntando el this: this.lugar -> apunta al lugar del objeto   
//muestra Hola Graciana desde el contexto objeto

saludothis.call(null, "Hola", "Graciana"); //vuelvo al contexto global
saludothis.call(this,  "Hola", "Graciana"); //tambien muestra contexto global

this.nombre = "window";
const personaBind = {
    nombre: "tere",
    saludar: function (){
        console.log(`Holaaaaaaaaaaaaa ${this.nombre}`);
    }
}

personaBind.saludar() //muestra hola tere



const otraPersonaBind = {
    saludar: personaBind.saludar.bind(personaBind)  //saludar: personaBind.saludar() sin bind me muestra hola undefined porque no tengo un this en el obj al que hacer referenecia
  //personaBind.saludar.bind(personaBind) enlaza el contexto de la propiedad que le indico, en este caso saludar() que tiene un this.nombre que apunta a tere
} 
otraPersonaBind.saludar() //muestra hola tere 
//si hago saludar: personaBind.saludar.bind(this) me muestra hola window porque el this me toma el contexto global (la variable por fuera)

//JSON: funciona como un intercambio ligero de intercambio de datos


//.parse() analiza una cadena de texto como JSON, transformandolo en un formato válido de objeto
console.log(JSON.parse("{}")); 
console.log(JSON.parse("[1,2,3]"))  
//si analizo una cadena de texto escrita como JSON lo convierte en un objeto PRIMITIVO DE JS.
//console.log(JSON.parse("Hola Mundo")) //da error porque no es un objeto valido


//.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON
console.log(JSON.stringify({})); 
console.log(JSON.stringify([1,2,3])); //muestra como cadena de texto "[1,2,3]}"  

console.log(JSON.stringify({ x: 2, y: 3})); //muestra {"x":2,"y":3} con las comillas como notacion JSON

