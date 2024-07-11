let input = document.querySelector("#cinput");

function numbers(num){
  input.value +=num; 
// console.log(num) 
}
function operators(op){
    input.value +=op;
}
function calculation(){
    let result = eval(input.value);
    input.value= result;
}
function clearAll(){
    input.value = "";
}
function deleteOnce(){
    let orignalStr = input;
  

    orignalStr.value = orignalStr.value.substring(0,orignalStr.value.length-1);
   
}