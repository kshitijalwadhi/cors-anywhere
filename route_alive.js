const express = require('express');
const {
    keepAlive
} = require('./controller_alive');

const router = express.Router();

router.get("/", keepAlive);

module.exports = router;
