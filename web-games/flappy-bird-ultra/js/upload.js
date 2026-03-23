const previewCanvas = document.getElementById("previewCanvas");
const previewCtx = previewCanvas.getContext("2d");

imageUpload.addEventListener("change", function() {
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(e) {
        birdImg.src = e.target.result;
        drawPreview();
    };

    reader.readAsDataURL(file);
});

// 🎨 Draw preview
function drawPreview() {
    previewCtx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
    previewCtx.drawImage(birdImg, 20, 20, 80, 60);
}