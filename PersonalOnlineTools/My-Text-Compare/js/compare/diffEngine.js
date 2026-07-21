/**
 * ============================================================
 * My Text Compare
 * Diff Engine (Part 1)
 * ------------------------------------------------------------
 * Longest Common Subsequence (LCS)
 *
 * Responsibilities:
 * - Compare token arrays
 * - Build LCS matrix
 * - Prepare for backtracking
 *
 * Part 2 contains:
 * - Backtracking
 * - Diff generation
 * - Public compare() API
 * ============================================================
 */

import { TOKEN_TYPE } from "./tokenizer.js";
import { DIFF_TYPE } from "../config.js";

/**
 * Compare two tokens.
 */
function tokensEqual(left, right) {

    if (!left || !right) {

        return false;

    }

    return left.normalized === right.normalized;

}

/**
 * Build LCS Matrix.
 *
 * Matrix dimensions:
 *
 * left.length + 1
 * right.length + 1
 */
function buildMatrix(leftTokens, rightTokens) {

    const rows = leftTokens.length + 1;

    const cols = rightTokens.length + 1;

    const matrix = Array.from(

        { length: rows },

        () => new Array(cols).fill(0)

    );

    for (let row = 1; row < rows; row++) {

        for (let col = 1; col < cols; col++) {

            if (

                tokensEqual(

                    leftTokens[row - 1],

                    rightTokens[col - 1]

                )

            ) {

                matrix[row][col] =

                    matrix[row - 1][col - 1] + 1;

            }

            else {

                matrix[row][col] = Math.max(

                    matrix[row - 1][col],

                    matrix[row][col - 1]

                );

            }

        }

    }

    return matrix;

}

/**
 * Create Match Diff.
 */
function createMatch(token) {

    return {

        type: DIFF_TYPE.MATCH,

        left: token,

        right: token

    };

}

/**
 * Create Removed Diff.
 */
function createRemoved(token) {

    return {

        type: DIFF_TYPE.REMOVED,

        left: token,

        right: null

    };

}

/**
 * Create Added Diff.
 */
function createAdded(token) {

    return {

        type: DIFF_TYPE.ADDED,

        left: null,

        right: token

    };

}

/**
 * Split unified diff into
 * left and right render arrays.
 */
function splitDiff(diffList) {

    const left = [];

    const right = [];

    for (const item of diffList) {

        switch (item.type) {

            case DIFF_TYPE.MATCH:

                left.push({

                    type: item.type,

                    token: item.left

                });

                right.push({

                    type: item.type,

                    token: item.right

                });

                break;

            case DIFF_TYPE.REMOVED:

                left.push({

                    type: item.type,

                    token: item.left

                });

                break;

            case DIFF_TYPE.ADDED:

                right.push({

                    type: item.type,

                    token: item.right

                });

                break;

        }

    }

    return {

        left,

        right

    };

}

/**
 * Count statistics.
 */
function calculateStatistics(diffList) {

    let matched = 0;

    let added = 0;

    let removed = 0;

    for (const item of diffList) {

        switch (item.type) {

            case DIFF_TYPE.MATCH:

                if (

                    item.left.type !== TOKEN_TYPE.SPACE &&
                    item.left.type !== TOKEN_TYPE.NEWLINE

                ) {

                    matched++;

                }

                break;

            case DIFF_TYPE.ADDED:

                if (

                    item.right.type !== TOKEN_TYPE.SPACE &&
                    item.right.type !== TOKEN_TYPE.NEWLINE

                ) {

                    added++;

                }

                break;

            case DIFF_TYPE.REMOVED:

                if (

                    item.left.type !== TOKEN_TYPE.SPACE &&
                    item.left.type !== TOKEN_TYPE.NEWLINE

                ) {

                    removed++;

                }

                break;

        }

    }

    const total =

        matched + added + removed;

    const similarity =

        total === 0

            ? 100

            : Math.round(

                (matched / total) * 100

            );

    return {

        matched,

        added,

        removed,

        different: added + removed,

        similarity

    };

}

/**
 * Backtracking starts here.
 *
 * Continued in Part 2.
 */
function backtrack(

    matrix,

    leftTokens,

    rightTokens

) {

    const diff = [];

    let row = leftTokens.length;

    let col = rightTokens.length;
