document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    
    const addMoney = getInputValueById('input-add-money');
    const pinNumber = getInputValueById('input-pin-number');

    console.log(addMoney, pinNumber);

    if(isNaN(addMoney)){
        alert('Faild to access! Please try again..');
        return;
    }
    if(pinNumber === 123){
        const balance = getTextValueById('acc-balance');
        const totalBalance = balance + addMoney;
        document.getElementById('acc-balance').innerText = totalBalance;
    }
    else{
        alert('Faild to access! Please try again..');
    }
});