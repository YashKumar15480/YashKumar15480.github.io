// [abc]     == a,b or c
// [^abc]    == any character except  a,b or c 
// [a-z]     == a to z
// [A-z]     == A to z
// [a-z,A-Z] == a to z, A to Z

// []?     == occur 0 or 1 times
// []+     == occur 1 or more times
// []*     == occur 0 or more times
// []{n}   == occur n times
// []{n,}  == ocuur n times or more times
// []{y,z} == occur atleast y time but less than z times

// meta character

// \d == 0-9
// \D == negation (0-9)
// \w == a-z,A-Z,0-9
// \W == negation (a-z,A-Z,0-9)


// mobile number validation 

let s = "8130771701"
if(/[789][0-9]{9}/.test(s))console.log("mob number");
else console.log("random digits");

// first character uppercase , contains alphabet, only one digit allowed in between 
let a = "Acslcjndcom112djlsdjl"
if(/[A-Z][a-z]*[0-9][a-z]*/.test(a))console.log("true");
else console.log("false");

//email validation 

let email = "yash.2023mca1038@kiet.edu"
if(/[a-z,A-Z,0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}/.test(email))console.log("Valid email");
else console.log("not a valid email");

//first character captial rest any small letters

let namee  = "Yash"
if(/[A-Z][a-z,^A-Z]+/.test(namee)) console.log("yes");
else console.log("No");
// jhfjbgyhng

let string1 = "abca";
let len = string1.length - 1;
let check = string1.charAt(0);
if(/[a-z]*[check]/.test(string1)) console.log("true");
else console.log("false");
// yash