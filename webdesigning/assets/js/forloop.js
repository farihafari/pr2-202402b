for(let i = 0;i<10;i++){
    if(i%2==0){
    document.querySelector("#d").innerHTML+=`<p style="background-color:blue;color:white">${i}</p>`;
}else{
    document.querySelector("#d").innerHTML+=`<p style="background-color:brown;color:white">${i}</p>`;

}
}

