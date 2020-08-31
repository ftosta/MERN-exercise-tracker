import React, { Component } from 'react'
import axios from 'axios'
import Exercise from './list-row.component'


export default class ExercisesList extends Component {
    constructor(props) {
        super(props)

        this.state = {exercises: []}
    }

    componentDidMount() {
        axios.get('http://localhost:5000/exercises/')
            .then(response => {
                this.setState({
                    exercises : response.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    deleteExercise = (id) => {
        axios.delete('http://localhost:5000/exercises/' + id)
            .then(res => console.log(res.data))

        this.setState({
            exercises : this.state.exercises.filter(el => el._id !== id)
        })
    }

    exercisesList = () => {
        return this.state.exercises.map(currentexercise => {
            return <Exercise exercise={currentexercise}
                deleteExercise={this.deleteExercise}
                key={currentexercise._id} />
        })
    }

    render() {
        return (
            <div className="container">
                <h3>Logged Exercises</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <td>Username</td>
                            <td>Description</td>
                            <td>Duration</td>
                            <td>Date</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        { this.exercisesList() }
                    </tbody>
                </table>
            </div>
        )
    }
}