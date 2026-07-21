import {STATUS} from "../config.js";
import {showStatus} from "./notifications.js";

export function enableCompare(button,enabled){
  if(button) button.disabled=!enabled;
}

export function updateToolbarStatus(dom,message=STATUS.READY,error=false){
  showStatus(dom.statusText,message,error);
}
