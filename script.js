var passpa = document.getElementById("passpa");


function checkPwd() {
    const password = document.getElementById("password");
    const conpass = document.getElementById("con-pass");
    const submit = document.getElementById("submit");
    var form = document.getElementById("form-block");
   
    submit.addEventListener("click", (e) => {
        let p = password.value;
        let c = conpass.value;
        let msg = document.createElement("p");
        if (p == "") {
            password.style.border = "1px solid yellow";
       
            msg.style.fontSize = "14px";
            msg.style.paddingLeft = "8px";
            msg.id = "error";
            msg.innerHTML = "Give password";
            passpa.appendChild(msg);
            setTimeout(()=>{
                msg.style.display = "none";
            },3000);
        }
        else if (p == c) {
            password.style.border = "1px solid green";
            conpass.style.border = "1px solid green";
            passpa.removeChild(msg);



        } else {
            password.style.border = "1px solid red";
            conpass.style.border = "1px solid red";

            msg.style.fontSize = "14px";
            msg.style.paddingLeft = "8px";
            msg.id = "error";
            msg.innerHTML = "Password do not match";
           
                passpa.appendChild(msg);
            setTimeout(()=>{
                msg.style.display = "none";
            },3000);
           
            form.reset();

        }
    })


}
checkPwd();