const d = document;

export default function slider(){
    const $nextBtn = d.querySelector(".slider-btns .next"),
        $prevBtn = d.querySelector(".slider-btns .prev"),
        $slides = d.querySelectorAll(".slider-slide")
    ;

    let i = 0; //contador q sirve para que cuando llegue al ultimo slide, vuelva al principio y viseversa
    
    d.addEventListener("click", e=>{
        if(e.target === $prevBtn){
            e.preventDefault();
            $slides[i].classList.remove("active");
            i--; 

            if (i < 0){    //si estoy en la slide 0 y clickeo prev, va a valer -1 pero no puede valer eso
                i = $slides.length - 1;  //si llego a 0, el proximo slide va a ser el ultimo (slide.lenght = 4) pero como se lee 01234 hago $slides.length - 1
            }

            $slides[i].classList.add("active") //una vez que clickee, quiero que se muestre la slide actual
        }

        if(e.target === $nextBtn){
            e.preventDefault();
            $slides[i].classList.remove("active");
            i++;

            if (i >= $slides.length){
                i = 0
            }

            $slides[i].classList.add("active");
        }
    })
}