//bot token
var telegram_bot_id = "6132888039:AAHwiTH_5qRUy06BDXJRMuDQuqz99Vs_r6E"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = 628099280; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var u_name, tel, message;
var ready = function() {
    u_name = document.getElementById("name").value;
    tel = document.getElementById("tel").value;
    message = document.getElementById("message").value;
    message = "Ismi: " + u_name + "\nTelefon raqami: " + tel + "\nYuborgan habari: " + message;
};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("message").value = "";
    return false;
};