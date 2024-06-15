const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
require("dotenv").config();

const token = process.env.TOKEN;
const bot = new TelegramBot(token);
// bot.setWebHook(`https://your-heroku-app-name.herokuapp.com/bot${token}`);

const app = express();
app.use(express.json());

app.post(`/bot${token}`, (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...');
});

// Your existing bot logic here
