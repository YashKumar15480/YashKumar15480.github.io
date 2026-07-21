import {getEditorText,getWordCount,getLineCount,generateLineNumbers} from "../utils/utils.js";

export function updateCounters(editor,charEl,wordEl,lineEl,lineNoEl){
 const text=getEditorText(editor);
 const chars=text.length;
 const words=getWordCount(text);
 const lines=Math.max(getLineCount(text),1);

 if(charEl) charEl.textContent=chars;
 if(wordEl) wordEl.textContent=words;
 if(lineEl) lineEl.textContent=lines===1&&text===""?0:lines;
 if(lineNoEl) lineNoEl.innerHTML=generateLineNumbers(lines);
}

export function refreshAll(dom){
 updateCounters(dom.leftEditor,dom.leftCharCount,dom.leftWordCount,dom.leftLineCount,dom.leftLineNumbers);
 updateCounters(dom.rightEditor,dom.rightCharCount,dom.rightWordCount,dom.rightLineCount,dom.rightLineNumbers);
}
