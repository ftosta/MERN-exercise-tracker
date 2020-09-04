class ExerciseModelInterface {
    constructor(ExerciseModel) {
        this.ExerciseModel = new ExerciseModel
    }

    async getAll(param = {}) {
        
        try {
            return await this.ExerciseModel.find(param)
            
        } catch (errorExerciseModelInterfaceGetAll) {
            throw errorExerciseModelInterfaceGetAll
        }
        
    }

    async getOne(id) {
        try {
            return await this.ExerciseModel.findOne({_id : id})
            
        } catch (errorExerciseModelInterfaceGetAll) {
            throw errorExerciseModelInterfaceGetAll
        }
        
    }

    async create(data) {
        try {
            return await data
        } catch(errorExerciseModelInterfaceCreate) {
            throw errorExerciseModelInterfaceCreate
        }
    }
}

module.exports = ExerciseModelInterface