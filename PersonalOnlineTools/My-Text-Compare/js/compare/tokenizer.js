/**
 * ============================================================
 * My Text Compare
 * Tokenizer
 * ------------------------------------------------------------
 * Converts raw text into structured tokens.
 *
 * Example:
 *
 * Input:
 * Hello, World!
 *
 * Output:
 * [
 *   { id:0, value:"Hello", normalized:"hello", type:"word" },
 *   { id:1, value:",", type:"punctuation" },
 *   { id:2, value:" ", type:"space" },
 *   { id:3, value:"World", normalized:"world", type:"word" },
 *   { id:4, value:"!", type:"punctuation" }
 * ]
 * ============================================================
 */

let tokenId = 0;

/**
 * Token Types
 */
export const TOKEN_TYPE = {

    WORD: "word",

    SPACE: "space",

    NEWLINE: "newline",

    PUNCTUATION: "punctuation"

};

/**
 * Reset tokenizer state.
 */
export function resetTokenizer() {

    tokenId = 0;

}

/**
 * Normalize token value.
 */
function normalizeValue(

    value,

    ignoreCase

) {

    return ignoreCase

        ? value.toLowerCase()

        : value;

}

/**
 * Create token.
 */
function createToken(

    value,

    type,

    ignoreCase

) {

    return {

        id: tokenId++,

        value,

        normalized:

            normalizeValue(

                value,

                ignoreCase

            ),

        type

    };

}

/**
 * Check if character is letter or digit.
 */
function isAlphaNumeric(char) {

    return /[A-Za-z0-9]/.test(char);

}

/**
 * Check punctuation.
 */
function isPunctuation(char) {

    return /[^\w\s]/.test(char);

}

/**
 * Main tokenizer.
 */
export function tokenize(

    text,

    {

        ignoreCase = false,

        ignoreExtraSpaces = false

    } = {}

) {

    resetTokenizer();

    const tokens = [];

    let buffer = "";

    function flushWord() {

        if (!buffer.length) {

            return;

        }

        tokens.push(

            createToken(

                buffer,

                TOKEN_TYPE.WORD,

                ignoreCase

            )

        );

        buffer = "";

    }

    for (

        let i = 0;

        i < text.length;

        i++

    ) {

        const char = text[i];

        // -------------------------
        // Word
        // -------------------------

        if (

            isAlphaNumeric(char)

        ) {

            buffer += char;

            continue;

        }

        flushWord();

        // -------------------------
        // Space
        // -------------------------

        if (char === " ") {

            if (

                ignoreExtraSpaces

            ) {

                while (

                    text[i + 1] === " "

                ) {

                    i++;

                }

            }

            tokens.push(

                createToken(

                    " ",

                    TOKEN_TYPE.SPACE,

                    ignoreCase

                )

            );

            continue;

        }

        // -------------------------
        // New line
        // -------------------------

        if (char === "\n") {

            tokens.push(

                createToken(

                    "\n",

                    TOKEN_TYPE.NEWLINE,

                    ignoreCase

                )

            );

            continue;

        }

        // -------------------------
        // Windows newline
        // -------------------------

        if (char === "\r") {

            continue;

        }

        // -------------------------
        // Punctuation
        // -------------------------

        if (

            isPunctuation(char)

        ) {

            tokens.push(

                createToken(

                    char,

                    TOKEN_TYPE.PUNCTUATION,

                    ignoreCase

                )

            );

            continue;

        }

    }

    flushWord();

    return tokens;

}

/**
 * Get only comparable tokens.
 *
 * Spaces are ignored by the
 * comparison engine.
 */
export function getComparableTokens(

    tokens

) {

    return tokens.filter(token =>

        token.type !== TOKEN_TYPE.SPACE

    );

}

/**
 * Convert token array back to text.
 */
export function tokensToText(

    tokens

) {

    return tokens

        .map(

            token => token.value

        )

        .join("");

}

/**
 * Debug helper.
 */
export function printTokens(tokens) {

    console.table(tokens);

}