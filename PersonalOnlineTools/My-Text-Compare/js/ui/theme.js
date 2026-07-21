import {THEMES} from "../config.js";
import {setTheme,AppState} from "../state.js";

export function initializeTheme(){
  const saved=localStorage.getItem("mtc-theme")||THEMES.LIGHT;
  applyTheme(saved);
}

export function toggleTheme(){
  const next=AppState.theme===THEMES.DARK?THEMES.LIGHT:THEMES.DARK;
  applyTheme(next);
}

export function applyTheme(theme){
  document.documentElement.setAttribute("data-theme",theme);
  setTheme(theme);
  localStorage.setItem("mtc-theme",theme);
}
