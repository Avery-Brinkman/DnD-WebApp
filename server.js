const express = require('express');
const http = require('http');

const app = express();
const httpServer = http.Server(app);

const CONFIG = require('./config/config.json');
const roller = require('./functions/roller.js');
const routes = require('./routes');

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', routes());
app.use((err, req, res, next) => {
    res.render('base', { page: `../error` });
});

httpServer.listen(CONFIG.port, () => {
    console.info(`Server running on port ${CONFIG.port}`);
});
