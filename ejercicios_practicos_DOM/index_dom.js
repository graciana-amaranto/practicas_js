import hamburgerMenu from "./menu_hamburguesa.js";
import {digitalClock, alarm} from "./reloj.js";
import { shortcuts, moveBall } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) =>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "January 04, 2023 03:23:19", "Feliz Cumpleaños Graciana! ")
});  //no necesito poner #coundown porque uso getElementById

d.addEventListener("keydown", e =>{
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
})

