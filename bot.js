const TelgramBot = require('node-telegram-bot-api');
require('dotenv').config();

const token = process.env.TOKEN;
const bot = new TelgramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;

    //console.log('Message:' + messageText);

    if(messageText == '/start') {
        bot.sendMessage(chatId, 'Welcome to the bot.');

    }
});