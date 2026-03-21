let score = 0;

function getHighScore() {
    return Number(localStorage.getItem("flappyHighScore")) || 0;
}

function setHighScore(newScore) {
    const high = getHighScore();
    if (newScore > high) {
        localStorage.setItem("flappyHighScore", newScore);
    }
}