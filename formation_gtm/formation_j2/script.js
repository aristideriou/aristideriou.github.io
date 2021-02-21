document.getElementById('user_credit_card').value

const orderTransactionButton = document.getElementById('order_transaction');
const orderTransactionMessage = document.getElementById('order_valid');
const promoButton = document.getElementById('promo');

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

const pushToDLFunnel = () => {
    dataLayer.push({
        'event': 'promotionClick',
        'ecommerce': {
            'promoClick': {
                'promotions': [
                    {
                        'id': '123456',      
                        'name': '10% handspinner',
                        'creative': 'violet banner',
                        'position': 1
                    }]
                }
            }
        })
    }
        
promoButton.addEventListener('click',pushToDLFunnel);
        
orderTransactionButton.addEventListener('click', sendTransaction);