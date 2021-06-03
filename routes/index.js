const express = require('express');
const { devRoll } = require('../functions/roller');

const router = express.Router();

const test = require('./test');

module.exports = () => {
    router.get('/', async (req, res, next) => {
        try {
            const params = devRoll();
            params.push(5);
            return res.render('index', { params });
        } catch (error) {
            return next(error);
        }
    });

    router.use('/test', test());

    return router;
};
