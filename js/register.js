function register(){
    var inputID=document.getElementById("inputID");
    var inputName=document.getElementById("inputName");
    var inputEmail=document.getElementById("inputEmail");
    var inputPhone=document.getElementById("inputPhone");
    var inputJob=document.getElementById("inputJob");
    var inputPassword = document.getElementById("inputPassword");


    var site = new Object;
    site.id = document.getElementById("inputID").value;
    site.name = document.getElementById("inputName").value;  
    site.email = document.getElementById("inputEmail").value;
    site.phone = document.getElementById("inputPhone").value;
    site.job = document.getElementById("inputJob").value;
    site.password = document.getElementById("inputPassword").value;
    var str = JSON.stringify(site); // 对象转换为字符串
    localStorage.setItem(site.id,str);  


    if(inputID.value==""||inputName.value==""||inputEmail.value==""||inputPassword.value==""||inputPhone==""||inputJob.value=="")
		alert("Input is empty");

    window.open("description");
}


 //查找数据  
function find(){  
        var search_site = document.getElementById("search_site").value;  
        var str = localStorage.getItem(search_site);  
        var find_result = document.getElementById("find_result");
        var site = JSON.parse(str);  
        find_result.innerHTML = "LDAP ID: "+search_site + "<br> Username: " + site.name + "<br> Email: " + site.email + "<br> Phone: "+site.phone+"<br> Job:"+site.job;  
        //localStorage.clear();
} 

function pageloaddescription(){
    var list = document.getElementById("list");  
        if(localStorage.length>0){  
            var result = "<table border='1'>";  
            result += "<tr><td>LDAP</td><td>Name</td><td>Email</td><td>Phone</td><td>Job</td><td>Password</td></tr>";  
            for(var i=0;i<localStorage.length;i++){ 
                var keyname = localStorage.key(i);  
                var str = localStorage.getItem(keyname);  
                var site = JSON.parse(str);  
                result += "<tr><td>"+site.id+"</td><td>"+site.name+"</td><td>"+site.email+"</td><td>"+site.phone+"</td><td>"+site.job+"</td><td>"+site.password+"</td></tr>";  
            }  
            result += "</table>";  
            list.innerHTML = result;  
        }else{  
            list.innerHTML = "数据为空...";  
        }  
}



function $$(id){
    return document.getElementById(id);
}

function pageloadsignin(){
    var uid=localStorage.getItem("uid");
    var password=localStorage.getItem("password");

    if(uid){
        $$("uid").value=uid;
    }
    if(password){
        $$("password").value=password;
    }
}

function login(){
    
    var uid=$$("uid").value;
    var password=$$("password").value;
    localStorage.setItem("uid",uid);
    if($$("check").checked){
        localStorage.setItem("password",password);

    }else{
        localStorage.removeItem("password");
    }


    if(uid==""||password=="")
        alert("Input is empty");

    for(var i=0;i<localStorage.length;i++){ 
                var keyname = localStorage.key(i);  
                var str = localStorage.getItem(keyname);  
                var site = JSON.parse(str);  

                if(uid==site.id&&password==site.password)
                    window.open("description");
    }
}

function signup(){
    window.open("register");
}