document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    console.log('clicked by login');

    const phoneNumber = document.getElementById('input-phone-number').value;
    const pinNumber = document.getElementById('input-pin-number').value;
    console.log(phoneNumber, pinNumber);

    if(phoneNumber === '123456789' && pinNumber === '123'){
        console.log('bah keya sin hay');
        window.location.href = './home.html'
    }
    else{
        alert('Your phone or pin number is incorrect');
    }
    
});