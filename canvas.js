TEST1 = 0

// WIDTH = window.screen.width
// HEIGHT = window.screen.height

SIZE = 100
X = 50 + Math.random() * window.screen.width * 0.7 - SIZE
Y = 50 + Math.random() * window.screen.height * 0.7 - SIZE
DEG = 50
SPEED = 15

// window.onload = function () {
//     const canvas = document.getElementById("game")
//     canvas.width = window.screen.width;
//     canvas.height = window.screen.height;
// }

function loop(timestamp) {
    const canvas = document.getElementById("game")
    const ctx = canvas.getContext('2d');
    WIDTH = window.screen.width * 0.8
    HEIGHT = window.screen.height * 0.8
    canvas.width = WIDTH
    canvas.height = HEIGHT
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    DEG += 0.5
    collusionDetect(WIDTH, HEIGHT)

    X += Math.sin(radian(DEG)) * SPEED
    Y += Math.cos(radian(DEG)) * SPEED

    // ctx.beginPath();
    // ctx.fillStyle = 'rgb(255, 255, 255)';
    // ctx.rect(X, Y, SIZE, SIZE);
    // ctx.fill();

    ctx.beginPath();
    ctx.arc(X+SIZE/2, Y+SIZE/2, SIZE/2, 0 * Math.PI / 180, 360 * Math.PI / 180);
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = 'rgb(255, 0, 0)';
    ctx.moveTo(X + SIZE / 2, Y + SIZE / 2);
    ctx.lineTo(X + Math.sin(radian(DEG)) * 100 + SIZE / 2, Y + Math.cos(radian(DEG)) * 100 + SIZE / 2);
    ctx.closePath();
    ctx.stroke();

    document.getElementById("pos").textContent = "X:" + Math.floor(X) + ", Y:" + Math.floor(Y);
    document.getElementById("screen-size").textContent = "ScreenX:" + Math.floor(WIDTH) + ", ScreenY:" + Math.floor(HEIGHT);
    document.getElementById("deg").textContent = DEG +"°";
    window.requestAnimationFrame((ts) => loop(ts));
}

window.requestAnimationFrame((ts) => loop(ts));

function collusionDetect(WIDTH, HEIGHT) {
    if (X > WIDTH - SIZE || X < 0) {
        // 右・左面衝突
        DEG = -(DEG - 180) + 180
    }

    if (Y < 0 || Y + SIZE > HEIGHT) {
        if (DEG > 180) {
            DEG = 540 - DEG
        } else {
            DEG = 180 - DEG
        }
    }
}

function radian(deg) {
    return deg * Math.PI / 180
}