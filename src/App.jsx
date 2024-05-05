import React, { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleCompleteTask = (id) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      const updatedTasks = [...tasks];
      const completedTask = updatedTasks.splice(taskIndex, 1)[0];
      completedTask.completed = true;
      setTasks(updatedTasks);
      setCompletedTasks([...completedTasks, completedTask]);
    }
  };

  const handleDeleteTask = (id, listType) => {
    if (listType === "pending") {
      const updatedTasks = tasks.filter((task) => task.id !== id);
      setTasks(updatedTasks);
    } else {
      const updatedCompletedTasks = completedTasks.filter(
        (task) => task.id !== id
      );
      setCompletedTasks(updatedCompletedTasks);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">To-Do App</h1>
      <TaskInput onAddTask={handleAddTask} />
      <TaskList
        title="Pending Tasks"
        tasks={tasks}
        type="pending"
        onCompleteTask={handleCompleteTask}
        onDeleteTask={handleDeleteTask}
      />
      <TaskList
        title="Completed Tasks"
        tasks={completedTasks}
        type="completed"
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
