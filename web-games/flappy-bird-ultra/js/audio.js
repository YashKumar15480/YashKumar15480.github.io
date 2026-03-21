const bgAudio = document.getElementById("bgAudio");
const sfxJump = document.getElementById("sfxJump");
const sfxGameOver = document.getElementById("sfxGameOver");
bgAudio.volume = 0.1;

function playJump() {
    try {
        sfxJump.currentTime = 0;   // 🔁 reset
        sfxJump.volume = 0.3;
        sfxJump.play();
    } catch (e) {}
}

function playGameOver() {
    try {
        sfxGameOver.currentTime = 0;
        sfxGameOver.volume = 0.5;
        sfxGameOver.play();
    } catch (e) {}
}

function toggleMusic() {
    if (bgAudio.paused) {
        bgAudio.play();
    } else {
        bgAudio.pause();
    }
}