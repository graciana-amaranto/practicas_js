const d = document;

export default function searchFilter(input, selector){
    d.addEventListener("keyup", e =>{
        if(e.target.matches(input)){
            //console.log(e.target.value)
            
            if (e.key === "Escape") e.target.value = "";
            
            d.querySelectorAll(selector).forEach(el => el.textContent.toLowerCase()
            .includes(e.target.value) //lo que estoy escribiendo en el input coincide con el selector(card)?
            ? el.classList.remove("filter")  //quito la clase filter que tiene un display:none, y muestra el contenido q coincida
            : el.classList.add("filter")) //oculta el contenido q no coincide
            
        }
    })
}