let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37"

let bank = ""
let buttons = []

for (let i = 1; i < 7; i++) {
    buttons.push(document.getElementById("btn"+i));
} 

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            bank = buttons[i].title;
            tg.MainButton.setText("Selected "+bank+", next");
            tg.MainButton.show();
        }
    });
}

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(bank);
    window.close();
    window.open('second_page.html');
});






