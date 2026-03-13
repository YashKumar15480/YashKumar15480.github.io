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