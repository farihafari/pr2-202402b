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
    $("#email").on("keyup", function () {
        let uemail = $(this).val();
        let emailRegex = /^[\w]{1,}[@][a-z]{5,9}[.][a-z]{3,3}$/;
        if (!emailRegex.test(uemail)) {
            $(this).css("border", "2px solid red");
            $(this).next("span").html("please follow the valid pattren for email e.g a1@gmail.com").css({
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
    });
    $("#password").on("keyup", function () {
        let pass = $(this).val();
        let passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#$%&])[A-Za-z,\d,!@#$%&]{8,14}$/;
        if (!passRegex.test(pass)) {
            $(this).css("border", "2px solid red");
            $(this).next("span").html("please follow the valid pattren for password at least 8 character are required  with one Aa1@ this pattren").css({
                "color": "red",
                "font-weight": "bold"
            })
        } else {
            $(this).css("border", "2px solid green");
            $(this).next("span").html("valid data ").css({
                "color": "green",
                "font-weight": "bold"
            });

        }
    })
    function emptyInput(id) {
        if ($(id).val() == "") {
            $(id).css("border", "2px solid red");
            $(id).next("span").html("this field is required").css({
                "color": "red",
                "font-weight": "bold"
            })
        }
    }
    $("#register").click(function () {
        let uname = $("#name").val();
        let nameRegex = /^[A-Za-z\s]{3,14}$/;
        let uemail = $("#email").val();
        let emailRegex = /^[\w]{1,}[@][a-z]{5,9}[.][a-z]{3,3}$/;
        let pass = $("#password").val();
        let passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#$%&])[A-Za-z,\d,!@#$%&]{8,14}$/;

        if (uname == "" || uemail == "" || pass == "") {
            emptyInput("#name");
            emptyInput("#email");
            emptyInput("#password");

        }
        else if ((!nameRegex.test(uname)) || (!emailRegex.test(uemail)) || (!passRegex.test(pass))) {
            alert("valid data is required")
        } else if (uname && uemail && pass) {
            let obj = {
                name: uname,
                email: uemail,
                password: pass
            }
            localStorage.setItem("userDetail", JSON.stringify(obj));
            alert("account register successfully");
            location.assign("register.html")
        }

    })
    // login
    $("#login").on("click", function () {
        let uemail = $("#email").val();
        let emailRegex = /^[\w]{1,}[@][a-z]{5,9}[.][a-z]{3,3}$/;
        let pass = $("#password").val();
        let passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#$%&])[A-Za-z,\d,!@#$%&]{8,14}$/;
        if (uemail == "" || pass == "") {

            emptyInput("#email");
            emptyInput("#password");

        }
        else if ((!emailRegex.test(uemail)) || (!passRegex.test(pass))) {
            alert("valid data is required")
        } else if (uemail && pass) {
            let data = JSON.parse(localStorage.getItem("userDetail"));
            if (data.email == uemail && data.password == pass) {
                alert("login successfully");
                window.location.href = "admin.html"
            } else {
                alert("data does not exist")
            }
            // console.log(JSON.parse(data))
        }
    })
    // admin
    let userDetail = JSON.parse(localStorage.getItem("userDetail"));
    // console.log(userDetail.name)
    $("#userName").html("Dear! " + userDetail.name);
    $("#userEmail").html(userDetail.email)

})  