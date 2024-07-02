// let x = 0;
// while(x<10){
//     document.write("the loop count is "+x+"<br>");
//     x++;
// }
function whileLoop(){
let inital = parseInt(document.querySelector("#num1").value);
let final = parseInt(document.querySelector('#num2').value);
let loopDiv = document.querySelector("#loop");
if(inital<final){
while(inital<=final){
    loopDiv.innerHTML+=`<p>${inital}</p>`;
    inital++;
}
}else{
    alert("initial value must be less than to final")
}
}