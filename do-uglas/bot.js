// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { ActivityHandler } = require('botbuilder');

class CustomBot extends ActivityHandler {
    constructor() {
        super();

        this.onMessage(async (context, next) => {
            const userMessage = context.activity.text.toLowerCase();

            let response = '';

            // Lógica para formular respostas com base nas entradas do usuário
            if (userMessage.includes('como você está')) {
                response = 'Estou bem, obrigado por perguntar!';
            } else if (userMessage.includes('qual é o seu nome')) {
                response = 'Eu sou um bot de exemplo.';
            } else {
                response = 'Desculpe, não entendi. Pode reformular a pergunta?';
            }

            // Envia a resposta de volta ao usuário
            await context.sendActivity(response);

            // Chama o próximo middleware
            await next();
        });
    }
}

module.exports.CustomBot = CustomBot;
