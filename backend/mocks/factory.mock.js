const ExerciseMock = require('./exercise.model.mock')

class Mock {
    constructor(mockObject) {
        this.mockObject = mockObject
        this.mockContent = {}
        this.mockContent['ExerciseModel'] = new ExerciseMock
        return this.mockContent[this.mockObject]
    }
}

module.exports = Mock