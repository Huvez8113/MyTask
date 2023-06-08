
let validate = () => {
    debugger
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var cname = document.getElementById("comname").value;
    var count = document.getElementById("count").value;
    var sadd1 = document.getElementById("sadd1").value;
    // var sadd2 = document.getElementById("sadd2").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    var num = document.getElementById("num").value;
    var em = document.getElementById("em").value;
    var checkbox = document.getElementById("checkbox");

    var arr1 = [560063, 560030, 560034, 560007, 560092, 560024, 562106, 560045, 560050, 560003];

    var number = /^[9876][0-9]{9}$/;
    var e = /([a-z A-Z 0-9]+)@([a-z]+)[\.]([a-z]{3,4})/;

    if(fname.trim()=="" && lname.trim()=="" && cname.trim()=="" && count.trim()=="" && sadd1.trim()=="" && city.trim()=="" && state.trim()=="" && zip.trim()=="" && num.trim()=="" && em.trim()=="")
    {
        alert("Please fill the form first")
    }
    else if(number.test(num)!=true && e.test(em)!=true)
    {
        alert("Please fill Valid Details")
    }
    else{
        
    for(let x=0;x<arr1.length;x++){
        if(zip!=arr1[x]){
            alert("Not Available for this Pincode");
            break;
        }
     }
    }
}