import React from 'react'

// Spinner Logic
const spinner     = document.getElementById('preloader')
const spinnerNone = () => spinner.style.display = 'none'
const spinnerLoad = () => window.setTimeout(spinnerNone, 4000)
window.addEventListener('load', spinnerLoad)

console.log('Preloader-jsx');
console.log('Spinner', spinner);

// Spinner Visual
function Preloader()
{
return(
    <div id = 'preloader'>
        <div className = 'preloader-img'></div>
    </div>
    )
}

export default Preloader