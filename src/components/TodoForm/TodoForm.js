import { useState } from "react";

const TodoForm = (props) => {
  const [todo, setTodo] = useState(props.edit ? props.edit.text : "");

  const changeHandler = (e) => {
    setTodo(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.addTodoHandler(todo);
    setTodo("");
  };

  return (
    <form onSubmit={submitHandler}>
      {props.edit ? (
        <div>
          <input
            onChange={changeHandler}
            type="text"
            value={todo}
            placeholder="update todo..."
          />
          <button type="submit">update</button>
        </div>
      ) : (
        <div>
          <input
            onChange={changeHandler}
            type="text"
            value={todo}
            placeholder="add todo..."
          />
          <button type="submit" >add</button>
        </div>
      )}
    </form>
  );
};

export default TodoForm;
