import React, { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/Tasklist"

function App() {
  const storedTask = JSON.parse(localStorage.getItem("task"));
  const [listOfTasks, setListOfTasks] = useState(storedTask || []);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(listOfTasks));
  }, [listOfTasks]);

  const handleAddTask = (taskName) => {
    setListOfTasks([...listOfTasks, { name: taskName, isCompleted: false }]);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">
      <div className="w-full max-w-screen-sm border border-blue-600 rounded p-3 bg-neutral-200">
        <AddTask onAddTask={handleAddTask} />
        <TaskList  listOfTasks={listOfTasks} setListOfTasks={setListOfTasks} />
      </div>
    </div>
  );
}

export default App;


