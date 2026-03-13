const audio = document.getElementById("bgAudio")
const muteBtn = document.getElementById("muteBtn")

muteBtn.onclick = () => {

    audio.muted = !audio.muted

    if (audio.muted) {

        muteBtn.innerText = "Music is muted"

    } else {

        muteBtn.innerText = "Enjoy the music"

    }

}