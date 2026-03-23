const gameOverPopup = document.getElementById("gameOverPopup");
const finalScoreEl = document.getElementById("finalScore");
const finalHighScoreEl = document.getElementById("finalHighScore");
const restartTimerEl = document.getElementById("restartTimer");
const backHomeBtn = document.getElementById("backHomeBtn");
const advancedBtn = document.getElementById("advancedBtn");
const advancedPopup = document.getElementById("advancedPopup");
const closeAdvanced = document.getElementById("closeAdvanced");


function triggerGameOver() {
    stopGame();
    stopBackgroundMusic(); // 🎯 stop music on game over
    playGameOver();
    showGameOverPopup(score);
}

function showGameOverPopup(score) {
    // ✅ Update score
    finalScoreEl.innerText = score;

    // ✅ Update high score
    setHighScore(score);
    const high = getHighScore();
    finalHighScoreEl.innerText = high;

    // ✅ Show popup
    gameOverPopup.classList.remove("hidden");

    // ⏳ Restart timer (3 → 0)
    let timeLeft = 3;
    restartTimerEl.innerText = `Restart available in ${timeLeft}`;

    const timer = setInterval(() => {
        timeLeft--;
        restartTimerEl.innerText = `Restart available in ${timeLeft}`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            restartTimerEl.innerText = "Press Space or Click to Restart";
        }
    }, 1000);
}

// 🔁 Restart handling
document.addEventListener("keydown", e => {
    const isPopupVisible = !gameOverPopup.classList.contains("hidden");
    if (e.code === "Space" && isPopupVisible) {
        restartGame();
    }
});

document.getElementById("game").addEventListener("click", () => {
    const isPopupVisible = !gameOverPopup.classList.contains("hidden");
    if (isPopupVisible) {
        restartGame();
    }
});

function restartGame() {
    gameOverPopup.classList.add("hidden");
    startGame();
}

// 🏠 Back to menu
backHomeBtn.addEventListener("click", () => {
    gameOverPopup.classList.add("hidden");
    document.getElementById("gameContainer").classList.add("hidden");
    document.querySelector(".menu-container").classList.remove("hidden");
});

advancedBtn.addEventListener("click", () => {
    advancedPopup.classList.remove("hidden");
    drawPreview();
});

closeAdvanced.addEventListener("click", () => {
    advancedPopup.classList.add("hidden");
});

// Click outside to close
window.addEventListener("click", (e) => {
    if (e.target === advancedPopup) {
        advancedPopup.classList.add("hidden");
    }
});