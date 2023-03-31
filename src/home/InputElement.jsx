import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./inputElement.css"

import { setTodo } from "../redux/listSlice";

const InputElement = () => {
  const [use, setUse] = useState("");
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setTodo(use));
  };
  return (
    <div className="element">
      <input value={use} onChange={(e) => setUse(e.target.value)} type="text" />
      <button onClick={handleClick}>ADD</button>
    </div>
  );
};

export default InputElement;
