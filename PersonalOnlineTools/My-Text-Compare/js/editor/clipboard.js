import {getEditorText} from "../utils/utils.js";

export async function copyEditor(editor){
 const text=getEditorText(editor);
 if(!text) return false;
 await navigator.clipboard.writeText(text);
 return true;
}
