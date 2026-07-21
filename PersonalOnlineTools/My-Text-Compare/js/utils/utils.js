/**
 * ============================================================
 * Utility Functions
 * ============================================================
 */

/**
 * Returns plain text from editor.
 */
export function getEditorText(editor) {

    if (!editor) {

        return "";

    }

    return editor.textContent
        .replace(/\u00A0/g, " ")
        .replace(/\r/g, "")
        .trimEnd();

}

/**
 * Sets plain text into editor.
 */
export function setEditorText(editor, text) {

    if (!editor) {

        return;

    }

    editor.textContent = text;

}

/**
 * Clears editor.
 */
export function clearEditor(editor) {

    if (!editor) {

        return;

    }

    editor.textContent = "";

}

/**
 * Normalize text.
 */
export function normalizeText(

    text,

    ignoreCase = false,

    ignoreSpaces = false

) {

    let output = text;

    if (ignoreSpaces) {

        output = output.replace(/\s+/g, " ").trim();

    }

    if (ignoreCase) {

        output = output.toLowerCase();

    }

    return output;

}

/**
 * Count words.
 */
export function getWordCount(text) {

    const cleaned = text.trim();

    if (!cleaned) {

        return 0;

    }

    return cleaned.split(/\s+/).length;

}

/**
 * Count lines.
 */
export function getLineCount(text) {

    if (!text.trim()) {

        return 0;

    }

    return text.split(/\r?\n/).length;

}

/**
 * Escape HTML.
 */
export function escapeHtml(text) {

    return text

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");

}

/**
 * Clamp value.
 */
export function clamp(

    value,

    min,

    max

) {

    return Math.min(

        Math.max(value, min),

        max

    );

}

/**
 * Generate line numbers.
 */
export function generateLineNumbers(totalLines) {

    if (totalLines <= 0) {

        return "1";

    }

    let html = "";

    for (

        let i = 1;

        i <= totalLines;

        i++

    ) {

        html += `<div>${i}</div>`;

    }

    return html;

}

/**
 * Is editor empty?
 */
export function isEditorEmpty(editor) {

    return getEditorText(editor).trim().length === 0;

}

/**
 * Swap values.
 */
export function swapValues(

    left,

    right

) {

    return [

        right,

        left

    ];

}