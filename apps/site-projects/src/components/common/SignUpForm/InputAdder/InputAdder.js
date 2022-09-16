import React, { useState } from "react";

const InputAdder = (props) => {
  const [item, setItem] = useState("");
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <input
        type="text"
        className="todo-list-input-field"
        onChange={(e) => {
          e.preventDefault();
          setItem(e.target.value);
        }}
      />
      <button
        className="todo-list-input-field-action"
        onClick={(e) => {
          e.preventDefault();
          props.onAdd("skills", item);
          //   handleAddItemAction();
        }}
      >
        <i className="fa fa-plus" />
      </button>
    </div>
  );
};

InputAdder.displayName = "InputAdder";

export default InputAdder;
