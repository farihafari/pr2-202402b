function userDetail(){
    let uName = document.querySelector("#name").value;
    let uEmail = document.querySelector("#email").value;
    let uQualification = document.querySelector("#qualification").value;
    let uAge = document.querySelector("#age").value;
    let x ="<tr><td>"+uName+"</td><td>"+uEmail+"</td><td>"+uQualification+"</td><td>"+uAge+"</td></tr>";
 document.querySelector("#detail").innerHTML+=x;

}
