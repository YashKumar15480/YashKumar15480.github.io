
function check(){

  let fname = document.forms["form-1"]["username"].value;
  let lname = document.forms["form-1"]["password"].value;

  if(fname == "riya" && lname == "1234") return true;
  else {alert("Invalid User");return false;}
}  
function check1()
{

  let email = document.forms["form1"]["email"].value
   
  if(/[a-z,A-Z,0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}/.test(email)) return true;
  else {alert("Invalid Email"); return false}

}