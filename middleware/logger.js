const moment = require('moment');
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}
   ${req.originalUrl}: ${moment().format()}`); // Shows the protocol used, host, url, time and date
    next();
};
module.exports = logger;
