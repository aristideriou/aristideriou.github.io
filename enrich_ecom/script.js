
const newsletterButton = document.getElementById("newsletter");
newsletterButton.addEventListener("click", () => {
    newsletterButton.innerHTML = "Merci, vous êtes maintenant abonné";
    window.dataLayer = window.dataLayer || [];

    dataLayer.push({
        event: "newsletterSubscription",
        clientType: ["Prospect", "Client", "Nouveau Client"][
            Math.floor(Math.random() * 3)
        ],
        source: ["Popup", "Footer", "Notif push"][Math.floor(Math.random() * 3)],
        frequency: ["Hebdo", "Mensuel", "Quotidien"][
            Math.floor(Math.random() * 3)
        ],
    });
});



const pushButton = document.getElementById("push");
pushButton.addEventListener("click", () => {
    const state = { page_id: 1, user_id: 5 };
    const url = Array.from({ length: Math.floor(Math.random() * 6) + 5 }, () =>
    Math.random().toString(36).charAt(2)
    ).join("");
    
    history.pushState(state, "", url);
});


const purchase = document.getElementById("purchase");
purchase.addEventListener("click", () => {
    purchase.innerHTML =  "Votre achat a été validé et votre carte bleue débitée";
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        event: "productPurchase",
        transactionID : ["111", "222", "333"][Math.floor(Math.random() * 3)],
        products : [
            ["Fb9b-CBES5iJa5jP5Yh1BA", "F2ZUihOHQZam9xgdVWDVJA", "_cMwIQSbSYu14vpmdse3WQ"][Math.floor(Math.random() * 3)],
            ["Fb9b-CBES5iJa5jP5Yh1BA", "F2ZUihOHQZam9xgdVWDVJA", "_cMwIQSbSYu14vpmdse3WQ"][Math.floor(Math.random() * 3)],
        ]
                    });
                });
                
                
                
                
                
                
                
                var navTopItems = document.querySelectorAll('#nav_top li');
                
                navTopItems.forEach(function(item) {
                    item.addEventListener('click', function(event) {
                        event.preventDefault();
                        
                        var linkLabel = event.currentTarget.querySelector('a').textContent;

                        window.dataLayer = window.dataLayer || [];

                        
                        dataLayer.push({
                            'event': 'navTopClick',
                            'linkLabel': linkLabel
                        });
                    });
                });
                
                