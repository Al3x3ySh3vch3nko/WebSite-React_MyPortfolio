import React from 'react'

function SkillLine(props)
{
return(
    <>
    <h4>{props.name} :</h4>
    <div className="progress">
        <div style={{ width: props.width }}></div>
    </div>
    </> 
)}

export default SkillLine

