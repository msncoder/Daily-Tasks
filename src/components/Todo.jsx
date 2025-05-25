import React from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
function Todo({ item, deleteTask, index, updateTask }) {
  return (
    <div className="tasks">
      <div className="task">
        <h3>{item}</h3>
      </div>
      <div className="btn">
        <button
          className="update-btn"
          onClick={() => {
            updateTask(index);
          }}
        >
          <SyncAltIcon />
        </button>
        <button className="delete-btn" onClick={() => deleteTask(index)}>
          <DeleteOutlineOutlinedIcon />
        </button>
      </div>
    </div>
  );
}

export default Todo;
