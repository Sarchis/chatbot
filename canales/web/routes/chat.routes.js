const { Router } = require('express');
const chatCtrl = require('../controllers/chat.controller');

const router = new Router();

router.get('/', chatCtrl.chatMessage);

module.exports = router;
