const cta = document.getElementById('cta');
const dlEvent = () => {
    dataLayer.push({
        'event':'ctaClick',
        'ctaName':'header'
    })
}

cta.addEventListener('click',dlEvent);