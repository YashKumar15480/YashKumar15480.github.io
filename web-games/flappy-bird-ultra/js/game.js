const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")

const scoreEl = document.getElementById("score")
const highscoreEl = document.getElementById("highscore")

let birdImage = new Image()
birdImage.src = "assets/images/default-flappy-bird.png"

const restartTimerText = document.getElementById("restartTimer")

let allowRestartWithSpace = false

let backgroundImage = new Image()
backgroundImage.src = "assets/images/background-parallex.jpeg"

let bgX = 0
let collisionPause = false

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



function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // DRAW BACKGROUND FIRST
    drawBackground()

    // DRAW PIPES
    for (let pipe of pipes) {

        ctx.fillStyle = pipe.hit ? "red" : "green"

        ctx.fillRect(pipe.x, 0, pipe.width, pipe.top)
        ctx.fillRect(pipe.x, pipe.bottom, pipe.width, canvas.height)

    }

    // DRAW BIRD LAST (top layer)
    drawBird()

}



function update() {

    applyPhysics()

    updatePipes()

    let now = Date.now()

    if (now - lastPipeTime > pipeSpawnInterval) {

        createPipe()
        lastPipeTime = now

    }

}



function loop() {

    if (!gameRunning) return

    update()
    draw()

    requestAnimationFrame(loop)

}

function endGame() {

    gameRunning = false

    audio.pause()

    if (score > highscore) {

        highscore = score
        setCookie("flappyHighScore", score, 365)

    }

    finalScore.innerText = score
    finalHighScore.innerText = highscore

    popup.classList.remove("hidden")

    startRestartCountdown()

}

function startRestartCountdown() {

    allowRestartWithSpace = false

    let timeLeft = 3

    restartTimerText.innerText = "Restart available in " + timeLeft

    let countdown = setInterval(() => {

        timeLeft--

        if (timeLeft > 0) {

            restartTimerText.innerText = "Restart available in " + timeLeft

        } else {

            clearInterval(countdown)

            restartTimerText.innerText = "Press SPACE to restart"

            allowRestartWithSpace = true

        }

    }, 1000)

}

function pauseAndEndGame() {

    gameRunning = false

    setTimeout(() => {

        collisionPause = false
        endGame()

    }, 2000)

}
function drawBackground() {

    bgX -= 0.25

    if (bgX <= -canvas.width) {
        bgX = 0
    }

    ctx.save()

    // stronger blur for background
    ctx.filter = "blur(4px)"

    // draw large image smoothly scaled
    ctx.drawImage(backgroundImage, bgX, 0, canvas.width, canvas.height)
    ctx.drawImage(backgroundImage, bgX + canvas.width, 0, canvas.width, canvas.height)

    ctx.restore()

}