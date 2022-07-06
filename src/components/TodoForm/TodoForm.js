import { useEffect, useRef, useState } from "react";
import SelectOption from "../SelectOption/SelectOption";
import styles from "./todoForm.module.css"

const TodoForm = ({ edit, addTodoHandler,onChange ,value,setOption}) => {
  const [todo, setTodo] = useState(edit ? edit.text : "");

  const changeHandler = (e) => {
    setTodo(e.target.value);
  };

  const submitHandler = (e) => {
    if (!todo) {
      alert("enter todo");
      return;
    }
    e.preventDefault();
    addTodoHandler(todo);
    setTodo("");
  };

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
   <div className={styles.container}>
     <form onSubmit={submitHandler}>
      <div>
        <input
          onChange={changeHandler}
          type="text"
          value={todo}
          placeholder={edit ? " update todo..." : "add todo..."}
          ref={inputRef}
        />
        <button type="submit">{edit ? " update" : "add "}</button>
      </div>
    </form>
    <SelectOption onChange={onChange} value={value} setOption={setOption}/>
   </div>
  );
};

export default TodoForm;
