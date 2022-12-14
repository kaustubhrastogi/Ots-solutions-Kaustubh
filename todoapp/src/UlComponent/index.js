import "./index.css";
import React from "react";

const List = ({ receipes, itemli, editFn }) => {
  return (
    <div>

      <ul>{receipes.map((curr,index,arr) => <ul>
        <li onClick={() => itemli(curr)}>{curr.recipe}</li>
        <button key={index} onClick={() => editFn(curr,index)}>edit</button>
      </ul>)}</ul>

    </div>
  );
};

export default List;
