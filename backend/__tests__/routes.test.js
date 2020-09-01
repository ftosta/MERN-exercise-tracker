const {list} = require('../controllers/exercises')

const ExerciseMock = () => {
    return {
        req: [],
        res: []
    }
}

describe('Quando acessar a rota Exercise List', () => {
    test('Não deve retornar erro', () => {
        expect(() => {
            list(ExerciseMock().req, ExerciseMock.res)
        })
    })
})