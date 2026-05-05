const gameOverPopup = document.getElementById("gameOverPopup");
const finalScoreEl = document.getElementById("finalScore");
const finalHighScoreEl = document.getElementById("finalHighScore");
const restartTimerEl = document.getElementById("restartTimer");
const backHomeBtn = document.getElementById("backHomeBtn");
const advancedBtn = document.getElementById("advancedBtn");
const advancedPopup = document.getElementById("advancedPopup");
const closeAdvanced = document.getElementById("closeAdvanced");


function triggerGameOver() {
    if (!gameRunning) return;

   
    inputEnabled = false;


    stopGame();

  
    stopBackgroundMusic();
    playGameOver();

    
    setTimeout(() => {
        showGameOverPopup(score);
    }, 2000);
}

function showGameOverPopup(score) {

    finalScoreEl.innerText = score;

   
    setHighScore(score);
    const high = getHighScore();
    finalHighScoreEl.innerText = high;

   
    gameOverPopup.classList.remove("hidden");

   
    let timeLeft = 3;
    restartTimerEl.innerText = `Restart available in ${timeLeft}`;

    const timer = setInterval(() => {
        timeLeft--;
        restartTimerEl.innerText = `Restart available in ${timeLeft}`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            restartTimerEl.innerText = "Press Space or Click to Restart";

            inputEnabled = true; 
        }
    }, 1000);
}


document.addEventListener("keydown", e => {
    const isPopupVisible = !gameOverPopup.classList.contains("hidden");
    if (e.code === "Space" && isPopupVisible && inputEnabled) {
        restartGame();
    }
});

document.getElementById("game").addEventListener("click", () => {
    const isPopupVisible = !gameOverPopup.classList.contains("hidden");

    if (isPopupVisible && inputEnabled) {
        restartGame();
    }
});

function restartGame() {
    gameOverPopup.classList.add("hidden");

 
    playBackgroundMusic();

    startGame();
}


backHomeBtn.addEventListener("click", () => {
    gameOverPopup.classList.add("hidden");

    document.getElementById("gameContainer").classList.add("hidden");
    document.querySelector(".menu-container").classList.remove("hidden");

    
    inputEnabled = true;
});

advancedBtn.addEventListener("click", () => {
    advancedPopup.classList.remove("hidden");
    drawPreview();
});

closeAdvanced.addEventListener("click", () => {
    advancedPopup.classList.add("hidden");
});


window.addEventListener("click", (e) => {
    if (e.target === advancedPopup) {
        advancedPopup.classList.add("hidden");
    }
});