document.getElementById('cashout').style.display = "none"; //by-default
document.getElementById('paybill').style.display = "none"; //by-default
document.getElementById('transaction-history').style.display = "none"; //by-default


document.getElementById('add-money-box').addEventListener('click', function(){
    handleToggle('addmoney', 'block');
    handleToggle('cashout', 'none');
    handleToggle('paybill', 'none');
    handleToggle("transaction-history", "none");
})

document.getElementById('cash-out-box').addEventListener('click', function(){
    handleToggle('addmoney', 'none');
    handleToggle('cashout', 'block');
    handleToggle('paybill', 'none');
    handleToggle("transaction-history", "none");
})

document.getElementById('paybill-box').addEventListener('click', function(){
    handleToggle('addmoney', 'none');
    handleToggle('cashout', 'none');
    handleToggle('paybill', 'block');
    handleToggle("transaction-history", "none");
})


function handleToggle(id, status){
    document.getElementById(id).style.display = status;
}