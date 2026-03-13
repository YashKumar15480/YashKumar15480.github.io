const audio = document.getElementById("bgAudio")

const muteBtn = document.getElementById("muteBtn")
const popupMuteBtn = document.getElementById("popupMuteBtn")

function toggleMusic() {

    audio.muted = !audio.muted

    let text = audio.muted ? "Music is muted" : "Enjoy the music"

    muteBtn.innerText = text

    if (popupMuteBtn) {
        popupMuteBtn.innerText = text
    }

}

muteBtn.onclick = toggleMusic

if (popupMuteBtn) {
    popupMuteBtn.onclick = toggleMusic
}