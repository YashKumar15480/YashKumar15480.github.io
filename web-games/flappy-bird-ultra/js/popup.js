const popup = document.getElementById("gameOverPopup")

const finalScore = document.getElementById("finalScore")
const finalHighScore = document.getElementById("finalHighScore")

const restartTimerText = document.getElementById("restartTimer")

let allowRestartWithSpace = false


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