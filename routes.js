/*
* Rutas principales de la aplicación
*/

const webRoutes = require('./canales/web/routes/chat.routes.js');

module.exports = (app) => {
    app.use('/api/web/chat', webRoutes)
};
