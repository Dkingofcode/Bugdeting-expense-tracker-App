import React from 'react';

export default function Labels(){
    return (
       <> 
      {LabelComponent()}  
    </>
    )
}
function LabelComponent(){
    return(
        <div className="labels flex justify-between">
            <div className="flex gap-2">
               <h3>Savings</h3> 
            </div>
            <h3>45%</h3>
        </div>
    )
}