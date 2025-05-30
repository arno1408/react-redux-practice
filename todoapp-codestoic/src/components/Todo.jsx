import { useState } from "react";
import TodoItem from "./TodoItem";

function Todo() {
  let [todo, setTodo] = useState("");
  let [todoList, setTodoList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
        />
        <button type="submit">Add</button>
      </form>

      {todoList.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}

export default Todo;
