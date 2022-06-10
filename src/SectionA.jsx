/* eslint-disable import/no-anonymous-default-export */

import React from 'react'

export default () =>
(
<section id="about-a" className="py-3">
<div className="container">
    <div className="about-info frost">
        <img 
        src="./img/Alexey-ava.jpg"
        alt="" 
        className = "bio-image" />
        <div className="bio frost">
        <h2><span className="red txt-medium ">[ BIO ] : </span></h2>
        <p className="txt-medium">
            Live in: Moscow region 
        </p>
        <h2><span className="red txt-medium ">[ Email ] : </span></h2>
        <p className="txt-medium">
            a.r.shevchenko@gmail.com
        </p>
        <h2><span className="red txt-medium ">[ Phone ] : </span></h2>
        <p className="txt-medium">
            +7(985) 117-91-17
        </p>
        <h2><span className="red txt-medium ">[ GitHub Profile ] : </span></h2>
        <p className="txt-medium">
            <a href="https://github.com/Al3x3ySh3vch3nko">Click here to check my GitHub profile</a>
        </p>
        <div className="social">
            <a href="https://instagram.com/s._.h._.a._.r/"><i className="fab fa-instagram"></i></a>
        </div>  
        </div>
    </div>
</div>
</section>
)
