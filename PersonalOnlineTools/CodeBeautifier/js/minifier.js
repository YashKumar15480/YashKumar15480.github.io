/* =========================
   Minify Functionality
========================= */

const minifyBtn =
    document.getElementById("minifyBtn");

minifyBtn.addEventListener(
    "click",
    minifyCode
);

async function minifyCode() {

    if (!window.inputMonaco ||
        !window.outputMonaco) {
        return;
    }

    const sourceCode =
        inputMonaco.getValue().trim();

    if (!sourceCode) {
        alert("Please enter some code first.");
        return;
    }

    try {

        let result = "";

        switch (window.currentTool) {

            /* =========================
               HTML
            ========================= */

            case "html":

                if (
                    typeof HTMLMinifier === "undefined" &&
                    typeof htmlMinifier === "undefined"
                ) {
                    throw new Error(
                        "HTML Minifier library not loaded."
                    );
                }

                const htmlMinifyFn =
                    window.HTMLMinifier?.minify ||
                    window.htmlMinifier?.minify;

                result = htmlMinifyFn(
                    sourceCode,
                    {
                        collapseWhitespace: true,
                        removeComments: true,
                        removeRedundantAttributes: true,
                        removeEmptyAttributes: true,
                        minifyCSS: true,
                        minifyJS: true
                    }
                );

                break;

            /* =========================
               CSS
            ========================= */

            case "css":

                if (typeof CleanCSS === "undefined") {
                    throw new Error(
                        "CleanCSS library not loaded."
                    );
                }

                result = new CleanCSS({
                    level: 2
                }).minify(sourceCode).styles;

                break;

            /* =========================
               JavaScript
            ========================= */

            case "js":

                if (
                    typeof Terser === "undefined"
                ) {
                    throw new Error(
                        "Terser library not loaded."
                    );
                }

                const jsResult =
                    await Terser.minify(
                        sourceCode
                    );

                if (jsResult.error) {
                    throw jsResult.error;
                }

                result = jsResult.code;

                break;

            default:

                result = sourceCode;
                break;
        }

        outputMonaco.setValue(result);

    } catch (error) {

        console.error(error);

        alert(
            "Unable to minify the code. Please check the syntax."
        );
    }
}

/* =========================
   Expose Globally
========================= */

window.minifyCode = minifyCode;