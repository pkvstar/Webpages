var a = document.getElementById("i22");
        var b = document.getElementById("pass");
        a.onclick = function(){
            if(b.type=="password"){
                b.type="text";
                a.style.color = "#280116";
            }
            else{
                b.type="password";
                a.style.color = "white";
            }
        }