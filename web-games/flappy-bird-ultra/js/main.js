const startBtn = document.getElementById("startBtn");
const gameContainer = document.getElementById("gameContainer");
const menuContainer = document.querySelector(".menu-container");
let inputEnabled = true;

startBtn.addEventListener("click", startGameFromMenu);

document.addEventListener("keydown", e => {
    if (!inputEnabled) return; // 🚫 block input

    if (e.code === "Space") {
        if (!gameRunning) {
            startGameFromMenu();
        } else {
            flap();
        }
    }
});
canvas.addEventListener("click", () => {
    if (!inputEnabled) return;
    flap();
});

function startGameFromMenu() {
    menuContainer.classList.add("hidden");
    gameContainer.classList.remove("hidden");

    // 🔊 Toggle background music
    playBackgroundMusic();
    startGame();
}