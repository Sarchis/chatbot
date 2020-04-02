/*
 * Controlador del chat
 */

const watson = require('../../../watson/conexionWatson');


const chatMessage = async (req, res) => {
    let sessionID;
    try {
        sessionID = await watson.obtenerId();
    } catch (error) {
        console.error(error);
    }

    let { text } = req.body;

    watson.mensajeria(text, sessionID)
        .then(async (dat) => {
            console.log(JSON.stringify(dat, null, 2));
            let mensaje = dat.response.result.output.generic[0].text 
            
            res.json({
                message: mensaje,
                sessionID
            });
        })

};


module.exports = {
    chatMessage
}