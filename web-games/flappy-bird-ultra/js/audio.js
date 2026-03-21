const bgAudio = document.getElementById("bgAudio");
const sfxJump = document.getElementById("sfxJump");
const sfxGameOver = document.getElementById("sfxGameOver");

function playJump() {
    sfxJump.currentTime = 0;
    sfxJump.play();
}

function playGameOver() {
    sfxGameOver.play();
}

function toggleMusic() {
    if (bgAudio.paused) {
        bgAudio.play();
    } else {
        bgAudio.pause();
    }
}