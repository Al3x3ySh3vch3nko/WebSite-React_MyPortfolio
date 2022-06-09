import React     from 'react'
import Header    from './Header'
// import Preloader from './Preloader'
import SectionA  from './SectionA'
import SectionB  from './SectionB'
import SectionC  from './SectionC'
import SectionD  from './SectionD'
import Footer    from './Footer'

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