import React, { Fragment } from 'react';
import { Header, Footer } from './components/layouts'
import Exercises from './components/exercises'
import { muscles, exercises } from './store'

export default class App extends React.Component {
  state = {
    exercises,
    exercise: {},
    editMode: false
  }

  getExercisesByMuscles() {
    const initExercises = muscles.reduce((exercises, category) => ({
      ...exercises,
      [category]: []
    }), {})

    console.log(muscles, initExercises)

    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise

      exercises[muscles] = [...exercises[muscles], exercise]

        return exercises
    }, initExercises)
    )
  } 

  handleCategorySelect = category =>
    this.setState({
      category
    })

  handleExerciseSelect = id =>
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: false
    }))

  handleExerciseCreate = exercise =>
    this.setState(({ exercises}) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }))

  handleExerciseDelete = id =>
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(ex => ex.id !== id),
      editMode: false,
      exercise: {}
    }))

  handleExerciseSelectEdit = id =>
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true
    }))

  handleExerciseEdit = exercise =>
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises.filter(ex => ex.id !== exercise.id),
        exercise
      ],
    exercise
    }))

  render() {
    const exercises = this.getExercisesByMuscles(),
      { category, exercise, editMode } = this.state
    return(
      <Fragment>
        <Header
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />

        <Exercises 
          exercise={exercise}
          exercises={exercises}
          category={category}
          editMode={editMode}
          muscles={muscles}
          onSelect={this.handleExerciseSelect}
          onDelete={this.handleExerciseDelete}
          onEdit={this.handleExerciseEdit}
          onSelectEdit={this.handleExerciseSelectEdit}
        />

        <Footer 
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelect}
        />
      </Fragment>
    )
  }
}
