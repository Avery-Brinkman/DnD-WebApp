const express = require('express');
const http = require('http');
const fetch = require('node-fetch');

const app = express();
const httpServer = http.Server(app);

const CONFIG = require('./config/config.json');
const RAND_API_PARAMS = require('./Random.org_API_Parameters.json');
const roller = require('./functions/roller.js');

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    try {
        const apiRes = await fetch(
            'https://api.random.org/json-rpc/4/invoke',
            RAND_API_PARAMS
        )
            .then((res) => res.text())
            .then((text) => console.info(text));
        console.info(apiRes);
        console.info(RAND_API_PARAMS.body.params.apiKey);
    } catch (error) {
        console.error(error);
    }
    res.end();
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
