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
            window.location.href = './02_page.html';
        
        }

        else{
            alert("Not Valid Pin");
            
        }
        
    }

    else{
        alert("Not Valid Account Number");
        
    }

})