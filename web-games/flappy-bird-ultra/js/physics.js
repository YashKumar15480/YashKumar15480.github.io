let gravity = 0.35
let jump = -5


function applyPhysics() {

    bird.velocity += gravity

    bird.y += bird.velocity

    if (bird.y + bird.height > canvas.height) {

        bird.y = canvas.height - bird.height
        pauseAndEndGame()

    }

    if (bird.y < 0) {
        bird.y = 0
    }

}