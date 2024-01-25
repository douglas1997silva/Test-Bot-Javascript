// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { CustomBot } = require('./bot');
const { BotFrameworkAdapter } = require('botbuilder');
const restify = require('restify');

const adapter = new BotFrameworkAdapter({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

const bot = new CustomBot();

adapter.onTurnError = async (context, error) => {
    console.error(`Erro não tratado: ${ error }`);
    await context.sendActivity('Desculpe, algo deu errado.');
};

const server = restify.createServer();
server.listen(process.env.PORT || 3978, () => {
    console.log(`${ server.name } ouvindo em ${ server.url }`);
});

server.post('/api/messages', (req, res) => {
    adapter.processActivity(req, res, async (context) => {
        await bot.run(context);
    });
});
