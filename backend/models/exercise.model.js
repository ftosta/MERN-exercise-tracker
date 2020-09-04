/*
onst mongoose = require('mongoose')

const Schema = mongoose.Schema

const exerciseSchema = new Schema({
    username : {
        type : String,
        required : true,
    },
    description : {type : String, required : true},
    duration : {type : Number, required : true},
    date : {type : Date, required : true}
}, {
    timestamps : true
})

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise
*/

const Driver = require('../drivers/database/driver')

class ExerciseModel{
    constructor() {
        this.mock = new Driver('ExerciseModel')
    }
    
    find(param) {
        try {
            return this.mock.find(param)
        }catch(errorExerciseModelFind) {
            throw errorExerciseModelFind
        }
    }

    findOne(param) {
        try {
            return this.mock.find(param)
        }catch(errorExerciseModelFind) {
            throw errorExerciseModelFind
        }
    }

    create(data) {
        try {
            return data
        } catch(errorExerciseModelCreate) {
            throw errorExerciseModelCreate
        }
    }
}

module.exports = ExerciseModel