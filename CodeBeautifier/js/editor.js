/* =========================
   Monaco Editor Setup
========================= */

window.inputMonaco = null;
window.outputMonaco = null;

require.config({
    paths: {
        vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.2/min/vs"
    }
});

require(["vs/editor/editor.main"], function () {

    /* =========================
       Input Editor
    ========================= */

    window.inputMonaco = monaco.editor.create(
        document.getElementById("inputEditor"),
        {
            value: "",

            language: "html",

            theme: document.documentElement.getAttribute("data-theme") === "dark"
                ? "vs-dark"
                : "vs",

            automaticLayout: true,

            fontSize: 14,

            wordWrap: "on",

            minimap: {
                enabled: false
            },

            scrollBeyondLastLine: false,

            roundedSelection: true,

            renderWhitespace: "selection",

            tabSize: 2,

            insertSpaces: true
        }
    );

    /* =========================
       Output Editor
    ========================= */

    window.outputMonaco = monaco.editor.create(
        document.getElementById("outputEditor"),
        {
            value: "",

            language: "html",

            theme: document.documentElement.getAttribute("data-theme") === "dark"
                ? "vs-dark"
                : "vs",

            automaticLayout: true,

            fontSize: 14,

            wordWrap: "on",

            minimap: {
                enabled: false
            },

            scrollBeyondLastLine: false,

            roundedSelection: true,

            renderWhitespace: "selection",

            tabSize: 2,

            insertSpaces: true
        }
    );

    /* =========================
       Focus Input On Load
    ========================= */

    inputMonaco.focus();

    console.log("Monaco Editors Initialized");
});