function register(){
    var inputID=document.getElementById("inputID");
    var inputName=document.getElementById("inputName");
    var inputEmail=document.getElementById("inputEmail");
    var InputPassword = document.getElementById("inputPassword");
    var inputPhone=document.getElementById("inputPhone");


    //var reg_ID= /^[0-9a-zA-Z]{3,15}$/;//3-15位英文字母或数字
    //var reg_Name= /^[0-9a-zA-Z]{3,15}$/;//3-15位英文字母或数字
    //var reg_Email= /[a-z0-9-]{1,30}@[a-z0-9-]{1,65}.[a-z]{3}/;

    if(inputID.value==""||inputName.value==""||inputEmail.value==""||inputPassword.value==""||inputPhone=="")
		alert("Input is empty");
}