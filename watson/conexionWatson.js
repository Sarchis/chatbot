require('dotenv').config();
const AssistantV2 = require('ibm-watson/assistant/v2');
const {
    IamAuthenticator
} = require('ibm-watson/auth');

const assistant = new AssistantV2({
    version: '2019-02-28',
    authenticator: new IamAuthenticator({
        apikey: process.env.I_AM_API_KEY
    }),
    url: 'https://gateway.watsonplatform.net/assistant/api/'
});

let obtenerId = () => {
    return new Promise(resolve => {
        assistant.createSession({
                assistantId: process.env.ASSISTANT_ID,
            })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                console.log(err);
            })
    })
}


module.exports = {
    assistant,
    obtenerId
};