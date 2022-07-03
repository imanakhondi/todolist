import styles from "./todo.module.css";

const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div className={styles.container}>
      <div>
        <span className={`${todo.isCompleted && styles.completed}`}>
          {todo.text}
        </span>
      </div>
      <div className={styles.button}>
        <button onClick={onComplete}>complete</button>
        <button onClick={onEdit}>edit</button>
        <button onClick={onDelete}>delete</button>
      </div>
    </div>
  );
};

export default Todo;
