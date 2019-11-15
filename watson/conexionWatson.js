const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const assistant = new AssistantV2({
    version: '2018-09-19',
    authenticator: new IamAuthenticator({
        apikey: process.env.I_AM_API_KEY
    }),
    url: 'https://gateway-wdc.watsonplatform.net/assistant/api'
});

module.exports = assistant;
