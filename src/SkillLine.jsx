/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default props =>
(
    <>
    <h4>{props.name} :</h4>
    <div className="progress">
        <div style={{ width: props.width }}></div>
    </div>
    </> 
)


