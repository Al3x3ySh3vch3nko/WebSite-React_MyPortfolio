/* eslint-disable import/no-anonymous-default-export */

import React from 'react'

// Spinner Logic
// const showLoader = () => loader.classList.remove('preloader--hide');
// const hideLoader = () => loader.classList.add('preloader--hide');

// const spinner     = document.querySelector('.preloader')
// const spinnerNone = () => spinner.style.display = 'none'
// const spinnerLoad = () => window.setTimeout(spinnerNone, 4000)
// window.addEventListener('load', spinnerLoad)

// console.log('Spinner', spinner);

// Spinner Visual
export default () =>
(
    <div className = 'preloader'>
        <div className = 'preloader-img'></div>
    </div>
)


