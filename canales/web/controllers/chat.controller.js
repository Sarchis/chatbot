/*
 * Controlador del chat
 */

const chatMessage = async (req, res) => {
    res.json({
        message: 'Hola mundo controller'
    });
};

module.exports ={
    chatMessage
}
