let gravity = 0.35
let jump = -6

function applyPhysics() {

    bird.velocity += gravity
    bird.y += bird.velocity

    if (bird.y + bird.height > canvas.height) {

        bird.y = canvas.height - bird.height
        endGame()

    }

    if (bird.y < 0)
        bird.y = 0

}