import AnimatedBlock from "./AnimatedBlock";
import AnimatedSection from "./AnimatedSection";

import './styles.css'
import './Resume.css'
import csharp from './images/c-sharp logo.png'
import webdev from './images/html5-logo-31816.png'
import python from './images/Python-Logo.png'
import unity from './images/unitylogo.png'
import sql from './images/sql.png'
import node from './images/nodejs-1-logo.png'
import figma from './images/Figma-1-logo.png'
import reactlogo from  './images/reactlogo.svg'
import docker from './images/docker-logo.png'

import {useSpring, animated} from 'react-spring'
import { useEffect } from 'react'
import { easings } from '@react-spring/web'




export default function Resume() 
{
    const JobSection = (props) => {
        return(
            <div className="jobsection">
                <h3> {props.title} </h3>
                <h3> {props.date} </h3>
                <p> {props.description} </p>
            </div>
        );
    }

    const [ springs, api] = useSpring(() => ({  
        from: {x:0, opacity: 0}
    }))

    useEffect( () => {
        api.start(
            {from: {x: -10, opacity: 0},
            to: {x: 0, opacity: 1},
            delay: 800,
            config: {
                duration: 500,
                easing: easings.easeInCubic
            }}
        )
    }
    )

    return(
        <div className="page-body">
            <h1> Resume </h1>

            <h2> Master of Technology - Tampere University (2023) </h2>

            <p> In my studies at Tuni, I have gained invaluable expertise of various aspects of
                software development. I have focused on front-end technologies like React and Wordpress, UX/UI design utilizing
                Figma and user testing, and of course a fundamental understanding of full-stack development.
            </p>

            <h2> Technologies </h2>

            <div className="logoList">
                <AnimatedBlock delay={200} source={reactlogo} tooltip="React JS"/>
                <AnimatedBlock delay={250} source={webdev} tooltip="HTML, CSS, JS"/>
                <AnimatedBlock delay={300} source={figma} tooltip="Figma"/>
                <AnimatedBlock delay={350} source={unity} tooltip="Unity"/>
                <AnimatedBlock delay={400} source={node} tooltip="Node.js"/>
                <AnimatedBlock delay={450} source={sql} tooltip="SQL"/>
                <AnimatedBlock delay={500} source={csharp} tooltip="C#"/>
                <AnimatedBlock delay={550} source={python} tooltip="Python"/>
                <AnimatedBlock delay={600} source={docker} tooltip="Docker"/>
            </div>        

            <animated.div className="job-container" style={{...springs}}>
            <h2> Software-related work experience</h2>
                <JobSection 
                    title="Solenovo, software developer intern" 
                    date="Summers 2017 and 2018"
                    description="At Solenovo, I worked with docker configuration, SQL queries and legacy bash code."
                />
                <JobSection 
                    title="Tampereen Työväen Teatteri, Unity developer" 
                    date="November 2021 - February 2022"
                    description="This position was part of a project, in which I built a Unity environment
                    for virtual reality acting purposes."
                />
            </animated.div>

        </div>
    )
}