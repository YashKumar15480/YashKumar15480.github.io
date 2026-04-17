const uploadBtn = document.getElementById("uploadBtn");
const imageUpload = document.getElementById("imageUpload");
const previewCanvas = document.getElementById("previewCanvas");
const previewCtx = previewCanvas.getContext("2d");

// 📂 Open file picker when button clicked
uploadBtn.addEventListener("click", () => {
    imageUpload.click();
});

// 📥 Handle image upload
imageUpload.addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {
        birdImg.src = e.target.result;

        // Wait for image to load before drawing
        birdImg.onload = () => {
            drawPreview();
        };
    };

    reader.readAsDataURL(file);
});

// 🖼 Draw preview canvasss added
function drawPreview() {
    previewCtx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);

    const scale = Math.min(
        previewCanvas.width / birdImg.width,
        previewCanvas.height / birdImg.height
    );

    const width = birdImg.width * scale;
    const height = birdImg.height * scale;

    const x = (previewCanvas.width - width) / 2;
    const y = (previewCanvas.height - height) / 2;

    previewCtx.drawImage(birdImg, x, y, width, height);
}