/*Esta funcion cambia un video de youtube y un mapa de google maps, por sus respectivos links
depentiendo del tamaño de la pantalla: en dispositivo movil da la opcion de ver el video aparte; es decir
no se descarga automatiamente a mi pagina, sino que te permite decidir si ver el video o no para ahorrar datos.
De esta forma puedo hacer las páginas mas livianas.*/ 

const d = document,
    w = window;

export default function responsiveMedia(id, mq, mobileConent, desktopContent) {
    let breakpoint = w.matchMedia(mq);   //detecta la media Query (min-width: 1024px)

    const responsive = (e) => {
        if (e.matches){
            d.getElementById(id).innerHTML = desktopContent;
        } else {
            d.getElementById(id).innerHTML = mobileConent;
        }
    }

    breakpoint.addEventListener("change", responsive);
    responsive(breakpoint); //para que me muestre el contenido la primera vez, sino no muestra "Contenido Escritorio" hasta que cambia el tamaño.
    //responsive recibe una media query, que ya tengo guardado en breakpoint.
}