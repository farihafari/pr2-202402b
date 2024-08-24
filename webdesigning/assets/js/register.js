$(document).ready(function () {
    $("#name").on("keyup", function () {
        let uname = $(this).val();
        let nameRegex = /^[A-Za-z\s]{3,14}$/;
        console.log("uname")
        if (!nameRegex.test(uname)) {
            $(this).css("border", "2px solid red");
            $(this).next("span").html("at least 3 character are required or maximun 14 ").css({
                "color": "red",
                "font-weight": "bold"
            })
        } else {
            $(this).css("border", "2px solid green");
            $(this).next("span").html("valid data ").css({
                "color": "green",
                "font-weight": "bold"
            })
        }
    })
    
})