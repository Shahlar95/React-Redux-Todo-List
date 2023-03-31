import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {delTodo} from "../redux/listSlice";
import "./uiLists.css";
const UiLists = () => {
  const selectTodo = useSelector((x) => x.list.arr);
  const dispatch = useDispatch()
  const handleDelete = (index)=>{
    dispatch(delTodo(index))
}

  return (
    <div className="ui">
      {selectTodo.map((e,index) => {
        return <p>{e}<span onClick={()=>handleDelete(index)}>  Sil</span></p>;
      })}
    </div>
  );
};

export default UiLists;
