document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('good luck');

    const cashOut = getInputValueById('input-cash-out');
    const pinNumber = getInputValueById('input-cashout-pin');

    // console.log(addMoney, pinNumber);

    if(isNaN(cashOut)){
        alert('Faild to access! Please try again..')
    }
    if(pinNumber === 123){
        const balance = getTextValueById('acc-balance');

        if(cashOut > balance){
            alert('Insufficiant balance');
        }
        const newBalance = balance - cashOut;
        document.getElementById('acc-balance').innerText = newBalance;
    }
    else{
        alert('Faild to access! Please try again..');
    }
})