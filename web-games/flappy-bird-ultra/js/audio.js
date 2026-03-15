const audio = document.getElementById("bgAudio")

const muteBtn = document.getElementById("muteBtn")
const popupMuteBtn = document.getElementById("popupMuteBtn")

const sfxJump = document.getElementById("sfxJump")
const sfxGameOver = document.getElementById("sfxGameOver")
const sfxButton = document.getElementById("sfxButton")


function toggleMusic() {

    sfxButton.currentTime = 0
    sfxButton.play()

    audio.muted = !audio.muted

    let text = audio.muted ? "Music is muted" : "Enjoy the music"

    muteBtn.innerText = text

    if (popupMuteBtn) {
        popupMuteBtn.innerText = text
    }

}

muteBtn.addEventListener("click", toggleMusic)

if (popupMuteBtn) {
    popupMuteBtn.addEventListener("click", toggleMusic)
}