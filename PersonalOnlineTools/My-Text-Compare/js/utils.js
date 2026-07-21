// =========================================
// Utility Functions
// =========================================

/**
 * Get plain text from a contenteditable element.
 */
export function getEditorText(editor) {
    return editor.innerText.replace(/\r/g, "");
}

/**
 * Set plain text into a contenteditable element.
 */
export function setEditorText(editor, text) {
    editor.innerText = text;
}

/**
 * Remove extra spaces.
 */
export function normalizeSpaces(text) {
    return text.replace(/\s+/g, " ").trim();
}

/**
 * Clear editor content.
 */
export function clearEditor(editor) {
    editor.innerHTML = "";
}