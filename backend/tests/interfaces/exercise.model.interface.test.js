const ExerciseModelInterface = require('../../interfaces/exercise.model.interface')
const ExerciseModel = require('../../models/exercise.model')

const Exercise = new ExerciseModelInterface(new ExerciseModel)

describe('Ao instanciar a interface Exercise Model', () => {

    test('O método #getAll não deve disparar um erro', async () => {
        expect.assertions(1)
        return expect(Exercise.getAll()).resolves.not.toThrow()
    })
})