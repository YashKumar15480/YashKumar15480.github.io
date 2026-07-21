/**
 * ============================================================
 * Editor Counters
 * ============================================================
 */

import {

    getEditorText,
    getWordCount,
    getLineCount,
    generateLineNumbers

} from "../utils/utils.js";

export function updateEditorCounters(

    editor,
    characterElement,
    wordElement,
    lineElement,
    lineNumberElement

) {

    const text = getEditorText(editor);

    const characters = text.length;

    const words = getWordCount(text);

    const lines = getLineCount(text);

    characterElement.textContent = characters;

    wordElement.textContent = words;

    lineElement.textContent = lines;

    if (lineNumberElement) {

        lineNumberElement.innerHTML =
            generateLineNumbers(
                Math.max(lines, 1)
            );

    }

}

export function refreshAllCounters(dom) {

    updateEditorCounters(

        dom.leftEditor,

        dom.leftCharCount,
        dom.leftWordCount,
        dom.leftLineCount,

        dom.leftLineNumbers

    );

    updateEditorCounters(

        dom.rightEditor,

        dom.rightCharCount,
        dom.rightWordCount,
        dom.rightLineCount,

        dom.rightLineNumbers

    );

}