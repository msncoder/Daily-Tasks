import { useState } from "react";

import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="container">
      <div className="sub-container">
        <div className="upper">
          <input
            className="input-box"
            type="text"
            placeholder="Enter Your Daily Task"
          />
          <button className="input-btn">Add</button>
        </div>
        <div className="lower">
          <Todo />
        </div>
      </div>
    </div>
  );
}

export default App;
