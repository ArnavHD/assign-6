document.getElementById("btn-login")
.addEventListener('click',function (event){
    event.preventDefault();
    const input_1 = document.getElementById("input1").value;
    const input_2 = document.getElementById("input2").value;
    const convertedInput2 = parseInt(input_2);
    console.log(convertedInput2);
    
    if(convertedInput2 === 123456 && input_1 === "Elon"){
        document.getElementById("nav-container").classList.remove("hidden");
        document.getElementById("hero-section").classList.add("hidden");
        document.getElementById("footer-container").classList.remove("hidden");
    }
    else{
        alert("The Account name or the Passord is wrong");
    }
})


