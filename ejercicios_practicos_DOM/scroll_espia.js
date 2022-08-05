const d = document;


//uso intersectionOberver, API que detecta cuando en la parte visible del viewport se encuentra un elemento.
export default function scrollSpy (){
    const $sections = d.querySelectorAll("section[data-scroll-spy]")
    const cb = (entries) => {      //entries son los elementos que estan entrando a la visualizacion del viewport
        entries.forEach(entry => {  //entry es cada elemen que esta entrando al observador
            const id = entry.target.getAttribute("id");  //capturo el valor "#seccion5"

            if (entry.isIntersecting){   //si el observador lo esta capturando, o ya lo capturó, que agregue la clase active, que es la clase que hace que se ilumine.
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active"); //agrega a cada una de acuerdo a su id
            } else {
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
            }
        })
    }

    const observer = new IntersectionObserver(cb, {
        rootMargin: "-300px"  //para que no me marque 3 al mismo tiempo
    })   //esta API recibe como parametros una callback y una serie de opciones como root y rootmargin.

    $sections.forEach(el => observer.observe(el));  //"por cada seccion que tenga mi documento con el atributo data-scroll-spy, aisgnale el observador"
}