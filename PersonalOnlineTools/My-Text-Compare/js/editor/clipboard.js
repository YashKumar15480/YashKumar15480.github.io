/**
 * ============================================================
 * Clipboard
 * ============================================================
 */

import {

    getEditorText

} from "../utils/utils.js";

export async function copyEditorText(

    editor,
    button

) {

    const text =
        getEditorText(editor);

    if (!text) {

        return;

    }

    try {

        await navigator
            .clipboard
            .writeText(text);

        const original =
            button.textContent;

        button.textContent =
            "Copied ✓";

        setTimeout(() => {

            button.textContent =
                original;

        }, 2000);

    }

    catch (error) {

        console.error(error);

    }

}