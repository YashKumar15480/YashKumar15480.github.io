import {tokenize} from "./tokenizer.js";
import {compareTokens} from "./diffEngine.js";
import {calculateStatistics} from "./statistics.js";
import {renderSide} from "./renderer.js";

export function compare(leftText,rightText,options={}){

 const left=tokenize(leftText,options);
 const right=tokenize(rightText,options);

 const diff=compareTokens(left,right);

 return{
   diff,
   statistics:calculateStatistics(diff),
   leftHtml:renderSide(diff,"left"),
   rightHtml:renderSide(diff,"right")
 };

}
