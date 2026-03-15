const audio = document.getElementById("bgAudio")

const muteBtn = document.getElementById("muteBtn")
const popupMuteBtn = document.getElementById("popupMuteBtn")

const sfxButton = document.getElementById("sfxButton")

function toggleMusic() {

    // play button click sound
    sfxButton.currentTime = 0
    sfxButton.play()

    audio.muted = !audio.muted

    let text = audio.muted ? "Music is muted" : "Enjoy the music"

    muteBtn.innerText = text

    // popup button may not exist on home screen load
    if (popupMuteBtn) {
        popupMuteBtn.innerText = text
    }

}


// home screen button
muteBtn.addEventListener("click", toggleMusic)


// popup button
if (popupMuteBtn) {
    popupMuteBtn.addEventListener("click", toggleMusic)
}