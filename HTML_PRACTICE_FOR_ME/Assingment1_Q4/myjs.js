//inputs
var customer_profile = document.createElement("form");
var Name = document.createElement("input");
var address = document.createElement("input");
var age = document.createElement("input");
var m = document.createElement("input"); //male
var f = document.createElement("input"); //female
    m.type = "radio";
    m.name = "gender";
    m.value = "Male";
    
    f.type = "radio";
    f.name = "gender";
    f.value = "Female";

//label for male-female
var lm = document.createElement("label");
lm.innerHTML = "Male";
var lf = document.createElement("label");
lf.innerHTML = "Female";
    
//list for roomtype
var rt = document.createElement("select");
var ac = document.createElement("option");
var nac = document.createElement("option");
var delx = document.createElement("option");

    ac.innerHTML = "A/C";
    nac.innerHTML = "Non-A/C";
    delx.innerHTML = "Delux";
    
    rt.appendChild(ac);
    rt.appendChild(nac);
    rt.appendChild(delx);

//list for payment
var payment = document.createElement("select");
var cash = document.createElement("option");
var debit_credit = document.createElement("option");
var coupons = document.createElement("option");
    
    cash.innerHTML = "Cash";
    debit_credit.innerHTML = "Credit/Debit Card";
    coupons.innerHTML = "Coupons";
    
    payment.appendChild(cash);
    payment.appendChild(debit_credit);
    payment.appendChild(coupons);

var btn = document.createElement("button");
btn.innerHTML = "Book";
btn.type = "submit";

customer_profile.addEventListener("submit",function(){
    alert("Hotel booked successfully");
});


//appending all in form
customer_profile.appendChild(document.createTextNode("Name "));
customer_profile.appendChild(Name);
customer_profile.appendChild(document.createElement("br"));
customer_profile.appendChild(document.createTextNode("Address "));
customer_profile.appendChild(address);
customer_profile.appendChild(document.createElement("br"));
customer_profile.appendChild(document.createTextNode("Age "));
customer_profile.appendChild(age);
customer_profile.appendChild(document.createElement("br"));
customer_profile.appendChild(document.createTextNode("Gender "));
customer_profile.appendChild(m);
customer_profile.appendChild(lm);
customer_profile.appendChild(f);
customer_profile.appendChild(lf);
customer_profile.appendChild(document.createElement("br"));
customer_profile.appendChild(document.createTextNode("Room type "));
customer_profile.appendChild(rt);
customer_profile.appendChild(document.createElement("br"));
customer_profile.appendChild(document.createTextNode("Type of payment "));
customer_profile.appendChild(payment);
customer_profile.appendChild(document.createElement("br"));
customer_profile.appendChild(btn);
document.body.appendChild(customer_profile);