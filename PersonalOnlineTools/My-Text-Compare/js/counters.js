// =========================================
// Counter Functions
// =========================================

import { getEditorText } from "./utils.js";

export function updateCounters(
    editor,
    charElement,
    wordElement,
    lineElement
) {

    const text = getEditorText(editor);

    const characters = text.length;

    const words =
        text.trim() === ""
            ? 0
            : text.trim().split(/\s+/).length;

    const lines =
        text === ""
            ? 0
            : text.split(/\n/).length;

    charElement.textContent = characters;
    wordElement.textContent = words;
    lineElement.textContent = lines;
}