const d = document,
    w = window,
    n = navigator;

export default function networkStatus() {
    const isOnline = () =>{
        const $div = d.createElement("div");

        if (n.onLine){
            $div.textContent = "Conexion Reestablecida";
            $div.classList.add("online");  //son las clases que cree en el css
            $div.classList.remove("offline");
        }else{
            $div.textContent = "Conexion Perdida";
            $div.classList.add("offline");  
            $div.classList.remove("online");
        }
        d.body.insertAdjacentElement("afterbegin", $div) //agrega el cartel que dice conexion perdida/reestablecida
        setTimeout(() => {
            d.body.removeChild($div)  //si se pierde la conexion y vuelve, el cartel rojo se mantiene, asiq debo sacarlo despues de unos seg, cuando vuelve la conexion
        }, 3000); 
    }
    
    w.addEventListener("online", e => isOnline());
    w.addEventListener("offline", e => isOnline());
}