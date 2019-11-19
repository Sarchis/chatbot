/*
 * Controlador del chat
 */

const watson = require('../../../watson/conexionWatson');

const chatMessage = async (req, res) => {
    let id = await watson.obtenerId();
    let sessionID = id.result.session_id;
    
    res.json({
        message: 'Este es el session ID',
        sessionID
    });
};

module.exports = {
    chatMessage
}