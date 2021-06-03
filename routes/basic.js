const express = require('express');

const router = express.Router();

module.exports = (pageData) => {
    router.get('/', async (req, res, next) => {
        try {
            pageData = {};

            if (req.query.rolls && req.query.dice) {
                if (req.query.rolls >= 1) {
                    pageData = req.query;
                }
            }

            return res.render('base', {
                page: 'basic',
                pageData,
            });
        } catch (error) {
            return next(error);
        }
    });
    return router;
};
