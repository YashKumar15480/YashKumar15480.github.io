/**
 * ============================================================
 * Debounce
 * ============================================================
 */

export function debounce(

    callback,

    delay = 250

) {

    let timer;

    return (...args) => {

        clearTimeout(timer);

        timer = setTimeout(() => {

            callback(...args);

        }, delay);

    };

}