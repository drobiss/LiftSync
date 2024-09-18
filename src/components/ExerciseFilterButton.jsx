import "./ExerciseFilterButton.css"

const ExerciseFilterButton = ({children, onClick}) => {
  return (
    <button onClick={onClick}>{children}</button>
  )
}

export default ExerciseFilterButton