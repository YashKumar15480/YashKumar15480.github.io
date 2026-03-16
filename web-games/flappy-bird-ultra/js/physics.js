const gravity = 0.45;
const jumpForce = -8;

const bird = {
    x: 90,
    y: 300,
    width: 40,
    height: 30,
    velocity: 0
};

function flap() {

    if (!gameRunning) return;

    bird.velocity = jumpForce;

    playJump();
}

function updatePhysics() {

    bird.velocity += gravity;
    bird.y += bird.velocity;

    if (bird.y + bird.height >= canvas.height) {
        triggerGameOver();
    }

    if (bird.y < 0) {
        bird.y = 0;
    }
}