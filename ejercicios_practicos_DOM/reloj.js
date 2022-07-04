const d = document;

export function digitalClock(clock, btnPlay, btnStop){
let clockTempo;  //para iniciar o parar el reloj dentro de una variable

    d.addEventListener("click", e =>{
        if(e.target.matches(btnPlay)){
            clockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            }, 1000);
            e.target.disabled = true; //para deshabilitar el boton una vez q pongo iniciar
        }

        if(e.target.matches(btnStop)){
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML = null;

            d.querySelector(btnPlay).disabled = false; //vuelvo a activar el boton iniciar cuando se para el reloj.

        }
    })
}

export function alarm(sound, btnPlay, btnStop){
    let alarmTempo;
    const $alarm = d.createElement("audio"); //necesito crear la etiqueta del audio en el DOM para poder acceder a la API, y asi poder reproducir el sonido
    $alarm.src = sound;     //le agrego al src de alarm, "sound" que en index tiene la ruta del audio

    d.addEventListener("click", e =>{
        if (e.target.matches(btnPlay)){
            alarmTempo = setTimeout(() => {
                $alarm.play();
            }, 2000);                           //empieza a sonar la alarma luego de 2s
            e.target.disabled = true;

        }
        if (e.target.matches(btnStop)){
            clearTimeout(alarmTempo);
            $alarm.pause();
            $alarm.currentTime = 0;  //no existe "stop" para el sonido, tengo q pausar y volver a 0.
            
            d.querySelector(btnPlay).disabled = false;
        }
    })

} 