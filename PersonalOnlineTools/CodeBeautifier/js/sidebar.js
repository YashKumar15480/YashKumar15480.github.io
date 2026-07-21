const menuBtn = document.getElementById("menuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function openSidebar() {
    sidebar.classList.add("open");
    overlay.classList.add("show");
}

function closeSidebar() {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
}

menuBtn.addEventListener("click", () => {
    openSidebar();
});

closeMenuBtn.addEventListener("click", () => {
    closeSidebar();
});

overlay.addEventListener("click", () => {
    closeSidebar();
});

/*
    Make globally accessible so other files
    (app.js) can close the menu after tool selection
*/
window.closeSidebar = closeSidebar;
window.openSidebar = openSidebar;