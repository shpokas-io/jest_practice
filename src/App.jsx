import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">To-Do App</h1>
        <ToDoInput />
        <ToDoList />
      </div>
    </div>
  );
};

export default App;
