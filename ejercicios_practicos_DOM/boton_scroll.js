const d = document,
    w = window;


export default function scrollTopButton(btn) {
    const $scrollBtn = d.querySelector(btn);

    w.addEventListener("scroll", e => {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop; //muestra la cantidad de px que hay desde arriba de todo hasta donde estoy en la barra de scroll

        if (scrollTop > 700){  //si estoy 600px alejado de top 0, remueve el hidden, y el boton se muestra.
            $scrollBtn.classList.remove("hidden");
        }
        else {
            $scrollBtn.classList.add("hidden");
        }
    });
    d.addEventListener("click", e => {
        if(e.target.matches(btn)){
            w.scrollTo({  //scrollear hasta arriba del todo
                behavior: "smooth",
                top: 0
            })
        }
    });

}