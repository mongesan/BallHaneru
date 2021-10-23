TEST1 = 0

WIDTH = window.screen.width
HEIGHT = window.screen.height
X = 0
Y = HEIGHT/2

window.onload = function () {
    const canvas = document.getElementById("game")
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
}

function loop(timestamp) {
    const canvas = document.getElementById("game")
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    ctx.beginPath();
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.rect(X, Y, 50, 50);

    if (X > WIDTH-50){
        TEST1 = 1
    } else if(X < 0) {
        TEST1 = 0
    }

    if (TEST1 == 0){
        X += 10
    } else {
        X -= 10
    }
    ctx.fill();
    window.requestAnimationFrame((ts) => loop(ts))
}

window.requestAnimationFrame((ts) => loop(ts));