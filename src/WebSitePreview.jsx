/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default props =>
(
<div className = "item">
    <div className = "item-image">
        <img 
        data-src={props.dataSrc}
        src={props.src}
        // className = "lazy-img"
        alt=""
        />
    </div>
    <div className = "item-text">
        <div className = "item-text-wrap">
        <p className = "item-text-category">Web Site Example</p>
        <h2 className = "item-text-title">
        <a href={props.href} target="_blank">{props.WebSiteName}</a>
        </h2>
        </div>
    </div>
</div>
)

