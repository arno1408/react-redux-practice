import React, { useState, useRef, useEffect } from "react";

export default function ToDoPractice() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([
    {
      task: "buy groceries",
      completed: false,
    },
    {
      task: "eat breakfast",
      completed: false,
    },
    {
      task: "go for a walk",
      completed: false,
    },
  ]);

  const inputRef = useRef(null);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addItem = () => {
    setTaskList((t) => [...t, { task: task, completed: false }]);
    setTask("");
  };

  const completedItem = (index) => {
    const completedList = taskList.map((t, i) => {
      return i === index ? { ...t, completed: !t.completed } : t;
    });
    setTaskList(completedList);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const deleteItem = (index) => {
    const deletedItems = taskList.filter((d, i) => index !== i);
    setTaskList(deletedItems);
  };

  return (
    <>
      <h1>To Do App</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="Add To Do"
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleKeyPress(e)}
        value={task}
      />
      <button onClick={addItem}>Add</button>

      {taskList.map((item, index) => {
        return (
          <div
            onClick={() => completedItem(index)}
            style={{
              textDecoration: item.completed ? "line-through" : "none",
              cursor: "pointer",
              marginBottom: "20px",
            }}
          >
            {item.task}
            <button>Edit</button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteItem(index);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}
