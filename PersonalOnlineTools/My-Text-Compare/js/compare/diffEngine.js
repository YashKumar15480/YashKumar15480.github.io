/**
 * LCS Diff Engine
 */
import {DIFF_TYPE} from "../config.js";

function eq(a,b){
  return a.normalized===b.normalized;
}

function matrix(a,b){
  const m=Array.from({length:a.length+1},()=>Array(b.length+1).fill(0));
  for(let i=1;i<=a.length;i++){
    for(let j=1;j<=b.length;j++){
      m[i][j]=eq(a[i-1],b[j-1])
        ?m[i-1][j-1]+1
        :Math.max(m[i-1][j],m[i][j-1]);
    }
  }
  return m;
}

export function compareTokens(left,right){

  const lcs=matrix(left,right);
  const diff=[];

  let i=left.length;
  let j=right.length;

  while(i>0||j>0){

    if(i>0&&j>0&&eq(left[i-1],right[j-1])){
      diff.unshift({
        type:DIFF_TYPE.MATCH,
        left:left[i-1],
        right:right[j-1]
      });
      i--;j--;
    }
    else if(j>0&&(i===0||lcs[i][j-1]>=lcs[i-1][j])){
      diff.unshift({
        type:DIFF_TYPE.ADDED,
        left:null,
        right:right[j-1]
      });
      j--;
    }
    else{
      diff.unshift({
        type:DIFF_TYPE.REMOVED,
        left:left[i-1],
        right:null
      });
      i--;
    }
  }

  return diff;
}
