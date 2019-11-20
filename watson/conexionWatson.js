require('dotenv').config();
const AssistantV2 = require('ibm-watson/assistant/v2');
const {
    IamAuthenticator
} = require('ibm-watson/auth');

// Conexión con watson
const assistant = new AssistantV2({
    version: '2019-02-28',
    authenticator: new IamAuthenticator({
        apikey: process.env.I_AM_API_KEY
    }),
    url: 'https://gateway.watsonplatform.net/assistant/api/'
});

// Función para obtener el sessionId
let obtenerId = () => {
    return new Promise(resolve => {
        assistant.createSession({
                assistantId: process.env.ASSISTANT_ID,
            })
            .then(res => {
                // console.log("res", res.result.session_id);
                var sessionId = res.result.session_id
                resolve(sessionId)
            })
            .catch(err => {
                console.log(err);
            })
    })
}

// Función para enviar mensaje a watson
let enviarMensajeWatson = (sessionId, text) => {
    return new Promise(resolve => {
        assistant.message({
            assistantId: process.env.ASSISTANT_ID,
            sessionId: sessionId,
            input: {
                text,
                options: {
                    return_context: true
                }
            },
        }, (err, response) => {
            if (err) {
                console.log('No hay sessionID');
                resolve(response);
            } else {
                resolve(response);
            }
        })
    })
}

let mensajeria = async (text, idSession) => {
    let response = await enviarMensajeWatson(idSession, text);
    let resultado = {
        response
    };
    return resultado;
}


module.exports = {
    assistant,
    obtenerId,
    mensajeria
};