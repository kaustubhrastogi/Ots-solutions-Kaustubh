import "./App.css";
import React, { useState } from "react";
import FormComponent from "./component/FormComponent/FormComponent";
import List from "./component/UlComponent";

function App() {
  const [receipes, setReceipes] = useState([]);

  const addReceipe = (receipe) => {
    setReceipes([...receipes, receipe]);
  };
  console.log(receipes);
  return (
    <div className="App">
      <FormComponent addReceipe={addReceipe} />
      <List receipes={receipes} />
    </div>
  );
}

export default App;
