// section-no-01

document.getElementById('donate-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const  donateMoney = getInputFieldValueById('donate-add-money');
        const navbarMoney = getTextFieldValueById('navbar-money')
        
          const balance = getTextFieldValueById('account-balance');
          const minusNewBalance = navbarMoney - donateMoney
          const addNewBalance = balance + donateMoney;
          alert('Your Donate is Succesfully.')

          document.getElementById('account-balance').innerText = addNewBalance;
          document.getElementById('navbar-money').innerText = minusNewBalance;
        
    })

    // section-no-02

    document.getElementById('donate-btn-two')
    .addEventListener('click', function (event) {
        event.preventDefault()

        const  donateMoney = getInputFieldValueById('donate-add-money-two');
        const navbarMoney = getTextFieldValueById('navbar-money')


        const balance = getTextFieldValueById('account-balance-two');
        const minusNewBalance = navbarMoney - donateMoney
        const addNewBalance = balance + donateMoney;
        alert('Your Donate is Succesfully.')


        document.getElementById('account-balance-two').innerText = addNewBalance;
          document.getElementById('navbar-money').innerText = minusNewBalance;
        

    })

    // section-no-03

    document.getElementById('donate-btn-three')
    .addEventListener('click', function (event) {
        event.preventDefault()
        
        const  donateMoney = getInputFieldValueById('donate-add-money-three');
        const navbarMoney = getTextFieldValueById('navbar-money')

        const balance = getTextFieldValueById('account-balance-three');
        const minusNewBalance = navbarMoney - donateMoney
        const addNewBalance = balance + donateMoney;
        alert('Your Donate is Succesfully.')


        
        document.getElementById('account-balance-three').innerText = addNewBalance;
          document.getElementById('navbar-money').innerText = minusNewBalance;
        
    })




