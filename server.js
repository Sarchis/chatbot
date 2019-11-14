const express = require('express');
const expressConfig = require('./config/express');

// Setup Server
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Express Config
expressConfig(app)

// Start server
const startServer = async () => {
    await app.listen(app.set('port'), () => {
        console.log(`Server online on port ${app.get('port')}`);
    });
};

startServer();