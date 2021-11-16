function func1(){
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
  let em = document.forms["myform"]["email"].value;
  
  if(em == "" ){
      alert("Enter a valid Email");
      return false;
  }
  else if (re.test(String(email).toLowerCase()) == false) {alert("Your email id is not valid"); return false;}
  else 
  { alert("You Email found in Database");
  return true;   
}
}