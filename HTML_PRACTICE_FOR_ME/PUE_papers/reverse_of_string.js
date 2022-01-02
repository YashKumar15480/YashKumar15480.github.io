// let s ="Yash"
// let a =[]

// for(let i=0;i<s.length;i++)
// {
//     a[i] = s.charAt(i);
// }
// a.push(1)
// a.pop()
// a.shift();
// for(let i=a.length-1;i>=0;i--) console.log(a[i]);

// let s = "123@123.123"

//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(s))console.log("true")
//  else console.log("false");
  

let s  ="7130771701"
if(/[789][0-9]{9}/.test(s) && s.length <= 10) console.log("mob num");
else console.log("random digits");
