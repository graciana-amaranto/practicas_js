const d = document;
let x = 0,
    y = 0;

export function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        limitsBall = $ball.getBoundingClientRect(),
        limitsStage = $stage.getBoundingClientRect()
    ;

    switch (e.keyCode) {
        case 37:
            
            //mueve a la izq
            if (limitsBall.left > limitsStage.left) {
                e.preventDefault();  //para que no se mueva la barra del scroll cuando subo y bajo
                x--;
             } //se nueve mientras la posocion de la bola sea mayor que la posicion del fondo.
            break;
        case 38:
           
            //mueve arriba
            if (limitsBall.top > limitsStage.top) {
                 e.preventDefault();
                y--;  //la y es al reves del plano cartesiano
            }
            break;
        case 39:
            
            //mueve a la derecha
            if (limitsBall.right < limitsStage.right) {
                e.preventDefault();
                x++;
            }
            break;
        case 40:
            
            //mueve hacia abajo
            if (limitsBall.bottom < limitsStage.bottom) {
                e.preventDefault();
                y++;
            } 
            break;
    
        default:
            break;
    }
    $ball.style.transform = `translate(${x*10}px, ${y*10}px)`; //muevo con variables
}


export function shortcuts (e) {
    if (e.key === "a" && e.altKey){
        alert("Haz lanzado una alerta con el teclado");
    }

    if (e.key === "c" && e.altKey){
        confirm("Haz lanzado una confiracion con el teclado");
    }

    if (e.key === "p" && e.altKey){
        prompt("Haz lanzado un aviso con el teclado");
    }
}