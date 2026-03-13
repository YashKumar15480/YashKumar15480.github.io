const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")

const scoreEl = document.getElementById("score")
const highscoreEl = document.getElementById("highscore")

let birdImage = new Image()
birdImage.src = "assets/images/default-flappy-bird.png"

let bird = {

    x: 80,
    y: 200,
    width: 45,
    height: 35,
    velocity: 0

}

let pipes = []

let score = 0

let highscore = getCookie("flappyHighScore")

if (highscore == "") highscore = 0

highscoreEl.innerText = highscore


function drawBird() {

    ctx.drawImage(birdImage, bird.x, bird.y, bird.width, bird.height)

}


function update() {

    applyPhysics()

    for (let pipe of pipes) {

        pipe.x -= 2

        if (!pipe.passed && pipe.x < bird.x) {

            pipe.passed = true
            score++

            scoreEl.innerText = score

        }

        if (

            bird.x < pipe.x + pipe.width &&
            bird.x + bird.width > pipe.x &&
            (bird.y < pipe.top || bird.y + bird.height > pipe.bottom)

        ) {

            endGame()

        }

    }

    pipes = pipes.filter(p => p.x > -60)

    if (Math.random() < 0.02) {

        createPipe()

    }

}


function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    drawBird()

    ctx.fillStyle = "green"

    for (let pipe of pipes) {

        ctx.fillRect(pipe.x, 0, pipe.width, pipe.top)
        ctx.fillRect(pipe.x, pipe.bottom, pipe.width, canvas.height)

    }

}


function loop() {

    if (!gameRunning) return

    update()
    draw()

    requestAnimationFrame(loop)

}