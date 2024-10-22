import WeightInput from "./WeightInput"
import WeightInfo from "./WeightInfo"
import "./ExerciseCard.css"

const ExerciseCard = ({ exercise, weight, onWeightSubmit }) => {
  return (
    <div className="exercise-card">
      <h2>{exercise.exercise}</h2>
      <a href={exercise.exerciseLink} target="_blank" rel="noopener noreferrer">
        Link to exercise
      </a>
      <WeightInput 
        id={exercise.id} 
        onWeightSubmit={onWeightSubmit} 
      />
      <WeightInfo weight={weight} />
    </div>
  )
}

export default ExerciseCard