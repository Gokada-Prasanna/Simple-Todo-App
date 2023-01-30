// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {title, id} = todoDetails
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="todoCardContainer">
      <p className="todoTitle">{title}</p>
      <div className="buttonContainer">
        <button className="delete-button" type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
