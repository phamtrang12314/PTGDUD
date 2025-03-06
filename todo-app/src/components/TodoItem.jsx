function TodoItem({ todo, dispatch }) {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}>
        {todo.text}
      </span>
      <button onClick={() => dispatch({ type: "DELETE", payload: todo.id })}>
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
