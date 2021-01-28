const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;

function handleKeyUp(event) { //responsável por capturar o usuário apertando "espaço"
    if(event.keyCode === 32) { //32 é o ódigo do espaço
        if (!isJumping) {
            jump();    
        }
    }
}

function jump() { //faz o pulos
    position = 0;

    isJumping = true;

    //subindo
    let upInterval = setInterval(() => {
        if (position >= 150){
            clearInterval(upInterval); // faz parar de subir

            //descendo
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    position = 20;
                    dino.style.bottom = position + 'px'; //reseta na posição certa, ficava um pouco abixo do oriignal
                    isJumping = false;
                    clearInterval(downInterval);
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

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval (() => {
        if (cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus); //deleta o catus, evita processamento desnecessário
        } else  if (cactusPosition > 0  &&  cactusPosition < 60 && position < 60){
            //game over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class = "gameoveer">Fim de jogo</h1>';
        } else {    
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    },20)

    setTimeout(createCactus, randomTime); //recursividade, chama a funçaõ depois de um tempo aleátorio

}

createCactus();
document.addEventListener('keyup', handleKeyUp); //adiciona o capturador de eventos