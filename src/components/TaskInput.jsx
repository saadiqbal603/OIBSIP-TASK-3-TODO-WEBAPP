import React, { useState } from "react";

function TaskInput({ onAddTask }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        dateAdded: new Date().toLocaleString(),
        completed: false,
      };
      onAddTask(newTask);
      setInputValue("");
    }
  };

  return (
    <div className="add-task-container">
      <input
        type="text"
        placeholder="Add new task"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskInput;
