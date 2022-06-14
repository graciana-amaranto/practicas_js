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

$html.style.setProperty("--dark-color", "pink"); //lo defino en el html pero todavia se ve negro
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













