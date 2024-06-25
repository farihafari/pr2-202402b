let val1= 6;
let val2=9;
document.querySelector("#v1").innerHTML= "before swapping the value of varibale one is " +val1;
document.querySelector("#v2").innerHTML= "before swapping the value of varibale two is " +val2;
function swapping(){
    let v3 ;
    v3=val1;
    val1=val2;
    val2=v3;
    document.querySelector("#heading").innerHTML = " after swapping ";
    document.querySelector("#vv1").innerHTML="before swapping the value of varibale one is "+val1;
    document.querySelector("#vv2").innerHTML="before swapping the value of varibale one is "+val2;
}
