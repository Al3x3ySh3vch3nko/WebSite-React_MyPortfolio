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

function SectionB()
{
return(
<section id="about-b" className = "py-1">
    <div className = "container frost">
    <h2 className = "section-title">
        <span className = "red"> ▶ [ </span>
        Technical Skills
        <span className = "red">]</span>
    </h2>
    <div className = "bottom-line"></div>
    <SkillLine
        name = 'HTML & CSS'
        width = '90%'
    />        
    <SkillLine
        name = 'Design'
        width = '60%'
    />  
    <SkillLine
        name = 'Typography'
        width = '70%'
    />  
    <SkillLine
        name = 'Zepplin'
        width = '100%'
    />  
    <SkillLine
        name = 'Adobe Photoshop'
        width = '50%'
    />  
    <SkillLine
        name = 'Figma'
        width = '60%'
    />  
    <SkillLine
        name = 'SASS'
        width = '60%'
    />  
    <SkillLine
        name = 'Bootstrap'
        width = '70%'
    />  
    <SkillLine
        name = 'GIT, GITHUB'
        width = '70%'
    />  
    <SkillLine
        name = 'Gulp'
        width = '30%'
    />  
    <SkillLine
        name = 'Java Script'
        width = '60%'
    />  
    <SkillLine
        name = 'React'
        width = '45%'
    />  
    <SkillLine
        name = 'Node JS \ Express JS'
        width = '30%'
    />  
    <SkillLine
        name = 'API (REST)'
        width = '40%'
    />  
    <SkillLine
        name = 'EJS'
        width = '60%'
    />  
    <SkillLine
        name = 'SQL'
        width = '30%'
    />  
    <SkillLine
        name = 'MongoDB \ Mongoose'
        width = '30%'
    />  
    <SkillLine
        name = 'Authentication & Security'
        width = '30%'
    />  
    <SkillLine
        name = 'Wordpress'
        width = '30%'
    />  
    <SkillLine
        name = 'JQuery'
        width = '50%'
    />  
    <SkillLine
        name = 'SVG'
        width = '70%'
    />  
    <SkillLine
        name = 'PHP'
        width = '10%'
    />  
    <SkillLine
        name = 'WEB 3 (Motoko, Decentrelized Apps (DApps), Internet Computer, Blockchain)'
        width = '10%'
    />  
    <h2 className = "section-title">
        <span className = "red"> ▶ [ </span>
        Soft Skills
        <span className = "red">]</span>
    </h2>
    <div className = "bottom-line"></div>
    <SkillLine
        name = 'English : intermidient'
        width = '60%'
    /> 
    </div>
</section>
)}

export default SectionB