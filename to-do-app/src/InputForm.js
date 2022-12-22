import React, { useRef, useState } from 'react'

function InputForm({ parentBag ,click}) {
    const inputref=useRef();
    return (
        <div className='main'>
            <input className='search' type='text' placeholder='Enter your daily tasks' ref={inputref} />
            <button className='btn' onClick={() => {
                parentBag(inputref.current.value)
                inputref.current.value=''
                console.log(inputref.current.value);
            }}>Add</button>
            <button  onClick={click}>Sort</button>
        </div>
    )
}

export default InputForm