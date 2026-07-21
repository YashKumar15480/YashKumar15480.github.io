// =========================================
// Application Entry
// =========================================

import { updateCounters } from "./counters.js";
import { initializeUI } from "./ui.js";

const leftEditor = document.getElementById("leftEditor");
const rightEditor = document.getElementById("rightEditor");
const leftLineNumbers =
    document.getElementById("leftLineNumbers");

const rightLineNumbers =
    document.getElementById("rightLineNumbers");

const leftCharCount = document.getElementById("leftCharCount");
const leftWordCount = document.getElementById("leftWordCount");
const leftLineCount = document.getElementById("leftLineCount");

const rightCharCount = document.getElementById("rightCharCount");
const rightWordCount = document.getElementById("rightWordCount");
const rightLineCount = document.getElementById("rightLineCount");

initializeUI({

    leftEditor,
    rightEditor,

    compareBtn: document.getElementById("compareBtn"),
    clearBtn: document.getElementById("clearBtn"),
    swapBtn: document.getElementById("swapBtn"),

    statusText: document.getElementById("statusText")

});

function refreshCounters() {

    updateCounters(
        leftEditor,
        leftCharCount,
        leftWordCount,
        leftLineCount
    );

    updateCounters(
        rightEditor,
        rightCharCount,
        rightWordCount,
        rightLineCount
    );

}

leftEditor.addEventListener("input", refreshCounters);
rightEditor.addEventListener("input", refreshCounters);

refreshCounters();