import React from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
function Todo({ item }) {
  return (
    <div className="tasks">
      <h3>{item}</h3>
      <div className="btn">
        <button className="update-btn">
          <SyncAltIcon />
        </button>
        <button className="delete-btn">
          <DeleteOutlineOutlinedIcon />
        </button>
      </div>
    </div>
  );
}

export default Todo;
