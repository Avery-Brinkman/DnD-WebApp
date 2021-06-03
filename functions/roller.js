const http = require('http');

exports.roll = function (nRolls = 1, dN = 20, advantage = 0) {
    if (
        Number.isInteger(nRolls) &&
        Number.isInteger(dN) &&
        Number.isInteger(advantage)
    ) {
        return `http://www.random.org/integers/?num=${nRolls}&min=1&max=${dN}&col=1&base=10&format=plain&rnd=new`;
    } else {
        return 'Invalid parameters sent to random.org';
    }
};
