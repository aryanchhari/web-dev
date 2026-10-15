 function User(){
            event.preventDefault();
            let Logiin = document.getElementById("AA").value;
            var password = document.getElementById("AA1").value;
            console.log(Logiin);
            console.log(password);
            let error = document.getElementById("error");
            if(Logiin === "a@gmail.com" && password === "aryan")
            {
                localStorage.setItem("isLoggedIn","true")
                localStorage.setItem("user",Logiin)
                localStorage.setItem("pass",password)

                window.location.href = "index.html";
            }
            else{
                error.innerHTML="Invalid User name";

            }
        }

        function togglepass(){
            let passwordin = document.getElementById("AA1")
            if (passwordin.type === "password"){
                passwordin.type = "text";
            }
            else{
                passwordin.type = "password";
            }
        }

