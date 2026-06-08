/* =========================
   Beautify Functionality
========================= */

const beautifyBtn =
    document.getElementById("beautifyBtn");

beautifyBtn.addEventListener(
    "click",
    beautifyCode
);

function beautifyCode() {

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

            case "html":

                result = html_beautify(
                    sourceCode,
                    {
                        indent_size: 2,
                        indent_char: " ",
                        preserve_newlines: true,
                        max_preserve_newlines: 2,
                        wrap_line_length: 0,
                        end_with_newline: false
                    }
                );

                break;

            case "css":

                result = css_beautify(
                    sourceCode,
                    {
                        indent_size: 2,
                        indent_char: " "
                    }
                );

                break;

            case "js":

                result = js_beautify(
                    sourceCode,
                    {
                        indent_size: 2,
                        indent_char: " ",
                        preserve_newlines: true,
                        max_preserve_newlines: 2
                    }
                );

                break;

            default:

                result = sourceCode;
                break;
        }

        outputMonaco.setValue(result);

    } catch (error) {

        console.error(error);

        alert(
            "Unable to beautify the code. Please check the syntax."
        );
    }
}

/* =========================
   Expose Globally
========================= */

window.beautifyCode = beautifyCode;