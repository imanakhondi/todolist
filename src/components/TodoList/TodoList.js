import { useState } from "react";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";

const TodoList = (props) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });

  const editHandler = (input) => {
    props.onUpdateTodo(edit.id, input);
    setEdit("");
  };
  const renderTodos = () => {
    return props.todos.map((todo) => {
      return (
        <div>
          <Todo
            todo={todo}
            key={todo.id}
            onDelete={() => props.onDelete(todo.id)}
            onComplete={() => props.onComplete(todo.id)}
            onEdit={() => setEdit(todo)}
          />
        </div>
      );
    });
  };

  return (
    <div>
      {edit.id ? (
        <TodoForm addTodoHandler={editHandler} edit={edit} />
      ) : (
        renderTodos()
      )}
    </div>
  );
};

export default TodoList;
