
let check = ()=>{
    debugger
    var arr = [560063, 560030, 560034, 560007, 560092, 560024, 562106, 560045, 560050, 560003];
    // console.log(arr[0]);
    var pin = parseInt(document.getElementById("pinc").value);
    for(let x=0;x<arr.length;x++){
        if(pin==arr[x]){
            document.getElementById("show").innerHTML=`Available at this Pincode`;
            break;
        }
        else{
            document.getElementById("show").innerHTML=`Not Available at this Pincode`;
        }
    }
}
var i = 1;
 document.getElementById("values").innerHTML=`
 <button type="button" class="btn btn-light" onclick="dec()"><i class="bi bi-dash-lg"></i></button>
 <span class="border" id="num">${i}</span>
 <button type="button" class="btn btn-light" onclick="inc()"><i class="bi bi-plus-lg"></i></button>`;
let dec = ()=>{
    if(i<=0){
        num.innerHTML=`${i}`
        alert("Please Select atleast 1 Quantity");
    }
    else{
        num.innerHTML=`${--i}`
    }
}
let inc = ()=>{
    num.innerHTML=`${++i}`
}
