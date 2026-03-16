const startBtn = document.getElementById("startBtn");
const gameContainer = document.getElementById("gameContainer");
const menuContainer = document.querySelector(".menu-container");

startBtn.addEventListener("click", startGameFromMenu);

document.addEventListener("keydown", e => {

    if (e.code === "Space") {

        if (!gameRunning) {
            startGameFromMenu();
        } else {
            flap();
        }
    }
});

canvas.addEventListener("click", flap);

function startGameFromMenu() {

    menuContainer.classList.add("hidden");
    gameContainer.classList.remove("hidden");

    startGame();
}