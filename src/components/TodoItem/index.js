import './index.css'

const TodoItem = props => {
  const {initialTodoItem, onClickDeleteTodoItem} = props
  const {id, title} = initialTodoItem

  const onDelete = () => {
    onClickDeleteTodoItem(id)
  }

  return (
    <li className="todo-item">
      <p className="title-design">{title}</p>
      <button className="delete-btn" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
