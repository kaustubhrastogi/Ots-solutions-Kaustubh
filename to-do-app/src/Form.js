import React, { useState } from 'react'
import List from './List';
import './App.css';
import InputForm from './InputForm';

function Form() {

    const [data, setData] = useState([]);
    let update = (item) => {
        if (item) {
            setData((c) => [...c, item]);
        }

    }
    let sort= ()=>{
        const newData= data.sort()
        console.log('jhsvfjhsdv',newData)
        setData([...newData]);
    }

    return (

        <div className='App-header'>

            <InputForm parentBag={update} click={sort} />
            <List arr={data} />

        </div>

    )
}

export default Form

// we can send data from form to list because form is the parent of list.
// Problem:- Form needs data from input form component (Which means we need to pass data from child to parent).