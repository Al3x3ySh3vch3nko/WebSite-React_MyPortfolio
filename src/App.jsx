import React     from 'react'
import Header    from './Header'
// import Preloader from './Preloader'
import SectionA  from './SectionA'
import SectionB  from './SectionB'
import SectionC  from './SectionC'
import SectionD  from './SectionD'
import Footer    from './Footer'

// Spinner Logic
// const spinner     = document.querySelector('.preloader')
// console.log('Spinner', spinner);

// const spinnerNone = () => spinner.style.display = 'none'
// const spinnerLoad = () => window.setTimeout(spinnerNone, 4000)
// window.addEventListener('load', spinnerLoad)


// Spinner Visual
// function Preloader()
// {
// return(
//     <div className= 'preloader'>
//         <div className = 'preloader-img'></div>
//     </div>
//     )
// }

function App()
{
    return(
        <div>
        {/* <Preloader /> */}
        <Header />
        <SectionA />
        <SectionB />
        <SectionC />
        <SectionD />
        <Footer />
        </div>
    )
} 

export default App