// import React from 'react'
// import { Tab } from 'semantic-ui-react'
// import Home from './Home'

// const panes = [
//   {
//     menuItem: 'Tab 1',
//     render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>,
//   },
//   {
//     menuItem: 'Tab 2',
//     render: () => <Tab.Pane attached={false}><Home /></Tab.Pane>,
//   },
//   {
//     menuItem: 'Tab 3',
//     render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
//   },
// ]

// const TabExampleSecondary = () => (
//   <Tab menu={{ secondary: true }} panes={panes} />
// )

// export default TabExampleSecondary

//////////////

// import React from "react";
// import FormComp from "./FormComp";
// import List from "./List";

// export default function App(){
// return(
//   <>
//     <FormComp/>
//     <List/>
//   </>
// )
// }

// ///////////

import "./App.css";
import React, { useState } from "react";
import FormComponent from "./FormComponent/FormComponent";
import List from "./UlComponent";
import Data from "./Data";

function App() {
  const [receipes, setReceipes] = useState([]);
  const[data,setData]=useState({})
  const[editData,setEditData]=useState(null)
  const[Index,setIndex]=useState(null)

  const addReceipe = (receipe) => {
    
    setReceipes([...receipes, receipe]);
  };
  const itemli=(item)=>{
    setData(item)
  }
  
  const updatedRecipe = (item)=> {
    let newData=receipes.map((e)=>{
      if(receipes[Index]===e){
        return {...item}
      }
      return e
    })
    setReceipes(newData)
  }

  const editFn=(item,index)=>{
    setIndex(index)
    const FilteredData = receipes.filter((val)=>{
      if(receipes[index]===item){
        return true
      }else{
        return false
      }
      // return receipes;
      
    })
   setEditData(FilteredData[0])
   console.log('FilteredData==>',FilteredData)
   console.log('receipes==>',editData)
  }
  return (
    <div >
      <FormComponent  addReceipe={addReceipe} editData={editData} updatedRecipe={updatedRecipe}/>
      <List receipes={receipes} itemli={itemli} editFn={editFn}/>
      <Data data={data}/>
    </div>
  );
}

export default App;
