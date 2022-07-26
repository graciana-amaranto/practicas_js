const d = document,
    n = navigator;

export default function getGeolocation(id){
    const $id = d.getElementById(id),
        options = {
            enableHightAccuracy: true,
            timeout: 5000,  //tiempo de respuesta 
            maximumAge: 0  //para que no guarde en cache la lectura anterior
        };

    const success = position => {
        let coords = position.coords;

        $id.innerHTML = `
        <p>Tu posicion actual es:</p>
        <ul>
            <li>Latitud: <b> ${coords.latitude} </b></li> 
            <li>Longitud: <b> ${coords.longitude} </b></li> 
            <li>Presicion: <b> ${Math.round(coords.accuracy)} </b>metros</li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude}, ${coords.longitude},20z" target="_blank" rel="noopener">
        Ver en Google Maps </a> `

        console.log(position);
    }
    const error = (err) => {
        console.log(`Error ${err.code}: ${err.message} `)
        $id.innerHTML =  `<p><mark>Error ${err.code}: ${err.message}</mark></p>`
    }

    n.geolocation.getCurrentPosition(success, error, options);  //geolocation recibe estos 3 parametros siempre

}