import './Home.css'
import "./styles.css"
import Carousel from "./Carousel";
import  EmblaCarousel  from './EmblaCarousel';
import AnimatedBlock from './AnimatedBlock';
import App from './SlickSlider.js'

import AnimatedSection from "./AnimatedSection";
import rajatonCollage from "./images/Rajatontaidecollage.png"
import csharp from './images/c-sharp logo.png'
import webdev from './images/html5-logo-31816.png'
import python from './images/Python-Logo.png'
import unity from './images/unitylogo.png'
import sql from './images/sql.png'
import node from './images/nodejs-1-logo.png'
import figma from './images/Figma-1-logo.png'
import reactlogo from  './images/reactlogo.svg';

const OPTIONS = { loop: true }
const AUTOPLAYOPTIONS = {delay: 2000}
const SLIDE_COUNT = 8
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
    return(
            <div>
                <header>
                    <div className='header-content'>
                        <h1> User-friendly software development </h1>
                        
                        <div className="logoList">
                            <AnimatedBlock delay={200} source={reactlogo}/>
                            <AnimatedBlock delay={250} source={webdev}/>
                            <AnimatedBlock delay={300} source={figma}/>
                            <AnimatedBlock delay={350} source={unity}/>
                            <AnimatedBlock delay={400} source={node}/>
                            <AnimatedBlock delay={450} source={sql}/>
                            <AnimatedBlock delay={500} source={csharp}/>
                            <AnimatedBlock delay={550} source={python}/>
                        </div>                     
                    </div>
                </header>
                <EmblaCarousel options={OPTIONS} slides={SLIDES} autoplayOptions={AUTOPLAYOPTIONS}/>
                <div className="section-grid">
                    <AnimatedSection 
                        title="Webpage development & design for Rajaton Taide -festival"
                        delay={200}
                        image={rajatonCollage}
                    />
                    <AnimatedSection 
                        title="UI dashboard design for a resource management solution" 
                        delay={500}
                    />
                    <AnimatedSection 
                        title="BarrelRoll: 2D space shooter"
                        delay={200}
                    />
                    <AnimatedSection 
                        title="SoundScape: VR musical playground"
                        delay={200}
                        
                    />
                </div>
            </div>
    )
}