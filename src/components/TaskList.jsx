import React from "react";

function TaskList({ title, tasks, type, onCompleteTask, onDeleteTask }) {
  return (
    <div className="task-list">
      <h2>{title}</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.text}</span>
            <span>{task.dateAdded}</span>
            <div>
              {type === "pending" && (
                <button
                  className="complete-btn"
                  onClick={() => onCompleteTask(task.id)}
                >
                  Complete
                </button>
              )}
              <button
                className="delete-btn"
                onClick={() => onDeleteTask(task.id, type)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
