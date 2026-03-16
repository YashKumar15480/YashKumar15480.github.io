const imageUpload = document.getElementById("imageUpload");

imageUpload.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {
        birdImg.src = e.target.result;
    };

    reader.readAsDataURL(file);
});