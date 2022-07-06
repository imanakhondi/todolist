import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import styles from "./todoApp.module.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filterTodo, setFilterTodo] = useState([]);

  const [option, setOption] = useState("all");

  useEffect(() => {
    selectTodo(option.value);
  }, [todos, option]);

  const addTodo = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };
  const deleteHandler = (id) => {
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

  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };
  const totalItems = todos.filter((todo) => !todo.isCompleted).length;

  const selectTodo = (selectOption) => {
    switch (selectOption) {
      case "completed":
        {
          const filteredTodos = todos.filter((todo) => todo.isCompleted);
          setFilterTodo(filteredTodos);
        }
        break;
      case "uncompleted":
        {
          const filteredTodos = todos.filter((todo) => !todo.isCompleted);
          setFilterTodo(filteredTodos);
        }
        break;
      default:
        setFilterTodo(todos);
        console.log(todos);

        break;
    }
  };

  return (
    <div className={styles.container}>
      <NavBar totalItems={totalItems} />
      <TodoForm
        addTodoHandler={addTodo}
        onChange={selectTodo}
        value={option}
        setOption={setOption}
      />
      <TodoList
        todos={filterTodo}
        onDelete={deleteHandler}
        onComplete={completeHandler}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
