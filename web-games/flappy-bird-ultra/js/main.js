const menu = document.querySelector(".menu-container")
const gameContainer = document.getElementById("gameContainer")
const startBtn = document.getElementById("startBtn")

let gameRunning = false


startBtn.onclick = startGame


document.addEventListener("keydown",(e)=>{

if(e.code !== "Space") return

e.preventDefault()

// start game
if(!gameRunning && popup.classList.contains("hidden")){
    startGame()
    return
}

// flap bird
if(gameRunning){
    bird.velocity = jump
    return
}

// restart after countdown
if(!gameRunning && allowRestartWithSpace){
    restartGame()
}

})


canvas.addEventListener("click",()=>{

if(gameRunning){
    bird.velocity = jump
}

})


function startGame(){

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



function restartGame(){

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