import React, { useState } from "react";
import Task from "../Task/Task";

const TaskList = (props) => {
  const [searchResult, setSearchResult] = useState(""); 
  const deleteTask = (taskName) => {
    props.setListOfTasks((prevState) =>
      prevState.filter((task) => task.name !== taskName)
    );
  };

  const filteredTasks = props.listOfTasks.filter((task) =>
    task.name.toLowerCase().includes(searchResult.toLowerCase())
  );
  return (
    <div className="mt-4" >
      <input
        type="text"
        placeholder="Search Task"
        value={searchResult}
        onChange={(e) => setSearchResult(e.target.value)}
        className="border-2 border-gray-300 p-2 rounded-md"
      />
      {filteredTasks.map((inputval) => {
        return (
          <Task
            key={inputval.name}
            name={inputval.name}
            isCompleted={inputval.isCompleted}
            deleteTask={deleteTask}
          />
        );
      })}
    </div>
  );
};
export default TaskList;