const dino = document.querySelector('.dino');

function handleKeyUp(event) {
    if(event.keyCode === 32) { //32 é o ódigo do espaço
        console.log("espaço")
    }
}

document.addEventListener('keyup', handleKeyUp);