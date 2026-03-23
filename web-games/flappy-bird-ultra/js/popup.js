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

    // 🚫 disable input
    inputEnabled = false;

    // ⏸ stop game loop immediately
    stopGame();

    // 🎵 stop music + play SFX
    stopBackgroundMusic();
    playGameOver();

    // ⏳ Delay popup by 2 seconds
    setTimeout(() => {
        showGameOverPopup(score);
    }, 2000);
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

            inputEnabled = true; // ✅ unlock here ONLY
        }
    }, 1000);
}

// 🔁 Restart handling
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

    // 🎵 restart background music (respect user setting)
    playBackgroundMusic();

    startGame();
}

// 🏠 Back to menu
backHomeBtn.addEventListener("click", () => {
    gameOverPopup.classList.add("hidden");

    document.getElementById("gameContainer").classList.add("hidden");
    document.querySelector(".menu-container").classList.remove("hidden");

    // ✅ Re-enable input immediately
    inputEnabled = true;
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