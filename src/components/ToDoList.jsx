import PropTypes from "prop-types";
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

ToDoList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggleTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default ToDoList;
