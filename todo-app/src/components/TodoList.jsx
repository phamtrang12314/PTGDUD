import TodoItem from "./TodoItem";

function TodoList({ todos, dispatch, title }) {
  return (
    <div className="todo-list">
      <h2>
        {title} ({todos.length})
      </h2>
      {todos.length === 0 ? <p>Không có công việc nào</p> : null}
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default TodoList;
