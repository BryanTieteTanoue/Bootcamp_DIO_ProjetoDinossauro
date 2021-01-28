const dino = document.querySelector('.dino');

function handleKeyUp(event) { //responsável por capturar o usuário apertando "espaço"
    if(event.keyCode === 32) { //32 é o ódigo do espaço
        jump();
    }
}

function jump() { //faz o pulos
    let position = 0;

    //subindo
    let upInterval = setInterval(() => {
        if (position >= 150){
            clearInterval(upInterval); // faz parar de subir

            //descendo
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    dino.style.bottom =  + 'px'; //reseta na posição certa
                }
                
                position -= 20;
                dino.style.bottom = position + 'px';
            }, 20);
        } else {
            position += 20;
            dino.style.bottom = position + 'px';
        }   
    }, 20);


}

document.addEventListener('keyup', handleKeyUp); //adiciona o capturador de eventos