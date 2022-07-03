export default function hamburgerMenu(panelBtn, panel, menuLink){
    const d = document;

    d.addEventListener("click", (e) => {
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){  //"|| e.target.matches(`${panelBtn} *`)" lo pongo para que me agregue "is-active" at todos los hijos de panelBtn y me triggueree el panel hacia abajo
            d.querySelector(panel).classList.toggle("is-active"); //panel debe estar is-active para que se mueva el panel hacia abajo o se esconda
            d.querySelector(panelBtn).classList.toggle("is-active"); //panelBtn debe estar is-active para que se vea la animacion del boton
        }

        if (e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active"); //si yo hago click en un linl del menu, debe desaparecer el panel 
            d.querySelector(panelBtn).classList.remove("is-active"); //y el boton debe volver a las rayitas iniciales 
        }
    })
}