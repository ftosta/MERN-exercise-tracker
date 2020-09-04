const FactoryMock = require('../../mocks/factory.mock')

class Driver{
    constructor(model) {
        const _model = new FactoryMock(model)
        return _model
    }
}

module.exports = Driver