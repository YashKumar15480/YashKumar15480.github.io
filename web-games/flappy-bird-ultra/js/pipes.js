const pipes = [];

const pipeWidth = 70;
const pipeGap = 170;
const pipeSpeed = 2;

let pipeTimer = 0;

const pipeTopImg = new Image();
pipeTopImg.src = "assets/images/pipe-top.png";

const pipeBottomImg = new Image();
pipeBottomImg.src = "assets/images/pipe-bottom.png";

function spawnPipe() {

    const min = 60;
    const max = canvas.height - pipeGap - 120;

    const topHeight = Math.random() * (max - min) + min;

    pipes.push({
        x: canvas.width,
        top: topHeight,
        bottom: topHeight + pipeGap,
        passed: false
    });
}

function updatePipes() {

    pipeTimer++;

    if (pipeTimer > 100) {
        spawnPipe();
        pipeTimer = 0;
    }

    pipes.forEach(pipe => {

        pipe.x -= pipeSpeed;

        if (!pipe.passed && pipe.x + pipeWidth < bird.x) {

            score++;
            pipe.passed = true;

            document.getElementById("score").innerText = score;
        }

        if (
            bird.x < pipe.x + pipeWidth &&
            bird.x + bird.width > pipe.x &&
            (
                bird.y < pipe.top ||
                bird.y + bird.height > pipe.bottom
            )
        ) {
            triggerGameOver();
        }
    });

    if (pipes.length && pipes[0].x < -pipeWidth) {
        pipes.shift();
    }
}

function drawPipes() {

    pipes.forEach(pipe => {

        ctx.drawImage(
            pipeTopImg,
            pipe.x,
            pipe.top - pipeTopImg.height,
            pipeWidth,
            pipeTopImg.height
        );

        ctx.drawImage(
            pipeBottomImg,
            pipe.x,
            pipe.bottom,
            pipeWidth,
            pipeBottomImg.height
        );
    });
}