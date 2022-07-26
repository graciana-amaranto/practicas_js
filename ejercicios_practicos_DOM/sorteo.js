const d = document;

export default function draw(btn, selector){
    const getWinner = (selector) => {
        const $players = d.querySelectorAll(selector),  //selector es cada player
            random = Math.floor(Math.random() * $players.length), //multiplico por la CANTIDAD de players
            winner = $players[random];  //random me devuelve un numero del 1 al n cantidad de players
        
        console.log($players, random, winner)
        console.log(winner)
        return `El ganador es: ${winner.textContent} `;
    }
    d.addEventListener("click", e=>{
        if(e.target.matches(btn)){
            let result = getWinner(selector);
            alert(result);
            console.log(result);
        }
    })
}

/*
Esta funcion hace un sorteo entre comentarios de youtube, y me devuelve el nombre de la persona que
comento accediendo al html. 

const getWinnerComment = (selector) => {
    const $players = d.querySelectorAll(selector),  //selector es cada player
        random = Math.floor(Math.random() * $players.length), //multiplico por la CANTIDAD de players
        winner = $players[random];  //random me devuelve un numero del 1 al n cantidad de players
    
    return `El ganador es: ${winner.textContent} `; 
}

getWinnerComment("ytd-comment-thread-renderer #author-text span"); */