/* =========================
   Application Controller
========================= */

const toolTitle = document.getElementById("toolTitle");
const toolItems = document.querySelectorAll("[data-tool]");

window.currentTool = "html";

/* =========================
   Tool Configuration
========================= */

const toolConfig = {
    html: {
        title: "HTML Beautifier",
        language: "html",
        extension: "html"
    },

    css: {
        title: "CSS Beautifier",
        language: "css",
        extension: "css"
    },

    js: {
        title: "JavaScript Beautifier",
        language: "javascript",
        extension: "js"
    }
};

/* =========================
   Active Menu Highlight
========================= */

function updateActiveTool(selectedTool) {

    toolItems.forEach(item => {

        item.classList.remove("active");

        if (
            item.getAttribute("data-tool") ===
            selectedTool
        ) {
            item.classList.add("active");
        }

    });
}

/* =========================
   Clear Editors
========================= */

function clearEditors() {

    if (window.inputMonaco) {
        inputMonaco.setValue("");
    }

    if (window.outputMonaco) {
        outputMonaco.setValue("");
    }
}

/* =========================
   Change Tool
========================= */

function switchTool(tool) {

    if (!toolConfig[tool]) {
        return;
    }

    window.currentTool = tool;

    const config = toolConfig[tool];

    toolTitle.textContent = config.title;

    updateActiveTool(tool);

    if (
        window.inputMonaco &&
        window.outputMonaco
    ) {

        monaco.editor.setModelLanguage(
            inputMonaco.getModel(),
            config.language
        );

        monaco.editor.setModelLanguage(
            outputMonaco.getModel(),
            config.language
        );

        clearEditors();

        inputMonaco.focus();
    }

    if (typeof closeSidebar === "function") {
        closeSidebar();
    }

    console.log(
        `Tool changed to: ${config.title}`
    );
}

/* =========================
   Menu Events
========================= */

toolItems.forEach(item => {

    item.addEventListener("click", () => {

        const selectedTool =
            item.getAttribute("data-tool");

        switchTool(selectedTool);

    });

});

/* =========================
   Clear Button
========================= */

const clearBtn =
    document.getElementById("clearBtn");

clearBtn.addEventListener("click", () => {

    clearEditors();

    if (window.inputMonaco) {
        inputMonaco.focus();
    }

});

/* =========================
   Initialize
========================= */

updateActiveTool("html");

window.switchTool = switchTool;
window.clearEditors = clearEditors;