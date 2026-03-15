const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")

const scoreEl = document.getElementById("score")
const highscoreEl = document.getElementById("highscore")
const finalScore = document.getElementById("finalScore")
const finalHighScore = document.getElementById("finalHighScore")

const popup = document.getElementById("gameOverPopup")

const sfxJump = document.getElementById("sfxJump")
const sfxGameOver = document.getElementById("sfxGameOver")

let birdImage = new Image()
birdImage.src = "assets/images/default-flappy-bird.png"

let backgroundImage = new Image()
backgroundImage.src = "assets/images/background-parallex.jpeg"

let bgX = 0

let bird = {
    x: 80,
    y: 200,
    width: 45,
    height: 35,
    velocity: 0
}

let pipes = []
let score = 0
let highscore = 0

let collisionPause = false

// --- HIGH SCORE INITIALIZATION ---
let storedHighScore = getCookie("flappyHighScore")

if (storedHighScore === "") {
    setCookie("flappyHighScore", 0, 365)
    storedHighScore = 0
}

highscore = parseInt(storedHighScore)
highscoreEl.innerText = highscore


function drawBird() {

    ctx.drawImage(birdImage, bird.x, bird.y, bird.width, bird.height)

}


function drawBackground() {

    bgX -= 0.25

    if (bgX <= -canvas.width) {
        bgX = 0
    }

    ctx.save()

    ctx.filter = "blur(4px)"

    ctx.drawImage(backgroundImage, bgX, 0, canvas.width, canvas.height)
    ctx.drawImage(backgroundImage, bgX + canvas.width, 0, canvas.width, canvas.height)

    ctx.restore()

}


function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // background first
    drawBackground()

    // pipes
    for (let pipe of pipes) {

        ctx.fillStyle = pipe.hit ? "red" : "green"

        ctx.fillRect(pipe.x, 0, pipe.width, pipe.top)
        ctx.fillRect(pipe.x, pipe.bottom, pipe.width, canvas.height)

    }

    // bird last
    drawBird()

}


function update() {

    if (collisionPause) return

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


function pauseAndEndGame() {

    collisionPause = true
    gameRunning = false

    // play game over sound
    sfxGameOver.currentTime = 0
    sfxGameOver.play()

    setTimeout(() => {

        collisionPause = false
        endGame()

    }, 2000)

}


function endGame() {

    let storedHighScore = parseInt(getCookie("flappyHighScore"))

    if (score > storedHighScore) {

        setCookie("flappyHighScore", score, 365)
        storedHighScore = score

    }

    highscore = storedHighScore

    finalScore.innerText = score
    finalHighScore.innerText = storedHighScore

    popup.classList.remove("hidden")

    startRestartCountdown()

}