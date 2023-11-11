
import React, { useState } from "react";

const Task = (props) => {
  const [isCompleted, setIsCompleted] = useState(props.isCompleted);
  const [name, setName] = useState(props.name);

  const isCompletedHandler = () => {
    setIsCompleted(!isCompleted);
  };

  const deleteHandler = () => {
    console.log("deleted");
    props.deleteTask(props.name);
  };

  return (
    <div className="flex justify-around p-4">
      <h1
        className={`basis-1/4 text-${isCompleted ? "blue" : "red"}-500 text-2xl`}
        style={{ textDecoration: isCompleted ? "line-through" : "none" }}
      >
        {name}
      </h1>
      <button
        className="w-32 bg-blue-500 text-white p-2 rounded-md mt-2"
        onClick={isCompletedHandler}
      >
        {isCompleted ? "Completed" : "Incomplete"}
      </button>
      <button
        onClick={deleteHandler}
        className="bg-red-500 text-white p-3 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;