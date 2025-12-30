// document.getElementById('add-money').addEventListener('click', function(event){
//     event.preventDefault();
//     const amount = document.getElementById('amount').value;
//     const convertedAmount = parseInt(amount);
    
//     const pin = document.getElementById('pin-number').value;

//     const mainBalance = document.getElementById('money-dollar').innerText;
//     const convertedBalance = parseFloat(mainBalance);

//     if(parseInt(pin) === 1234){
//         const sum = convertedAmount + convertedBalance;
//         document.getElementById('money-dollar').innerText  = sum;
        
//     }

//     else{
//         console.log("Not Possible Adding");
        
//     }
// })



// More Optimized Code

document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    // getInputValueByID();
    const amount = getInputValueByID("amount");
    const pin = getInputValueByID("pin-number");
    
    const account = document.getElementById('account-no').value;

    const balance = getInnerTextByID("money-dollar");

    if(amount < 0){
        alert("Not Applicable");
        return;
    }
    
    if(account.length === 5){
        if(pin === 1234){
            const sum = balance + amount;
            // document.getElementById('money-dollar').innerText = sum;
            setInnerTextByIdAndValue('money-dollar', sum);

            const container = document.getElementById("transaction-container");
            const p = document.createElement("p");
            p.innerText = `
            added ${amount} from ${account} account
            `

            container.appendChild(p);
            
        
        }

        else{
            console.log("Pin is not correct");
            
        }
    }

    else{
        console.log("Account Number is not correct");
        
    }
})
