const linebot = require('linebot');
const express = require('express');

const bot = linebot({
    channelId: '1517770632',
    channelSecret: 'af01a87aa1042099672f3645b7b6a879',
    channelAccessToken: 'd+eRLGp/c3IkdTh+9y0xMFc2ZpcwFSP9uDv2wfVKHmdGq7ZqhDyGEa7QlBfJtnX7Wj/9ufF/i5l5n5aA1xMlV68Lu7vJvbeJCIsqXIMoUuuY9ma6HUEGUqXH6zf+uflbzIiU7+j2lDA0EhoH2ksSzwdB04t89/1O/w1cDnyilFU='
});


//這一段的程式是專門處理當有人傳送文字訊息給LineBot時，我們的處理回應
bot.on('message', function(event) {
    if (event.message.type = 'text') {
        let msg = event.message.text;
        //收到文字訊息時，直接把收到的訊息傳回去，這裏是 echo，就是你問什麼就回答什麼，簡單的對話
        event.reply(msg).then(function(data) {
            // 傳送訊息成功時，可在此寫程式碼
            console.log(msg);
        }).catch(function(error) {
            // 傳送訊息失敗時，可在此寫程式碼
            console.log('錯誤產生，錯誤碼：'+error);
        });
    }
});

const app = express();

// bot.parser() 是 LINE Bot 的傳過來的資料，以及 JSON 解析
const linebotParser = bot.parser();
app.post('/webhook', linebotParser);

const server = app.listen(process.env.PORT || 80, function() {
    let port = server.address().port;
    console.log('目前的port是', port);
});