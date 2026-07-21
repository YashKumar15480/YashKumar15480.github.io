// =========================================
// UI Events
// =========================================

import {
    clearEditor,
    getEditorText,
    setEditorText
} from "./utils.js";

import { compareText } from "./compare.js";

export function initializeUI(elements) {

    const {

        leftEditor,
        rightEditor,

        compareBtn,
        clearBtn,
        swapBtn,

        statusText

    } = elements;

    compareBtn.addEventListener("click", () => {

        compareText();

        statusText.textContent = "Comparison completed.";

    });

    clearBtn.addEventListener("click", () => {

        clearEditor(leftEditor);
        clearEditor(rightEditor);

        statusText.textContent = "Editors cleared.";

    });

    swapBtn.addEventListener("click", () => {

        const left = getEditorText(leftEditor);
        const right = getEditorText(rightEditor);

        setEditorText(leftEditor, right);
        setEditorText(rightEditor, left);

        statusText.textContent = "Editors swapped.";

    });

}