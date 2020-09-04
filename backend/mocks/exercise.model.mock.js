class ExerciseModelMock {
    constructor() {
        this.data = [
            {
                username : 'User ONE',
                description : 'Exercicio de TDD',
                duration : 90,
                date : new Date()
            },
            {
                username : 'User TWO',
                description : 'Exercicio de TDD Parte 2',
                duration : 30,
                date : new Date()
            }
        ]
    
    } 

    find() {
        return this.data
    }
    
}


module.exports = ExerciseModelMock