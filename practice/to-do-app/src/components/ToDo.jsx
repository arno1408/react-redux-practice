import React, { useState } from "react";

export default function ToDo() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const changeTask = (e) => {
    setTask(e.target.value);
  };

  const addtodo = () => {
    if (editIndex !== null) {
      // Update existing task
      const updatedTasks = taskList.map((t, index) =>
        index === editIndex ? { ...t, task } : t
      );
      setTaskList(updatedTasks);
      setEditIndex(null);
    } else {
      // Add new task
      setTaskList([...taskList, { task, completed: false }]);
    }
    setTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTasks);
  };

  const completeTask = (index) => {
    setTaskList(
      taskList.map((task, i) => {
        return i == index ? { ...task, completed: !task.completed } : task;
      })
    );
  };

  const editTask = (index) => {
    setTask(taskList[index].task);
    setEditIndex(index);
  };

  return (
    <>
      <h1>To Do List</h1>
      <input
        type="text"
        placeholder="Add To Do"
        onChange={(e) => changeTask(e)}
        value={task}
      />
      <button onClick={addtodo}>Add</button>
      {taskList.map((singleTask, index) => {
        return (
          <div
            key={index}
            style={{
              textDecoration: singleTask.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
            onClick={() => completeTask(index)}
          >
            {singleTask.task}{" "}
            <button
              onClick={(e) => {
                e.stopPropagation();
                editTask(index);
              }}
            >
              Edit
            </button>{" "}
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteTask(index);
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
