require('dotenv').config()
const DriverLocal = require('./local.driver')

class Driver{
    constructor(model) {
        if (process.env.APP_ENV === 'dev') {
            return new DriverLocal(model)
        }
    }
}

module.exports = Driver