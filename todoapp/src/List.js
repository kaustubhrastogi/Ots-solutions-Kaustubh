import React, { useRef, useState } from "react";

function List(){
    const [data,setData]=useState([])
    const inputRef=useRef()
    function add(){
        setData(...data,inputRef.current.value)
    }
    return(
            <div>
                <ul>
                    <li>{data}</li>
                </ul>
            </div>
    )
}
export default List