const ExerciseModelInterface = require('../../interfaces/exercise.model.interface')
const ExerciseModel = require('../../models/exercise.model')

const Exercise = new ExerciseModelInterface(ExerciseModel)

describe('Ao instanciar a interface Exercise Model', () => {

    test('O método #getAll não deve retornar erro', async () => {
        expect.assertions(1)
        return expect(Exercise.getAll()).resolves.not.toThrow()
    })

    test('O método #getOne não deve retornar erro', async () => {
        expect.assertions(1)
        return expect(Exercise.getOne(1)).resolves.not.toThrow()
    })

    test('O método #create deve criar um novo registro', async () => {
        expect.assertions(1)
        const createExercise = await Exercise.create({username: 'User 3'})
        return expect(createExercise).toEqual({username: 'User 3'})
    })
})
