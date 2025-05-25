import { useState, useEffect } from "react";

import "./App.css";
import Todo from "./components/Todo";

function App() {
  const [Goal, SetGoal] = useState("");
  const [tasks, SetTasks] = useState([]);
  const [edit, SetEdit] = useState(null);

  const deleteTask = (index) => {
    const filteredArr = tasks.filter((val, i) => {
      return i !== index;
    });
    SetTasks(filteredArr);
  };

  const updateTask = (index) => {
    SetEdit(index);
    SetGoal(tasks[index].Goal);
  };

  const handleSubmits = (e) => {
    e.preventDefault();

    if (edit !== null) {
      const updatedGoal = [...tasks];
      console.log(updatedGoal);
      updatedGoal[edit] = { Goal };
      SetTasks(updatedGoal);
      // console.log(tasks);
      SetEdit(null);
    } else {
      SetTasks([...tasks, { Goal }]);
      // console.log([...tasks, { Goal }]);
    }
    SetGoal("");
  };

  return (
    <div className="container">
      <h2 className="heading">Add Daily Goals</h2>
      <div className="sub-container">
        <form onSubmit={handleSubmits} className="upper">
          <input
            className="input-box"
            type="text"
            placeholder="Enter Your Daily Task"
            value={Goal}
            onChange={(e) => SetGoal(e.target.value)}
          />
          <button type="submit" className="input-btn">
            {edit !== null ? "Update" : "Add"}
          </button>
        </form>
        <div className="lower">
          {tasks.map((item, index) => {
            return (
              <Todo
                key={index}
                item={item.Goal}
                deleteTask={deleteTask}
                index={index}
                updateTask={updateTask}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
