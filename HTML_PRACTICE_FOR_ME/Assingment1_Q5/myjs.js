function func11() {
    
 let fname = document.forms["myform"]["Fname"].value;
 let lname = document.forms["myform"]["Lname"].value;
 let age = document.forms["myform"]["Age"].value;
 let doj = document.forms["myform"]["DOJ"].value;
 let cs = document.forms["myform"]["CS"].value;
 let dept = document.forms["myform"]["DEPT"].value;
 let JobType = document.forms["myform"]["JobType"].value;
 let idcard = document.forms["myform"]["IDcard"].value;

if(fname == "")       {alert("Enter First Name"); return false;}
else if(lname == "")  {alert("Enter Last Name"); return false;}
else if(age == "")    {alert("Enter Age "); return false;}
else if(doj == "")    {alert("Enter Date of Joining"); return false;}
else if(cs == "")     {alert("Enter Current Salary"); return false;}
else if(dept == "")   {alert("Enter your Department"); return false;}
else if(JobType == ""){alert("Enter Job Type"); return false;}
else if(idcard == "") {alert("Enter ID card Number"); return false;}
else {alert("Please check all deatails. All details are re-directed to HOD : yash.2023mca1038@kiet.edu"); return true;}
}