import {DIFF_TYPE} from "../config.js";

export function calculateStatistics(diff){
 let matched=0,added=0,removed=0;
 for(const d of diff){
   if(d.type===DIFF_TYPE.MATCH) matched++;
   if(d.type===DIFF_TYPE.ADDED) added++;
   if(d.type===DIFF_TYPE.REMOVED) removed++;
 }
 const total=matched+added+removed;
 return {
   matched,
   added,
   removed,
   different:added+removed,
   similarity: total?Math.round((matched/total)*100):100
 };
}
