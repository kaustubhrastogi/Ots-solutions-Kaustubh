import React from "react";
 

export default function Data({data}) {
    return (
        <div>
            {console.log("DataScreen==>",data)}
           
            {data.recipe}
            <br/>
            {data.chef}
            <br/>
            {data.instruction}
            
        </div>
    )
}