import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import styles from "./todoApp.module.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };
  const deleteHandler = (id) => {
    console.log(id);
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };
  const completeHandler = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

const updateTodo=(id,newValue)=>{
  const index=todos.findIndex(todo=>todo.id===id);
  const selectedTodo={...todos[index]};
  selectedTodo.text=newValue;
  const updatedTodos=[...todos]
  updatedTodos[index]=selectedTodo;
  setTodos(updatedTodos)
}

  return (
    <div className={styles.container}>
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList
        todos={todos}
        onDelete={deleteHandler}
        onComplete={completeHandler}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
