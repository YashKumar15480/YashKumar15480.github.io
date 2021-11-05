function func1(){
  let em = document.forms["myform"]["email"].value;
  if(em == "" ){
      alert("Enter a valid Email");
      return false;
  }
  else 
  { alert("You Email found in Database");
  return true;   
}
}