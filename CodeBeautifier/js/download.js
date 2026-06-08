/* =========================
   Download Output Functionality
========================= */

const downloadBtn =
    document.getElementById("downloadBtn");

downloadBtn.addEventListener(
    "click",
    downloadOutputCode
);

function downloadOutputCode() {

    if (!window.outputMonaco) {
        return;
    }

    const outputCode =
        outputMonaco.getValue();

    if (!outputCode.trim()) {

        alert(
            "There is no output code to download."
        );

        return;
    }

    let extension = "txt";
    let mimeType = "text/plain";

    switch (window.currentTool) {

        case "html":
            extension = "html";
            mimeType = "text/html";
            break;

        case "css":
            extension = "css";
            mimeType = "text/css";
            break;

        case "js":
            extension = "js";
            mimeType = "application/javascript";
            break;
    }

    const fileName =
        `formatted.${extension}`;

    const blob = new Blob(
        [outputCode],
        {
            type: `${mimeType};charset=utf-8`
        }
    );

    const url =
        URL.createObjectURL(blob);

    const link =
        document.createElement("a");

    link.href = url;
    link.download = fileName;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);

    const originalHtml =
        downloadBtn.innerHTML;

    downloadBtn.innerHTML =
        '<i class="fa-solid fa-check"></i> Downloaded';

    downloadBtn.disabled = true;

    setTimeout(() => {

        downloadBtn.innerHTML =
            originalHtml;

        downloadBtn.disabled = false;

    }, 2000);
}

/* =========================
   Expose Globally
========================= */

window.downloadOutputCode =
    downloadOutputCode;