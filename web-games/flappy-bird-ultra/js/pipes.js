let pipeSpeed = 1.4   // slower pipe movement

let pipeGap = 170     // guaranteed bird space
let pipeSpawnInterval = 1400  // milliseconds

let lastPipeTime = 0


function createPipe() {

    let minTop = 60
    let maxTop = canvas.height - pipeGap - 120

    let top = Math.random() * (maxTop - minTop) + minTop

    pipes.push({

        x: canvas.width,
        top: top,
        bottom: top + pipeGap,
        width: 70,
        passed: false

    })

}



function updatePipes() {

    for (let pipe of pipes) {

        pipe.x -= pipeSpeed

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

            pipe.hit = true
            collisionPause = true
            pauseAndEndGame()

        }

    }

    pipes = pipes.filter(pipe => pipe.x > -80)

}