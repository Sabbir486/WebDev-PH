document.getElementById('cashout-btn').addEventListener('click', function(event){
    event.preventDefault();

    const accountNumber = document.getElementById('acc-number').value;

    const amount = getInputValueByID('cashout-amount');
    const pin = getInputValueByID('pin-number-cashout');
    const balance = getInnerTextByID('money-dollar');


    if(accountNumber.length === 5){
        if(pin === 1234){
            reduce = balance - amount;
            setInnerTextByIdAndValue('money-dollar', reduce);
        }

        else{
            console.log("Pin is not correct");
            
        }
    }

    else{
        console.log("Account Number is not valid");
        
    }
})