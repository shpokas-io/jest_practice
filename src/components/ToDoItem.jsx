import PropTypes from "prop-types";

const ToDoItem = ({ task, onToggle, onDelete }) => {
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

ToDoItem.propTypes = {
  task: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ToDoItem;
