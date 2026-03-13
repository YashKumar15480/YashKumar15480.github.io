const menu = document.querySelector(".menu-container")
const gameContainer = document.getElementById("gameContainer")
const startBtn = document.getElementById("startBtn")

let gameRunning = false


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

    bird.velocity = jump

    loop()

}


function endGame() {

    gameRunning = false

    if (score > highscore) {

        highscore = score
        setCookie("flappyHighScore", score, 365)

    }

    finalScore.innerText = score
    finalHighScore.innerText = highscore

    popup.classList.remove("hidden")

}