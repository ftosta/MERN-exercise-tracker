import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class ExerciseListRow extends Component {

    constructor(props) {
        super(props)
        console.log('props',props)
        //this.deleteExercise = this.deleteExercise.bind(this)

        this.state = {exercise: props.exercise}
    }

    render() {
        return (
            <tr>
                <td>{this.state.exercise.username}</td>
                <td>{this.state.exercise.description}</td>
                <td>{this.state.exercise.duration}</td>
                <td>{this.state.exercise.date.substring(0,10)}</td>
                <td>
                    <Link to={"/edit/" + this.state.exercise._id} className="btn btn-secondary">edit</Link>
                    <br />
                    <br />
                    <button className="btn btn-danger"
                        onClick={() => { this.state.deleteExercise(this.state.exercise._id)}}>delete</button>
                </td>
            </tr>
        )
    }
}
/*
const Exercise = props => (
    
*/