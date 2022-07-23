import hamburgerMenu from "./menu_hamburguesa.js";
import {digitalClock, alarm} from "./reloj.js";
import { shortcuts, moveBall } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./tema-oscuro.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) =>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    //countdown("countdown", "January 04, 2023 03:23:19", "Feliz Cumpleaños Graciana! ");
    scrollTopButton(".scroll-top-btn");
    
});  //no necesito poner #coundown porque uso getElementById

d.addEventListener("keydown", e =>{
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
})

darkTheme(".dark-theme-btn", "dark-mode"); //saco esta funcion de DOMContentLoaded porque tengo un evento igual dentro y no puede haber un mismo evento dentro de otro.
//dark mode no existe en el html pero si en css 