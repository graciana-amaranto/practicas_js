const d = document,
    ls = localStorage;

export default function darkTheme(btn, classDark){
    const $themeBtn = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]");  //selecciona todos los elementos que tengan el atributo data-dark

    let moon = "🌜",
        sun = "☀️";

    const lightMode = () => {
        $selectors.forEach((el) => el.classList.remove(classDark));  //classDark es la clase "dark-mode" que existe solo en css
        $themeBtn.textConent = moon;
        ls.setItem("theme", "light"); //guardo el valor theme light en local storage para despues compararla
    }

    const darkMode = () => {
        $selectors.forEach((el) => el.classList.add(classDark)); //donde tengo data-dark, le agrego la clase "clase dark-mode"
        $themeBtn.textConent = sun;
        ls.setItem("theme", "dark");
    }

    d.addEventListener("click", e => {
        if(e.target.matches(btn)) {
            if($themeBtn.textConent === moon){
                darkMode();
            } else {
                lightMode();
            }
        } 
    });

    //guarda el tema que elegi, y se mantiene aunque recargue.
    d.addEventListener("DOMContentLoaded", (e) =>{
        if(ls.getItem("theme")=== null) ls.setItem("theme", "light");
        if(ls.getItem("theme") === "light") lightMode();
        if(ls.getItem("theme") === "dark") darkMode();
    })

}