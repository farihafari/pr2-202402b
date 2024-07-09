let i = 0;
let x = prompt("enter your name");
let y = "FJ1216@"
do{
    i = prompt("enter you pin code");
    if(i!=y){
        alert("incorrect pin code please try again");
    }
  
}while( i !==y);
alert("logged in successfully");
document.querySelector("#h").innerHTML="dear "+x;
document.querySelector("#p").innerHTML="welcome to your portal";