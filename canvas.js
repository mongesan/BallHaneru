const canvas = document.getElementById("game")
WIDTH = window.screen.width
HEIGHT = window.screen.height
canvas.width = WIDTH;
canvas.height = HEIGHT;
const ctx = canvas.getContext('2d');


function loop(timestamp) {
    context.clearRect(0, 0, WIDTH, HEIGHT);
    
    window.requestAnimationFrame((ts) => loop(ts))
}
window.requestAnimationFrame((ts) => loop(ts));