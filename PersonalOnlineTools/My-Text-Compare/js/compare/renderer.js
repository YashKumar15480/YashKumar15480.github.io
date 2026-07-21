import {DIFF_TYPE,CSS_CLASS} from "../config.js";

function esc(v){
 return v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

export function renderSide(diff,side){

 let html="";

 for(const item of diff){

   const token=side==="left"?item.left:item.right;

   if(!token) continue;

   let cls="";

   switch(item.type){
     case DIFF_TYPE.MATCH: cls=CSS_CLASS.MATCH; break;
     case DIFF_TYPE.ADDED: cls=CSS_CLASS.ADDED; break;
     case DIFF_TYPE.REMOVED: cls=CSS_CLASS.REMOVED; break;
   }

   html+=`<span class="${cls}">${esc(token.value)}</span>`;
 }

 return html;
}
