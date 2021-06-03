const express = require('express');
const { devRoll } = require('../functions/roller');

const router = express.Router();

const basicRoute = require('./basic');
const advancedRoute = require('./advanced');

module.exports = (pageData) => {
    router.get('/', async (req, res, next) => {
        try {
            return res.render('base', { page: 'index', dRoll: devRoll() });
        } catch (error) {
            return next(error);
        }
    });

    router.use('/basic', basicRoute({ page: 'basic' }));
    router.use('/advanced', advancedRoute({ page: 'advanced' }));

    return router;
};
