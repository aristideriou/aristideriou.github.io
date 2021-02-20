document.getElementById('user_credit_card').value

const orderTransactionButton = document.getElementById('order_transaction');
const orderTransactionMessage = document.getElementById('order_valid');

const sendTransaction = () => {
    orderTransactionMessage.style.display = 'inline';
    dataLayer.push({
        'event':'transaction',
        'transactionInfo':{
            'id':123456789,
            'promoName' : 'SUMMER2021',
            'promoPercentage' : 5, 
            'existingClient' : true
        }
    })
}

orderTransactionButton.addEventListener('click', sendTransaction);