export function syncEditors(left,right,leftNums,rightNums){

  left.addEventListener("scroll",()=>{
    right.scrollTop=left.scrollTop;
    if(leftNums) leftNums.scrollTop=left.scrollTop;
    if(rightNums) rightNums.scrollTop=left.scrollTop;
  });

  right.addEventListener("scroll",()=>{
    left.scrollTop=right.scrollTop;
    if(leftNums) leftNums.scrollTop=right.scrollTop;
    if(rightNums) rightNums.scrollTop=right.scrollTop;
  });

}
