const themeToggle = document.getElementById("themeToggle");

let currentTheme = "light";

function setLightTheme() {

    document.documentElement.removeAttribute("data-theme");

    currentTheme = "light";

    const icon = themeToggle.querySelector("i");

    if (icon) {
        icon.className = "fa-solid fa-moon";
    }

    if (window.monaco) {
        monaco.editor.setTheme("vs");
    }
}

function setDarkTheme() {

    document.documentElement.setAttribute(
        "data-theme",
        "dark"
    );

    currentTheme = "dark";

    const icon = themeToggle.querySelector("i");

    if (icon) {
        icon.className = "fa-solid fa-sun";
    }

    if (window.monaco) {
        monaco.editor.setTheme("vs-dark");
    }
}

themeToggle.addEventListener("click", () => {

    if (currentTheme === "light") {
        setDarkTheme();
    } else {
        setLightTheme();
    }

});

/*
    Expose globally in case
    future versions need it
*/
window.setLightTheme = setLightTheme;
window.setDarkTheme = setDarkTheme;