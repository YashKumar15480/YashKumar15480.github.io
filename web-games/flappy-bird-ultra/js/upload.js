const uploadBtn = document.getElementById("uploadBtn")
const imageUpload = document.getElementById("imageUpload")

uploadBtn.onclick = () => {

    sfxButton.currentTime = 0
    sfxButton.play()

    imageUpload.click()

}

imageUpload.addEventListener("change", function () {

    let file = this.files[0]

    if (!file) return

    if (file.size > 2 * 1024 * 1024) {

        alert("Image must be under 2MB")
        return

    }

    let reader = new FileReader()

    reader.onload = function (e) {

        birdImage = new Image()
        birdImage.src = e.target.result

    }

    reader.readAsDataURL(file)

})