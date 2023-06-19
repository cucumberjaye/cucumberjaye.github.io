let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37"

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    let cardData = document.getElementById("cardData").value
    let amount = document.getElementById("amount").value
    tg.sendData({
        card_data: cardData,
        amount: amount,
    });
});






