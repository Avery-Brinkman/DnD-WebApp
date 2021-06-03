const express = require('express');

const router = express.Router();

module.exports = (pageData) => {
    router.get('/', async (req, res, next) => {
        try {
            return res.render('base', { page: pageData.page });
        } catch (error) {
            return next(error);
        }
    });

    return router;
};
