const d = document;

export default function responsiveTester(form){
    const $form = d.getElementById(form);
    let tester;

    d.addEventListener("submit", e => {
        if (e.target === $form){
            e.preventDefault();  //no quiero que el formulario se procese porque lo voy a controlar con js

            //quiero que cuando el form se procese, se abra una ventana con los valores que indique en el input:
            tester = window.open($form.direccion.value, "tester", `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`);
            //window.open recibe 3 parametros: $form.direccion.value es el valor que escribe el usuario
            //"tester" es una referencia inventada, y en el 3ero le puedo pasar caracteristicas: innerWidth, donde le paso el valor del acho que escribe el usuario y se guarda
            //en el input"ancho", lo mismo con innerHeight
        }
    });

    d.addEventListener("click", e => {
        if(e.target === $form.cerrar){  //accedo al boton "cerrar" dentro del form
            tester.close();  //si presiono el boton cerrar
        }
    })
}