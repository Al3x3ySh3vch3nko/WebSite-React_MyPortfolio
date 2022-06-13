/* eslint-disable import/no-anonymous-default-export */
// import { render } from '@testing-library/react'
import React from 'react'
import SkillLine from './SkillLine'

const attributes_SkillLine =
[
    {
        id    : 1,
        name  : 'HTML & CSS',
        width : '90%'
    },
    {
        id    : 2,
        name  : 'Design',
        width : '60%'
    },
    {
        id    : 3,
        name  : 'Typography',
        width : '70%'
    },
    {
        id    : 4,
        name  : 'Zepplin',
        width : '100%'
    },
    {
        id    : 5,
        name  : 'Adobe Photoshop',
        width : '50%'
    },
    {
        id    : 6,
        name  : 'Figma',
        width : '60%'
    },
    {
        id    : 7,
        name  : 'SASS',
        width : '60%'
    },
    {
        id    : 8,
        name  : 'Bootstrap',
        width : '70%'
    },
    {
        id    : 9,
        name  : 'GIT, GITHUB',
        width : '70%'
    },
    {
        id    : 10,
        name  : 'Gulp',
        width : '30%'
    },
    { 
        id    : 11,
        name  : 'Java Script',
        width : '60%'
    },
    {
        id    : 12,
        name  : 'React',
        width : '45%'
    },
    {
        id    : 13,
        name  : 'Node JS \ Express JS',
        width : '30%'
    },
    {
        id    : 14,
        name  : 'API (REST)',
        width : '40%'
    },
    {
        id    : 15,
        name  : 'EJS',
        width : '60%'
    },
    {
        id    : 16,
        name  : 'SQL',
        width : '30%'
    },
    {
        id    : 17,
        name  : 'MongoDB \ Mongoose',
        width : '30%'
    },
    {
        id    : 18,
        name  : 'Authentication & Security',
        width : '30%'
    },
    {
        id    : 19,
        name  : 'Wordpress',
        width : '30%'
    },
    {
        id    : 20,
        name  : 'JQuery',
        width : '70%'
    },
    {
        id    : 21,
        name  : 'PHP',
        width : '10%'
    },
    {
        id    : 22,
        name  : 'WEB 3 (Motoko, Decentrelized Apps (DApps), Internet Computer, Blockchain)',
        width : '15%'
    },
]

const create_SkillLine = (attribute) =>
{
    return(
    <SkillLine
        name  = {attribute.name}
        width = {attribute.width}
        key   = {attribute.id}
    />  
    )
}

const SectionB = () =>
(
<section id="about-b" className = "py-1">
    <div className = "container frost">
    <h2 className = "section-title">
        <span className = "red"> ▶ [ </span>
        Technical Skills
        <span className = "red">]</span>
    </h2>
    <div className = "bottom-line"></div>
    {attributes_SkillLine.map(create_SkillLine)}
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
)

export default SectionB