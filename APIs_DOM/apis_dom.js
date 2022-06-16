//accedo a los nodos del DOM

console.log("****** Elementos del documento ******")
console.log(document)
console.log(document.head);
console.log(document.documentElement) //me muestra todo el html pero sin el doctype
console.log(document.body);
console.log(document.title);

//trabajamos con los nodos del tipo elemento y del tipo texto

console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu")); // es lo mismo pero es mas lento para ids
console.log(document.querySelectorAll("#menu li"));


console.log(document.querySelector("a")); //muestra solo el primero de todos los a, NO TODOS
console.log(document.querySelectorAll("a")); //trae todos los "a"
console.log(document.querySelectorAll("a").length); //muestra 6 - la cantidad de "a"  que hay
console.log(document.querySelectorAll("a"));

console.log(document.querySelector("li"));  //muestra un solo li
console.log(document.querySelectorAll("li")); //todos los li
document.querySelectorAll("a").forEach((el) => console.log(el)) //por cada elemenento "a", que me muestre su contenido

console.log(document.querySelector(".card"));  //si es por clases uso el punto adelante
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]); //si quiero traer una en especifica

console.log(document.querySelectorAll("#menu li")); //le pido q me traiga las listas dentro de menu que es un id


//atributos y data attributes

console.log(document.querySelector(".link-dom").href) // muestra http://127.0.0.1:5500/APIs_DOM/webapis_dom.html
console.log(document.querySelector(".link-dom").getAttribute("href")); //muestra webapis_dom.html. es la forma CORRECTA de traer links

console.log(document.querySelector("input").getAttribute("name")); //muestra nombre: input tiene 2 atributos, "name" y "placeholder"
console.log(document.querySelector("input").getAttribute("placeholder")); //muestra Nombre

//darles nuevos valores a los atributos:

//puedo guardar los elementos del dom en una variable: 
const $linkDOM = document.querySelector(".link-dom"); //se usa $ para diferenciar variables q tengan elem del DOM de otras. 

$linkDOM.setAttribute("href", "https://instagram.com"); //cambio el link que estaba en el href por instagam.com
$linkDOM.setAttribute("target", "_blank"); //creo un nuevo atributo para el href : este me abre una nueva pestaña al hacer click
$linkDOM.setAttribute("rel", "noopener");  //atributo de seguridad que evita que los sitios web externos accedan donde se encuentra el enlace.

//quitar atributos, validar si hay un atributo o no en el elemento:

console.log($linkDOM.hasAttribute("rel")); //me da true, lo voy a quitar: 
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel")); //me da false


//Data Attributes
console.log($linkDOM.getAttribute("data-description")) //muestra Documnent Object Model
console.log($linkDOM.dataset); //muestra todos los data de la clase link-dom
console.log($linkDOM.dataset.description)  //muestra un data especifico (tengo data-description y data-id)

//cambiar el valor de un atributo data:
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.getAttribute("data-description")); //se cambio el data-description: ahora muestra Modelo de Objeto del Documento
$linkDOM.dataset.description = "link que te dirige a la pagina de instagram"; //otra forma de cambiar el valor
console.log($linkDOM.getAttribute("data-description")); //muestra link que te dirige a la pagina de instagram

console.log($linkDOM.getAttribute("data-id")); //muestra 1 
$linkDOM.removeAttribute("data-id") //remuevo el atributo data-id
console.log($linkDOM.getAttribute("data-id")); //no existe, muestra null


//******************************************************************* */

//DOM: Estilos y variables en CSS
//acceder a variables CSS:

const $html = document.documentElement,  //las variables que hice estaen en el html
    $body = document.body

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor); //muestra  #222  #f7df1e

$body.style.backgroundColor = varDarkColor;    //le digo que me cambie en el body el fondo y el color de las variables que cree
$body.style.color = varYellowColor;  

//si quiero modificar alguna variable

$html.style.setProperty("--dark-color", "white"); //lo defino en el html pero todavia se ve negro
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");  //accedo de nuevo a dark color que ahora tiene "pink"

$body.style.setProperty("background-color", varDarkColor); //ahora si me pone el fondo rosa

//Clases CSS

const $card = document.querySelector(".card");  //selecciono la primera .card que encuentra
console.log($card) //muestra la primera card que es la "tech"

//quiero agregarle clases de css a card

$card.classList.add("rotate-45"); 
console.log($card.classList.contains("rotate-45")) //muestra true

//quitar una clase
$card.classList.remove("rotate-45"); 

//si el elemento tiene la clase, la quita, pero si no la tiene, la agrega:
$card.classList.toggle("rotate-45");  //se rota la imagen

//reemplazar una clase por otra
$card.classList.replace("rotate-45", "rotate-135");

//puedo agregar y quitar mas de una clase a la vez
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("opacity-80", "sepia")

//***************************************************** */

//DOM: Texto y HTML
const $whatIsDOM = document.getElementById("que-es");  //como es un id, no uso querySelector

let text = `
    <p> 
    Es el Modelo de Objetos del Documento ( <b> <i> DOM - Document Object Model </i> </p>) es una API para
    documentos HTML y XML.
    </p>
    <p> Este provee  una representacion estructural del documento, permitiendo modificar su contenido
    y presentacion visual mediante codigo JS.
    </p>
    <p>
    <mark> El DOM no es parte de la especificacion de JS, es una API para los navegadores. </mark>
    </p>
`;

//ahora quiero modifucar el contenido del selector que-es y reemplazarlo por el texto
$whatIsDOM.textContent = text; //me reemplaza pero no reconoce los <b>, los imprime tal cual
$whatIsDOM.innerHTML = text; //reemplaza el texto y reconoce las etiquetas que le puse. 
$whatIsDOM.outerHTML = text;  //reeplaza todo el <p id="que-es"> por los tres <p>

/********************************************************************* */

//DOM Traversing: Recorriendo el DOM
//Son una serie de propiedades que nos da el API del DOM para poder recorrer los elementos (etiquetas HTML).

const $cards = document.querySelector(".cards");  //selecciono todas las cards --> <section class="cards">

console.log($cards.children); //muestra un HTML Collection con todas las cards
console.log($cards.children[2]);  //me muestra la 3ra figura: people

console.log($cards.parentElement) //muestra el body

console.log($cards.firstElementChild);  //muestra la primera card "tech"
console.log($cards.lastElementChild);   //muestra la primera card "nature"

console.log($cards.previousElementSibling);  //muestra el hermano q esta antes, osea el "a"
console.log($cards.nextElementSibling);     //muestra el hermano q esta despues, osea el "script"

console.log($cards.closest("body"))   //cual es el body mas cercano?
console.log($cards.children[3].closest("section")) //si quiero preguntar desde algun elem en especifico

/******************************************************************* */

//DOM: Creando Elementos y Fragmentos 

//quiero crear y agregarle una nueva card a mi <section class="cards"> que ya tiene 5.

const $figure = document.createElement("figure"),  //crea un elem etiqueta <figure>
$img = document.createElement("img"),
$figcaption = document.createElement("figcaption"),
$figcaptionText = document.createTextNode("Animals"),
$cards1 = document.querySelector(".cards");  //selecciono .cards
//los elem estan creados pero tengo que agregarlos al DOM para que se vean:

//img necesita si o si un src y un alt
$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");

//figcaption lleva un texto
$figcaption.appendChild($figcaptionText);

//figure lleva un img y un figcaption
$figure.appendChild($img);
$figure.appendChild($figcaption);

//le agreago a figure una clase "card" para q se vea igual que los demas
$figure.classList.add("card");

$cards1.appendChild($figure); //finalmente le agrego a cards una figure nueva con todos sus elem dentro.

//otra forma de hacerlo con innerHTML:
const $figure2 = document.createElement("figure");

$figure2.innerHTML = ` 
    <img src = "https://placeimg.com/200/200/people" alt= "People" >  
    <figcaption>People</figcaption>
    `;

$figure2.classList.add("card"); 
$cards1.appendChild($figure2);   ///de esta forma me ahorro tener q hacer lo q hice en 176

//otro ejemplo

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
    $ul = document.createElement("ul");

document.write("<h3> Estaciones del año </h3>");
document.body.appendChild($ul);

estaciones.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;  //que ponga dentro del li "primavera"
    $ul.appendChild($li);  //agrega ese li dentro del  ul que cree
});

const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"],
    $ul2 = document.createElement("ul")
;    

document.write("<h3> Continentes del mundo </h3>");
document.body.appendChild($ul2);

$ul2.innerHTML = "";   //si quiero usar el innerHTML, tengo q inicializarlo en ""
continentes.forEach( el => {$ul2.innerHTML += `<li> ${el} </li> `}); //pongo += para que me agregue cada <li> ${el} </li>  de la iteracion, sino solo me muestra el ultimo 

//fragmemtos: si mi arreglo o registro tiene muchos elementos y hago una incersion de cada uno en el DOM, impacta en el funcionamiento.
//para eso creo un fragmento en donde haga todas las incersiones dentro, y solo agrego un solo elemento al DOM (el fragmento)

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
],
    $ul3 = document.createElement("ul"),
    $fragment = document.createDocumentFragment()
;

meses.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);  //agrego cada li al fragment en lugar de al ul

});

document.write("<h3> Meses del año </h3>");
$ul3.appendChild($fragment);   //cuando termino de recorrer agrego el fragment al ul
document.body.appendChild($ul3);

/*************************************************************** */

//DOM: Templates HTML: no se renderizan en el DOM. Sirven como modelos a seguir para despues replicarlos.

const $cardss = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content,
    $templateFragment = document.createDocumentFragment(),
    cardContent = [
        {
            title: "Tecnologia",
            img: "https://placeimg.com/200/200/tech"
        },
        {
            title: "Animales",
            img: "https://placeimg.com/200/200/animals"
        },
        {
            title: "Arquitectura",
            img: "https://placeimg.com/200/200/arch"
        },
        {
            title: "Gente",
            img: "https://placeimg.com/200/200/people"
        },
        {
            title: "Naturaleza",
            img: "https://placeimg.com/200/200/nature"
        }
    ];

cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template, true)
    $templateFragment.appendChild($clone);
});

$cardss.appendChild($templateFragment);

/******************************************************************** */

//DOM: Modificando elementos con insertAdjacent/posiciones:

/* 
.insertAdjacent...
    .insertAdjacentElement(position, el)  -->seria como un appendChild
    .insertAdjacentHTML(position, html) --> seria como un .innerHTML
    .insertAdjacentText(position, text)  -->seria como un textContent

Posiciones:
    beforebegin (hermano anterior)
    afterbegin (primer hijo)
    beforeend (ultimo hijo)
    afterend (hermano siguiente)
*/

const $cards0 = document.querySelector(".cards"),
    $newCard = document.createElement("figure"),
    $newCard2 = document.createElement("figure");

$newCard.innerHTML = `
    <img src= "https://placeimg.com/200/200/any" alt="Any" >
    <figcaption>Any</figcaption>
`;

$newCard.classList.add("card");
$cards0.insertAdjacentElement("afterbegin", $newCard);

let $contentCard = `
    <img src= "https://placeimg.com/200/200/any" alt="Any" >
    <figcaption></figcaption>
`;

$newCard2.insertAdjacentHTML("afterbegin", $contentCard);  //inserta el html de content card
$newCard2.querySelector("figcaption").insertAdjacentText("afterbegin", "Any"); //agrego el contenido del figcaption que estaba vacio

$cards0.insertAdjacentElement("beforeend", $newCard2) //agrego la segunda tarjeta a cards

/******************************************************************** */

//DOM: Manejador de eventos: hay 3 maneras de definir los manejadores de eventos:

//evento como atributo del HTML (no es lo correcto)
function holaMundo() {
    alert("Hola mundo");
    console.log(event)
}

//como un manejador de eventos (la funcion que se ejecuta en ese evento)

const $eventosemantico = document.getElementById("evento-semantico");

$eventosemantico.onclick = holaMundo; //SIN LOS PARENTESIS 
$eventosemantico.onclick = function(e){
    alert("Hola mundo Manejador de eventos semanticos");
    console.log(e); //e de event
} //el limitante que tiene esta forma, es que solo le podes asignar una sola funcion. 
//a $eventosemantico le asigne 2 funciones, pero solo va a ejecutar la ultima.

//como manejadores multiples: puedo ejecutar varias funciones a la vez.

const $eventomultiple = document.getElementById("evento-multiple");
$eventomultiple.addEventListener("click", holaMundo); //tambien sin el ()

$eventomultiple.addEventListener("click", (e) => {
    alert("Hola mundo manejador de eventos multiple");  //puedo hacerlo directamente con arrow function
    console.log(e);
    console.log(e.type);  //muestra pointer event 
    console.log(e.target); //muestra el HTML del boton donde cree el evento <button id="evento-multiple">Evento con manejador multiple</button>
});

//Eventos con parametros y remover eventos 

function saludar(nombre = "Desconocid@"){
    alert(`Hola ${nombre}`);
}

$eventomultiple.addEventListener("click", () => saludar("Graciana"));  //creo una arrow function anonima que funcione como manejadora
//esta arrow function tiene saludar() adentro, porque si lo pongo directamente no me toma los parámetros.

//eliminar eventos
const $eventoremover = document.getElementById("evento-remover");

const removerDobleClick = (e) => {  //si o si tengo que hacer una funcion declarativa porque removeEventListener me la pide como parámetro
    alert(`Removiendo el evento del tipo ${event}`);
    $eventoremover.removeEventListener("dblclick", removerDobleClick);
    $eventoremover.disabled = true; 
}

$eventoremover.addEventListener("dblclick", removerDobleClick);

/********************************************************************* */

//DOM: Flujo de Eventos (Burbuja y Captura)
//el flujo de eventos de burbuja se propaga del mas interno al mas externo.
//el flujo de captura el evento se propaga del mas externo al mas interno.

const $divsEventos = document.querySelectorAll(".eventos-flujo div");
console.log($divsEventos);

function flujoEventos(e) {
    console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`); //el .this aca hace referencia al div del momento
} 

$divsEventos.forEach(div => {
    //fase de burbuja: muestra "Hola te saluda uno, el click lo originó tres" si hago click en el 3
    div.addEventListener("click", flujoEventos); //hago un addeventlistener para todos los divs en lugar de hacerlos x separado
    //fase de captura: solo tengo q agregar true como tercer parametro
    div.addEventListener("click", flujoEventos, {
        capture: true,
        once: true    //once:true si quiero que el evento se ejecute UNA SOLA VEZ. (menos engorroso que usar removeEventListener)
    });
});  


/********************************************************************* */

