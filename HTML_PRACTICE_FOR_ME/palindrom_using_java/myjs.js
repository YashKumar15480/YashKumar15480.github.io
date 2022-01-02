let a = [1,2,3,"yash",3,2,1]
let flag = 0;
for(let i=0,j=a.length-1;i<a.length;i++,j--){
  if(a[i]!=a[j]){flag++; break;}   
}
(flag == 0)?console.log("palindrome"):console.log("Not a palindrome");