const express = require('express');

const router = express.Router();

module.exports = (params) => {
    router.get('/', async (req, res, next) => {
        try {
            return res.send('Also loaded.');
        } catch (error) {
            return next(error);
        }
    });

    return router;
};
