import {DOM} from "./utils/dom.js";
import {refreshAll} from "./editor/counters.js";
import {debounce} from "./utils/debounce.js";
import {initializeTheme} from "./ui/theme.js";
import {syncEditors} from "./editor/scrollSync.js";
import {compare} from "./compare/compare.js";
import {updateToolbarStatus,enableCompare} from "./ui/toolbar.js";
import {STATUS} from "./config.js";

function update(){
  refreshAll(DOM);
  const ok=DOM.leftEditor.textContent.trim()&&DOM.rightEditor.textContent.trim();
  enableCompare(DOM.compareBtn,!!ok);
}

document.addEventListener("DOMContentLoaded",()=>{

 initializeTheme();

 refreshAll(DOM);

 syncEditors(
   DOM.leftEditor,
   DOM.rightEditor,
   DOM.leftLineNumbers,
   DOM.rightLineNumbers
 );

 const handler=debounce(update,150);

 DOM.leftEditor?.addEventListener("input",handler);
 DOM.rightEditor?.addEventListener("input",handler);

 DOM.compareBtn?.addEventListener("click",()=>{

   const result=compare(
     DOM.leftEditor.textContent,
     DOM.rightEditor.textContent,
     {
       ignoreCase:DOM.ignoreCase?.checked,
       ignoreExtraSpaces:DOM.ignoreSpaces?.checked
     }
   );

   DOM.leftEditor.innerHTML=result.leftHtml;
   DOM.rightEditor.innerHTML=result.rightHtml;

   DOM.matchedCount.textContent=result.statistics.matched;
   DOM.differentCount.textContent=result.statistics.different;
   DOM.similarityPercentage.textContent=result.statistics.similarity+"%";

   updateToolbarStatus(DOM,STATUS.COMPLETED);

 });

 update();
});
