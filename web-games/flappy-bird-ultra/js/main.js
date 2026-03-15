const menu = document.querySelector(".menu-container")
const gameContainer = document.getElementById("gameContainer")
const startBtn = document.getElementById("startBtn")
const backHomeBtn = document.getElementById("backHomeBtn")

const sfxButton = document.getElementById("sfxButton")

let gameRunning = false


startBtn.onclick = () => {

    sfxButton.currentTime = 0
    sfxButton.play()

    startGame()

}


document.addEventListener("keydown", (e) => {

    if (e.code !== "Space") return

    e.preventDefault()

    if (collisionPause) return


    // start game
    if (!gameRunning && popup.classList.contains("hidden")) {
        startGame()
        return
    }


    // flap bird
    if (gameRunning) {

        bird.velocity = jump

        sfxJump.currentTime = 0
        sfxJump.play()

        return
    }


    // restart after countdown
    if (!gameRunning && allowRestartWithSpace) {
        restartGame()
    }

})


// mouse click
canvas.addEventListener("click", () => {

    if (collisionPause) return

    if (gameRunning) {

        bird.velocity = jump

        sfxJump.currentTime = 0
        sfxJump.play()

    }

})


// mobile touch
canvas.addEventListener("touchstart", (e) => {

    e.preventDefault()

    if (collisionPause) return

    if (!gameRunning && popup.classList.contains("hidden")) {
        startGame()
        return
    }

    if (gameRunning) {

        bird.velocity = jump

        sfxJump.currentTime = 0
        sfxJump.play()

        return
    }

    if (!gameRunning && allowRestartWithSpace) {
        restartGame()
    }

})


function startGame() {

    menu.classList.add("hidden")
    gameContainer.classList.remove("hidden")

    pipes = []
    score = 0
    scoreEl.innerText = score

    bird.y = 200
    bird.velocity = jump

    audio.currentTime = 0
    audio.play()

    gameRunning = true

    lastPipeTime = Date.now()

    loop()

}


function restartGame() {

    popup.classList.add("hidden")

    pipes = []
    score = 0
    scoreEl.innerText = score

    bird.y = 200
    bird.velocity = jump

    audio.currentTime = 0
    audio.play()

    gameRunning = true

    lastPipeTime = Date.now()

    loop()

}


backHomeBtn.onclick = () => {

    sfxButton.currentTime = 0
    sfxButton.play()

    goToHome()

}


function goToHome() {

    popup.classList.add("hidden")

    gameContainer.classList.add("hidden")
    menu.classList.remove("hidden")

    audio.pause()

    pipes = []
    score = 0

    scoreEl.innerText = score

    // reload highscore from cookie
    let storedHighScore = getCookie("flappyHighScore")

    highscoreEl.innerText = storedHighScore ? storedHighScore : 0

    gameRunning = false

}