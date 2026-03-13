const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")

const menu = document.querySelector(".menu-container")
const gameContainer = document.getElementById("gameContainer")

const scoreEl = document.getElementById("score")
const highscoreEl = document.getElementById("highscore")

const startBtn = document.getElementById("startBtn")

const uploadBtn = document.getElementById("uploadBtn")
const imageUpload = document.getElementById("imageUpload")

const muteBtn = document.getElementById("muteBtn")

const audio = document.getElementById("bgAudio")

// Default bird image
let birdImage = new Image()
birdImage.src = "assets/images/default-flappy-bird.png"

let gameRunning = false

let bird = {
    x: 80,
    y: 200,
    width: 45,
    height: 35,
    velocity: 0
}

// Improved physics
let gravity = 0.35
let jump = -7

let pipes = []

let score = 0

let highscore = getCookie("flappyHighScore")

if (highscore == "") highscore = 0

highscoreEl.innerText = highscore



function setCookie(name, value, days) {

    let d = new Date()

    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000))

    let expires = "expires=" + d.toUTCString()

    document.cookie = name + "=" + value + ";" + expires + ";path=/"

}



function getCookie(name) {

    let cname = name + "="

    let ca = document.cookie.split(';')

    for (let c of ca) {

        c = c.trim()

        if (c.indexOf(cname) == 0)
            return c.substring(cname.length, c.length)

    }

    return ""

}



uploadBtn.onclick = () => imageUpload.click()



imageUpload.addEventListener("change", function () {

    let file = this.files[0]

    if (!file) return

    if (file.size > 2 * 1024 * 1024) {

        alert("Image must be under 2MB")
        return

    }

    let reader = new FileReader()

    reader.onload = function (e) {

        birdImage = new Image()
        birdImage.src = e.target.result

    }

    reader.readAsDataURL(file)

})



muteBtn.onclick = () => {

    audio.muted = !audio.muted

}



startBtn.onclick = startGame



document.addEventListener("keydown", (e) => {

    if (e.code === "Space") {

        if (!gameRunning) {

            startGame()

        } else {

            bird.velocity = jump

        }

    }

})



canvas.addEventListener("click", () => {

    if (gameRunning) {

        bird.velocity = jump

    }

})



function startGame() {

    menu.classList.add("hidden")
    gameContainer.classList.remove("hidden")

    audio.play()

    gameRunning = true

    // initial lift to prevent instant drop
    bird.velocity = jump

    loop()

}



function createPipe() {

    let gap = 160

    let top = Math.random() * 250 + 50

    pipes.push({

        x: canvas.width,
        top: top,
        bottom: top + gap,
        width: 70,
        passed: false

    })

}



function drawBird() {

    ctx.drawImage(birdImage, bird.x, bird.y, bird.width, bird.height)

}



function update() {

    bird.velocity += gravity
    bird.y += bird.velocity


    // Soft ground collision
    if (bird.y + bird.height > canvas.height) {

        bird.y = canvas.height - bird.height
        endGame()

    }


    if (bird.y < 0)
        bird.y = 0



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



function endGame() {

    gameRunning = false


    if (score > highscore) {

        setCookie("flappyHighScore", score, 365)

    }


    alert("Game Over. Score: " + score)

    location.reload()

}