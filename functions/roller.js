const fetch = require('node-fetch');

const CONFIG = require('../config/config.json');

/**
 * Rolls "nRolls d dN," or a dN sided-die nRolls times. Default is a straight 1d20
 *
 * @param {Number} [nRolls=1] Number of dice to roll.
 * @param {Number} [dN=20] How many sides the dice has.
 * @param {Number} [advantage=0] Disadv. -1 | Normal 0 | Adv. 1
 * @returns {Array}  An array of rolls
 *
 * @see Uses Random.org API (http://api.random.org)
 * @see Uses node-fetch https://github.com/node-fetch/node-fetch
 */

exports.roll = async function (nRolls = 1, dN = 20, advantage = 0) {
    try {
        if (nRolls <= 0) {
            nRolls = 1;
        }
        if (dN <= 0) {
            dN = 20;
        }
        if (advantage != -1 && advantage != 0 && advantage != 1) {
            advantage = 0;
        }
        const apiRes = await fetch('https://api.random.org/json-rpc/4/invoke', {
            method: 'POST',
            body: JSON.stringify({
                jsonrpc: '2.0',
                method: 'generateIntegers',
                params: {
                    apiKey: CONFIG['Random.org_API_Key'],
                    n: nRolls,
                    min: 1,
                    max: dN,
                    replacement: true,
                },
                id: 42,
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        const data = await apiRes.json();

        const rollArray = data.result.random.data;

        return rollArray;
    } catch (error) {
        return new Error(error);
    }
};

/**
 * Returns an array of 10d20 rolls I made on my desk to skip making API calls while testing
 * @returns {Array} [10, 8, 12, 6, 7, 8]
 */

exports.devRoll = () => {
    return [10, 8, 12, 6, 7, 8];
};
