let tg = window.Telegram.WebApp;

//tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37"

let bank = ""
let buttons = []

for (let i = 1; i < 7; i++) {
    buttons.push(document.getElementById("btn"+i));
} 

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        bank = buttons[i].title;
        tg.MainButton.setText("Selected "+bank+", next");
        tg.MainButton.show();
    });
}

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    document.getElementById("error").innerText = '';
    if (document.getElementById("form").style.display == "block") {
        let cardData = document.getElementById("cardData").value;
        let amount = document.getElementById("amount").value;
        if (cardData.length < 1) {
            document.getElementById("error").innerText = "card data can`t be empty";
            return 
        }
        if (amount.length < 1) {
            document.getElementById("error").innerText = "amount can`t be empty";
            return 
        }
        tg.sendData(amount);
        tg.close();
    } else {
        document.getElementById("inner").style.display = "none";
        document.getElementById("form").style.display = "block";
        tg.MainButton.setText("Next");
    }
});







