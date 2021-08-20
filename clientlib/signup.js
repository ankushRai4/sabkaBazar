$(document).ready(function(){
    $(document).on("click","#signupButton",function(e){
        e.preventDefault();
    let fname = $('input[name = fname]').val();
    let lname = $('input[name = lname]').val();
    let email = $('input[name = email]').val();
    let password = $('input[name = pswd]').val();
    let confirmPassword = $('input[name = conpsw]').val();
    let emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!fname){
        $('input[name = fname]').val("");
        $("#firstNameErr").show();
    }else if(!lname){
        $('input[name = lname]').val("");
        $("#lastNameErr").show();
    }else if(!emailRe.test(email) || email == " "){
        $('input[name = email]').val("");
        $("#emailErr").show();
    }else if(!password){
        $('input[name = pswd]').val("");
        $("#passwrdErr").show();
    }else if(!confirmPassword || confirmPassword != password){
        $('input[name = conpsw]').val("");
        $("#confirmPasswordErr").show();
    }else{
        var registerData = {
            fname : fname,
            lname : lname,
            email : email,
            password : password,
            confirmPassword:confirmPassword
        }
        $.ajax({
            url: "",
            type: "POST",
            contentType :"application/json",
            data:JSON.stringify(registerData),
            success: function (res) {
              console.log("Registerd successfully");
            },
            error: function (err) {
                console.log("Error In registering user");
            }
        });
    }
    });
    
    $('input[name = fname]').on("input", function (e) {
        $("#firstNameErr").hide();
        let fnameCheckVal = $(this).val();
        let regCheck = /^[a-zA-Z]+$/;

       if (!regCheck.test(fnameCheckVal) && fnameCheckVal != "") {
           let fnameremovedVal = fnameCheckVal.substring(0, fnameCheckVal.length - 1);
           $(this).val(fnameremovedVal);
        }
    });
    
    $('input[name = lname]').on("input", function (e) {
        $("#lastNameErr").hide();
        let lnameCheckVal = $(this).val();
        let regCheck = /^[a-zA-Z]+$/;

       if (!regCheck.test(lnameCheckVal) && lnameCheckVal != "") {
           let lnameremovedVal = lnameCheckVal.substring(0, lnameCheckVal.length - 1);
           $(this).val(lnameremovedVal);
        }
    });
    $('input[name = email]').on("input", function (e) {
        $("#emailErr").hide();
    });
    
    $('input[name = pswd]').on("input", function (e) {
        $("#passwrdErr").hide();
    });
    $('input[name = conpsw]').on("input", function (e) {
        $("#confirmPasswordErr").hide();
    });
    
    });