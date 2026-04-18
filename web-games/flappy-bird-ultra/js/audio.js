const bgAudio = document.getElementById("bgAudio");
const sfxJump = document.getElementById("sfxJump");
const sfxGameOver = document.getElementById("sfxGameOver");

const muteBtn = document.getElementById("muteBtn");
const popupMuteBtn = document.getElementById("popupMuteBtn");

// 🔊 Audio control
let sfxEnabled = true;
let musicEnabled = true;

bgAudio.volume = 0.05;

// 🎵 BACKGROUND MUSIC TOGGLE added
function toggleMusic() {
    musicEnabled = !musicEnabled;

    if (musicEnabled) {
        bgAudio.play();
        updateMusicButtons("Mute Music");
    } else {
        bgAudio.pause();
        updateMusicButtons("Play Music");
    }
}

function updateMusicButtons(text) {
    if (muteBtn) muteBtn.innerText = text;
    if (popupMuteBtn) popupMuteBtn.innerText = text;
}

// 🔊 SFX TOGGLE
function toggleSFX() {
    sfxEnabled = !sfxEnabled;
    updateSFXButtons();
}

function updateSFXButtons() {
    const text = sfxEnabled ? "Playing SFX Audio" : "SFX Muted";

    document.querySelectorAll(".sfx-toggle").forEach(btn => {
        btn.innerText = text;
    });
}

// 🎮 SFX PLAY
function playJump() {
    if (!sfxEnabled) return;

    sfxJump.currentTime = 0;
    sfxJump.volume = 0.5;
    sfxJump.play();
}

function playGameOver() {
    if (!sfxEnabled) return;

    sfxGameOver.currentTime = 0;
    sfxGameOver.volume = 0.5;
    sfxGameOver.play();
}

// 🎧 Attach events (IMPORTANT)
if (muteBtn) muteBtn.addEventListener("click", toggleMusic);
if (popupMuteBtn) popupMuteBtn.addEventListener("click", toggleMusic);

document.addEventListener("click", e => {
    if (e.target.classList.contains("sfx-toggle")) {
        toggleSFX();
    }
});

function playBackgroundMusic() {
    if (musicEnabled) {
        bgAudio.currentTime = 0;
        bgAudio.play().catch(() => {});
    }
}

function stopBackgroundMusic() {
    bgAudio.pause();
    bgAudio.currentTime = 0;
}

// Initialize button labels
updateMusicButtons("Play Background Music");
updateSFXButtons();