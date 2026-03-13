const menu = document.querySelector(".menu-container")
const gameContainer = document.getElementById("gameContainer")
const startBtn = document.getElementById("startBtn")

let gameRunning = false


startBtn.onclick = startGame


document.addEventListener("keydown", (e) => {

    if (e.code !== "Space") return

    e.preventDefault()

    if (!gameRunning) return

    bird.velocity = jump

})


canvas.addEventListener("click", () => {

    if (gameRunning) {
        bird.velocity = jump
    }

})


function startGame() {

    menu.classList.add("hidden")
    gameContainer.classList.remove("hidden")

    pipes = []
    score = 0

    bird.y = 200
    bird.velocity = jump

    audio.play()

    gameRunning = true

    lastPipeTime = Date.now()

    loop()

}