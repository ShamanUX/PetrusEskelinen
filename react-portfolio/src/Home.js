import './Home.css'
import "./styles.css"
import Carousel from "./Carousel";
import  EmblaCarousel  from './EmblaCarousel';
import AnimatedBlock from './AnimatedBlock';
import App from './SlickSlider.js'
import { useRef } from 'react';

import Burger from './Burger';
import AnimatedSection from "./AnimatedSection";
import rajatonCollage from "./images/Rajatontaidecollage.png"
import dashboardCollage from "./images/Dashboardcollage.png"
import barrelrollDemo from "./videos/Barrelroll\ demo.mp4"
import soundscapeDemo from "./videos/Soundscape\ demo.mp4"
import earthPeopleCollage from "./images/EarthPeopleCollage.png"
import thesisFrontpage from "./images/ThesisFrontpage.png"
import csharp from './images/c-sharp logo.png'
import webdev from './images/html5-logo-31816.png'
import python from './images/Python-Logo.png'
import unity from './images/unitylogo.png'
import sql from './images/sql.png'
import node from './images/nodejs-1-logo.png'
import figma from './images/Figma-1-logo.png'
import reactlogo from  './images/reactlogo.svg';
import portrait from './images/pe1.jpg'
import downarrow from './images/icons/down-arrow.png'

const OPTIONS = { loop: true, dragFree: true,}
const AUTOPLAYOPTIONS = {delay: 2000}
const SLIDE_COUNT = 9
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
    const projectRef = useRef(null);

    const executeScroll = () => projectRef.current.scrollIntoView({ behavior: "smooth" })

    return(
            <>
                <Burger/>
                <div>
                    <header>
                        
                        <div className='header-content'>
                            <h1 style= {{textAlign: 'center'}}> User-friendly software development & design </h1>
                            { /* <EmblaCarousel options={OPTIONS} slides={SLIDES} autoplayOptions={AUTOPLAYOPTIONS}/> */ }
                            <div className='bio-container'>
                                <img className="portrait" src={portrait}/>
                                <div className='portrait-items'>
                                    <h2> I'm Petrus, and I warmly welcome you to my portfolio!</h2>
                                    <div className='button-and-arrow'>
                                        <button onClick={executeScroll}>Check out my projects! </button>
                                        <img src={downarrow}/>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
                    </header>
                    
                    <div className ="home-body">
                        <div className="section-grid" ref={projectRef}>
                            <div>
                                <h1>text</h1>
                                <div className='border-line'></div>
                            </div>
                            <div className='section-grid-item'>
                                    <AnimatedSection 
                                        title="Webpage development & design for Rajaton Taide -festival"
                                        delay={0}
                                        image={rajatonCollage}
                                        threshold={0.5}
                                    />
                            </div>

                            <div className='section-grid-item'>
                                <AnimatedSection 
                                    title="UI dashboard design for a resource management solution" 
                                    delay={500}
                                    image={dashboardCollage}
                                    threshold={0.5}
                                />
                            </div>
                            <div className='section-grid-item'>
                                <AnimatedSection 
                                    title="Earthpeople: Gamified app for sustainability"
                                    delay={200}
                                    image={earthPeopleCollage}
                                    threshold={0.3}
                                />
                            </div>
                            <div className='section-grid-item'>
                                <AnimatedSection 
                                    title="Thesis: Learnability Evaluation of Glue VR app"
                                    delay={700}
                                    image={thesisFrontpage}
                                    threshold={0.3}
                                />
                            </div>
                            <div className='section-grid-item'>
                                <AnimatedSection 
                                    title="BarrelRoll: 2D space shooter"
                                    delay={200}
                                    video={barrelrollDemo}
                                    threshold={0.3}
                                />
                            </div>
                            <div className='section-grid-item'>
                                <AnimatedSection 
                                    title="SoundScape: VR musical playground"
                                    delay={700}
                                    video={soundscapeDemo}
                                    threshold={0.3}
                                />
                            </div>
                            
                            
                        </div>
                    </div>
                    </div>
            </>
    )
}