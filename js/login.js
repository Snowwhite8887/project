function login(){
    var uid=document.getElementById("uid");
    var password = document.getElementById("password");
    if(uid.value==""||password.value=="")
    	alert("Input is empty");
    if(uid.value=="123"&&password.value=="123")
        window.open("description");
}

function signup(){
    window.open("register");
}