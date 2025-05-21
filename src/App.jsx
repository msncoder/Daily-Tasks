import { useState } from "react";

import "./App.css";
import Todo from "./components/Todo";

function App() {
  const [todo, SetTodo] = useState("");
  const [tasks, SetTasks] = useState([]);

  const handleSubmits = (e) => {
    e.preventDefault();

    SetTasks([...tasks, todo]);
    console.log(todo);
  };

  return (
    <div className="container">
      <div className="sub-container">
        <form onSubmit={handleSubmits} className="upper">
          <input
            className="input-box"
            type="text"
            placeholder="Enter Your Daily Task"
            value={todo}
            onChange={(e) => SetTodo(e.target.value)}
          />
          <button type="submit" className="input-btn">
            Add
          </button>
        </form>
        <div className="lower">
          {tasks.map((item, index) => {
            return <Todo key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
