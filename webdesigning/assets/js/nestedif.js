let userAge = prompt('enter your age');
if(userAge){
    if(userAge>0){
        if(userAge>18 && userAge<=40){
            // let userName = prompt("enter your name");
            alert("you may eligible to take admission")
        }
        else
        {
            alert("your age limitions is not valid");
        }
    }
    else{
    alert("only positive numbers are required");
    location.assign("nestedif.html")
    }
}else{
    alert("please enter the age first");
    location.assign("nestedif.html")
}