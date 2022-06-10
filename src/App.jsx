/* eslint-disable import/no-anonymous-default-export */
import React     from 'react'
import Header    from './Header'
// import Preloader from './Preloader'
import SectionA  from './SectionA'
import SectionB  from './SectionB'
import SectionC  from './SectionC'
import SectionD  from './SectionD'
import Footer    from './Footer'

export default () =>
(
        <div>
        <Header />
        {/* <Preloader /> */}
        <SectionA />
        <SectionB />
        <SectionC />
        <SectionD />
        <Footer />
        </div>
)

