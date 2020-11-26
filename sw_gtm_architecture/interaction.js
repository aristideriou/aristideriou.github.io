const cta = document.getElementById('cta');
const dlEvent = () => {
    dataLayer.push({
        'event':'ctaClick',
        'ctaName':'header'
    })
}

cta.addEventListener('click',dlEvent);

const ec = document.getElementById('ecommerce');
const dleec = () => {
    dataLayer.push({
        'event':'purchase',
        'transactionID':'123456789',
        'productName':'RC petfood'
    })
}

ec.addEventListener('click',dleec);