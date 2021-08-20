$(document).ready(function(){
$(document).on("click","#loginButton",function(e){
    e.preventDefault();
let username = $('input[name = uname]').val();
let passwordData = $('input[name = psw]').val();
let emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailRe.test(username) || username == " "){
    $('input[name = uname]').val("");
    $("#userNameErr").show();
}else if(!passwordData){
    $('input[name = psw]').val("");
    $("#passwordErr").show();
}else{
    var sendData = {
        username : username,
        password:passwordData
    }
    $.ajax({
        url: "",
        type: "POST",
        contentType :"application/json",
        data:JSON.stringify(sendData),
        success: function (res) {
          console.log("Login");
        },
        error: function (err) {
            console.log("Error In login");
        }
    });
}
});

$('input[name = uname]').on("input", function (e) {
    $("#userNameErr").hide();
});

$('input[name = psw]').on("input", function (e) {
    $("#passwordErr").hide();
});
});