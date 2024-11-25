import ToDoItem from "./ToDoItem";

const ToDoList = ({ tasks, onToggleTask, onDeleteTask }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <ToDoItem
          key={index}
          task={task}
          onToggle={() => onToggleTask(index)}
          onDelete={() => onDeleteTask(index)}
        />
      ))}
    </div>
  );
};

export default ToDoList;
