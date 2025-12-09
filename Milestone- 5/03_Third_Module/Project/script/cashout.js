document.getElementById('cashout-btn').addEventListener('click',function(event){
    event.preventDefault();

    const pin = document.getElementById('pin-number-cashout').value;
    const convertedPin = parseInt(pin);

    const amount = document.getElementById('cashout-amount').value;
    const convertedAmount = parseFloat(amount);

    const balance = document.getElementById('money-dollar').innerText;
    const convertedBalance = parseFloat(balance);

    if(convertedPin === 1234){
        const remainAmount = convertedBalance - convertedAmount;
        document.getElementById('money-dollar').innerText = remainAmount;
    }

    else{
        console.log("Not Valid");
        
    }

})