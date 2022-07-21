const d = document;

export default function countdown(id, limitDate, finalMessage){
    const $countdown = d.getElementById(id),
        countdownDate = new Date(limitDate).getTime(); //getTime expresa la fecha en milisegundos

    let countdownTempo = setInterval(() => {
        let now = new Date().getTime(), //el dia de hoy en ms
            limitTime = countdownDate - now,  //resto para ver cuando me queda para llegar a la fecha
            days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),  //el tiempo expresado en dias
            hours = ("0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2), //el residuo de la cuenta anterior (serian horas) lo divido en la expresion en horas
            minutes = ("0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))).slice(-2),
            seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / (1000))).slice(-2);
      
        $countdown.innerHTML = `<h3>Faltan: ${days} dias ${hours} horas ${minutes} 
        minutos ${seconds} segundos</h3>`;
    }, 1000);

    if (limitTime <0) {
        clearInterval(countdownTempo);
        $countdown.innerHTML = `<h3> ${finalMessage} </h3>`;
    }

}