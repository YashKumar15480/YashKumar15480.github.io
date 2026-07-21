import {generateLineNumbers,getLineCount,getEditorText} from "../utils/utils.js";

export function updateLineNumbers(editor,target){
 const lines=Math.max(getLineCount(getEditorText(editor)),1);
 target.innerHTML=generateLineNumbers(lines);
}
