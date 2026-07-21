/**
 * ============================================================
 * Line Numbers
 * ============================================================
 */

import {

    generateLineNumbers,
    getLineCount,
    getEditorText

} from "../utils/utils.js";

export function updateLineNumbers(

    editor,
    lineNumbers

) {

    const text =
        getEditorText(editor);

    const lines =
        Math.max(
            getLineCount(text),
            1
        );

    lineNumbers.innerHTML =
        generateLineNumbers(lines);

}

export function syncLineNumberScroll(

    editor,
    lineNumbers

) {

    lineNumbers.scrollTop =
        editor.scrollTop;

}