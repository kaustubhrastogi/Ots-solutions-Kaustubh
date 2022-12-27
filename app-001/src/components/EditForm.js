import React, { useEffect, useRef, useState } from "react";

const EditForm = ({trainee}) => {
    const [editData,setEditData]= useState({})
    useEffect(()=>{
        setEditData(trainee)
    },[])

    const NameRef = useRef()
    const EmailRef = useRef()
    const GenderRef = useRef()

    const handleUpdate = () => {
        setEditData(NameRef.current.value)
    }
    
    return(
        <>
        <input placeholder="Name" ref={NameRef}/>
        <input placeholder="Email" ref={EmailRef}/>
        <input placeholder="Gender" ref={GenderRef}/>
        <button onClick={()=>handleUpdate()}>Update</button>
        {console.log('editData==>',editData)}
        </>
    )
}
export default EditForm