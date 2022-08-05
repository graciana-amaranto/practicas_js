import hamburgerMenu from "./menu_hamburguesa.js";
import {digitalClock, alarm} from "./reloj.js";
import { shortcuts, moveBall } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./tema-oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilter from "./filtro_busquedas.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll_espia.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) =>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "January 04, 2023 03:23:19", "Feliz Cumpleaños Graciana! ");
    scrollTopButton(".scroll-top-btn");
    /*responsiveMedia(
        "youtube", 
        "(min-width: 800px)", 
        `<a href="https://www.youtube.com/watch?v=4LlsbGad5TE" target="_blank" rel="noopener">Ver Video</a>`, 
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/4LlsbGad5TE" 
        title="YouTube video player" frameborder="0" allow="accelerometer; 
        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsiveMedia(
        "gmaps", 
        "(min-width: 800px)", 
        `<a href="https://goo.gl/maps/EpvPVGGSoPmKn7yM7" target="_blank" rel="noopener">Ver Mapa</a>`, 
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23952.476024333668!2d2.1735612882830853!3d41.372791922979864!
        2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a30709605c93%3A0x2600fae14082f052!2sLa%20Barceloneta%2C%20Barcelona%2C%20
        Espa%C3%B1a!5e0!3m2!1ses!2sar!4v1658542902904!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);*/
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam");
    getGeolocation("geolocation");
    searchFilter(".card-filter", ".card")
    draw("#winner-btn", ".player");
    slider();
    scrollSpy();
});  //no necesito poner #coundown porque uso getElementById

d.addEventListener("keydown", e =>{
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
})

darkTheme(".dark-theme-btn", "dark-mode"); //saco esta funcion de DOMContentLoaded porque tengo un evento igual dentro y no puede haber un mismo evento dentro de otro.
//dark mode no existe en el html pero si en css 
networkStatus();  //no necesita ejecutarse a la carga del doc, se va a ejecutar cuando el navegador detecte que se perdio la conexion usando la propiedad navigator.onLine