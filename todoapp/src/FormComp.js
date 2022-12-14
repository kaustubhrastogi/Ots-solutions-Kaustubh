import React, { useRef } from "react";

const FormComp = ()=>{
    const inputRef=useRef()
    return(
        <div>
            <input type='text' ref={inputRef}/>
            <input type='text' ref={inputRef}/>
            <input type='text' ref={inputRef}/>
            <button type="submit" />
        </div>
    )
}
export default FormComp