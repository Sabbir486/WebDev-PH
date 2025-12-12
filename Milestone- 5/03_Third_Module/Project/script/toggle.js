// alert()

document.getElementById('cashout').style.display = "none"; //by-default
document.getElementById('paybill').style.display = "none"; //by-default

document.getElementById('add-money-box').addEventListener('click',function() {
    document.getElementById('cashout').style.display = "none";
    document.getElementById('paybill').style.display = "none";
    document.getElementById('addmoney').style.display = "block";

})

document.getElementById('cash-out-box').addEventListener('click',function() {
    document.getElementById('cashout').style.display = "block";
    document.getElementById('paybill').style.display = "none";
    document.getElementById('addmoney').style.display = "none";

})

document.getElementById('paybill-box').addEventListener('click',function(){
    document.getElementById('cashout').style.display = "none";
    document.getElementById('addmoney').style.display = 'none';
    document.getElementById('paybill').style.document = 'block';
})