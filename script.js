let canvas = document.getElementById('snake')
let context = canvas.getContext("2d")
let box = 32
let sneak = []
sneak[0] = {
    x: 8 * box,
    y: 8 * box
}

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
    for (let i = 0; i < sneak.length; i++) {
        context.fillStyle = "green";
        context.fillRect(sneak[i].x, sneak[i].y, box, box);
    }
}

criarBG();
criarCobrinha();