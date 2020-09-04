class ExerciseModelInterface {
    constructor(ExerciseModel) {
        this.ExerciseModel = ExerciseModel
    }

    async getAll() {
        
        try {
            return await this.ExerciseModel.find()
            
        } catch (errorExerciseModelInterfaceGetAll) {
            throw errorExerciseModelInterfaceGetAll
        }
        
    }
}

module.exports = ExerciseModelInterface