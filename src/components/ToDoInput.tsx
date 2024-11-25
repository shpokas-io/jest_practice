import React, { useState } from "react";

interface ToDoInputProps {
  addTask: (task: string) => void;
}

const ToDoInput = ({ addTask }: ToDoInputProps) => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="w-full bg-blue-500 text-white p-2 rounded"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
};

export default ToDoInput;
