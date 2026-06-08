/* =========================
   Copy Output Functionality
========================= */

const copyBtn =
    document.getElementById("copyBtn");

copyBtn.addEventListener(
    "click",
    copyOutputCode
);

async function copyOutputCode() {

    if (!window.outputMonaco) {
        return;
    }

    const outputCode =
        outputMonaco.getValue();

    if (!outputCode.trim()) {

        alert(
            "There is no output code to copy."
        );

        return;
    }

    try {

        await navigator.clipboard.writeText(
            outputCode
        );

        const originalHtml =
            copyBtn.innerHTML;

        copyBtn.innerHTML =
            '<i class="fa-solid fa-check"></i> Copied';

        copyBtn.disabled = true;

        setTimeout(() => {

            copyBtn.innerHTML =
                originalHtml;

            copyBtn.disabled = false;

        }, 2000);

    } catch (error) {

        console.error(error);

        /*
            Fallback for older browsers
        */

        try {

            const textarea =
                document.createElement(
                    "textarea"
                );

            textarea.value =
                outputCode;

            textarea.style.position =
                "fixed";

            textarea.style.opacity =
                "0";

            document.body.appendChild(
                textarea
            );

            textarea.focus();

            textarea.select();

            document.execCommand(
                "copy"
            );

            document.body.removeChild(
                textarea
            );

            const originalHtml =
                copyBtn.innerHTML;

            copyBtn.innerHTML =
                '<i class="fa-solid fa-check"></i> Copied';

            copyBtn.disabled = true;

            setTimeout(() => {

                copyBtn.innerHTML =
                    originalHtml;

                copyBtn.disabled = false;

            }, 2000);

        } catch (fallbackError) {

            console.error(
                fallbackError
            );

            alert(
                "Failed to copy code."
            );
        }
    }
}

/* =========================
   Expose Globally
========================= */

window.copyOutputCode =
    copyOutputCode;