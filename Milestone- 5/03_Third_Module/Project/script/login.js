// alert()

document.getElementById("login-btn").addEventListener("click", function(event){
    event.preventDefault();
    // console.log("Hello");

    const accountNumber = document.getElementById('Account-number').value;
    // console.log(accountNumber);
    
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(pinNumber);
    
    if(accountNumber.length == 5){
        if(parseInt(pinNumber) === 1234){  //parseInt => Covert String to a Int
            console.log("Valid");
        
        }

        else{
            console.log("Not Valid Pin");
            
        }
        
    }

    else{
        console.log("Not Valid Account Number");
        
    }

})