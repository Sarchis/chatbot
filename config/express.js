/**
 * Express configuration
 */

const morgan = require('morgan');
const express = require('express');
const cors = require('cors')

module.exports = (app) => {
    app.use(cors());
    app.use(morgan('dev'));
    app.use(express.json())
}