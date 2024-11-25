import React from "react";

interface Task {
  text: string;
  completed: boolean;
}

interface ToDoItemProps {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
}

const ToDoItem = ({ task, onToggle, onDelete }: ToDoItemProps) => {
  return (
    <div className="flex items-center justify-between mb-2">
      <div
        className={`flex-1 ${task.completed ? "line-through" : ""}`}
        onClick={onToggle}
      >
        {task.text}
      </div>
      <button className="bg-red-500 text-white p-1 rounded" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default ToDoItem;
