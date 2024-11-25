import { useState } from "react";
import ToDoItem from "./ToDoInput";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);

  const handleToggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <ToDoItem
          key={index}
          task={task}
          onToggle={() => handleToggleTask(index)}
          onDelete={() => handleDeleteTask(index)}
        />
      ))}
    </div>
  );
};

export default ToDoList;
