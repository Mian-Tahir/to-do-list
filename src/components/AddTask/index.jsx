import { useState } from "react";

const AddTask = (props) => {
  const [inputString, setInputString] = useState("");

  const handleAddTask = () => {
    props.onAddTask(inputString);
    setInputString("");
  };

  return (
    <div className="p-4">
      <input
        placeholder="Add Task"
        className="border-2 border-gray-300 p-2 rounded-md"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
      />
      <button
        className="w-32 bg-blue-500 text-white p-2 rounded-md mt-2"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
