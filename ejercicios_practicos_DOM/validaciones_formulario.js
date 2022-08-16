const d = document;

export default function contactFormValidations(){
    const $form = d.querySelector(".contact-form"),
        $inputs = d.querySelectorAll(".contact-form [required]");

    $inputs.forEach(input =>{
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error","none");
        input.insertAdjacentElement("afterend", $span);
    });

    d.addEventListener("keyup", e =>{
        if (e.target.matches(".contact-form [required]")){
            let $input = e.target,  //es cada input que origina el evento
                pattern = $input.pattern || $input.dataset.pattern;  //pattern no funciona para textarea, por eso cree el "data-pattern" en el html, en js lo llamo como $input.dataset.pattern
        
            if(pattern && $input.value !==""){ //quiero que valide solo si escribí algo (sino, salta el span de error cuando el campo esta vacio)
                let regex = new RegExp(pattern);
                return !regex.exec($input.value) //si el valor del input no cumple con la exp regular 
                    ? d.getElementById($input.name).classList.add("is-active") //llama al span que creee q contiene el msj de error
                    : d.getElementById($input.name).classList.remove("is-active");
            }

            if(!pattern){  //"asunto" no tiene patron pero tambien lo debo validar
                return $input.value===""
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active");
            }
        }
    });

    d.addEventListener("submit", e =>{
        e.preventDefault(); //para que no envie nada cuando clickeo en "enviar"

        const $loader = d.querySelector(".contact-form-loader"), //class del div con el gif 
            $response = d.querySelector(".contact-form-response"); //class del div con el texto "los datos han sido enviados"
        
        $loader.classList.remove("none");  //cuando hago click en enviar, se muestra el loading...

        setTimeout(() => {
            $loader.classList.add("none");  //desp de los 3 seg, desaparece 
            $response.classList.remove("none"); //y aparece el msj "los datos han sido enviados"
            $form.reset();
            setTimeout(() => $response.classList.add("none"), 3000);
        }, 3000);
    });
}