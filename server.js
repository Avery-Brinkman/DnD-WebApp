const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');

const app = express();
const httpServer = http.Server(app);

const CONFIG = require('./config/config.json');
const roller = require('./functions/roller.js');

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(fetch('https://api.random.org/json-rpc/4/invoke'));
});

app.post('/test', (req, res) => {
    console.info(req.body);
    const parameters = req.body;
    console.info(
        `${parameters.nRolls}d${parameters.dN} w/ ${parameters.advantage} advantage`
    );
    console.info(parameters.dN);
    res.end();
});

httpServer.listen(CONFIG.port, () => {
    console.info(`Server running on port ${CONFIG.port}`);
});
