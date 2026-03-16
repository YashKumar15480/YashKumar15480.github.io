const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const scoreEl = document.getElementById("score");

let gameRunning = false;
let animationFrame;

const birdImg = new Image();
birdImg.src = "assets/images/default-flappy-bird.png";

const bgImg = new Image();
bgImg.src = "assets/images/background-parallax.jpeg";

function startGame() {

    if (gameRunning) return;

    resetGame();
    gameRunning = true;

    loop();
}

function stopGame() {
    gameRunning = false;
    cancelAnimationFrame(animationFrame);
}

function resetGame() {

    bird.y = 300;
    bird.velocity = 0;

    pipes.length = 0;

    score = 0;
    scoreEl.innerText = score;
}

function drawBackground() {

    ctx.drawImage(
        bgImg,
        0,
        0,
        canvas.width,
        canvas.height
    );
}

function drawBird() {

    ctx.drawImage(
        birdImg,
        bird.x,
        bird.y,
        bird.width,
        bird.height
    );
}

function loop() {

    if (!gameRunning) return;

    updatePhysics();
    updatePipes();

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBackground();
    drawPipes();
    drawBird();

    animationFrame = requestAnimationFrame(loop);
}