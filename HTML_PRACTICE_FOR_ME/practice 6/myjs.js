function check(){
    let n = document.forms["form1"]["Name"].value
    let sn = document.forms["form1"]["sir1"].value
    let ad = document.forms["form1"]["addd"].value

    if(n == "" || sn == "" || ad == ""){alert("Some field is empty"); return false}
    if(ad.length <=10) {alert("Adress to small"); return false}

    
}