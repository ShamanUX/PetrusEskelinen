import './Home.css'
import "./styles.css"
import Carousel from "./Carousel";
import  EmblaCarousel  from './EmblaCarousel';
import { useRef, useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import HeadlineTransition from './HeadlineTransition';

import  CollageOfAll from './images/CollageofAll.png'
import Footer from './Footer';
import Burger from './Burger';
import AnimatedSection from "./AnimatedSection";
import rajatonCollage from "./images/Rajatontaidecollage.png"
import dashboardCollage from "./images/Dashboardcollage.png"
import barrelrollDemo from "./videos/Barrelroll\ demo.mp4"
import soundscapeDemo from "./videos/Soundscape\ demo.mp4"
import earthPeopleCollage from "./images/EarthPeopleCollage.png"
import thesisFrontpage from "./images/ThesisFrontpage.png"
import portrait from './images/pe1small.jpg'
import downarrow from './images/icons/down-arrow.png'

const OPTIONS = { loop: true, dragFree: true,}
const AUTOPLAYOPTIONS = {delay: 2000}
const SLIDE_COUNT = 9
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
    const projectRef = useRef(null);

    const TEXTS = ['Innovative', 'User-friendly', 'Responsive',];

    const [index, setIndex] = useState(0);

    useEffect( () => {
        window.scrollTo(0,0);
    })

    const executeScroll = () => projectRef.current.scrollIntoView({
        block: "start",
      inline: "center",
      behavior: "smooth",
      alignToTop: true
    })

    const SectionInfo = (props) => {
        return(
        <div className='section-info-container'>
            <h1> {props.title} </h1>
            <div className='section-info'>
                <div className='border-line'/>
                <div className='section-details'>
                    {props.tech ? <h3> {props.tech}</h3> : null}
                    <h3> {props.role}</h3>
                </div>
            </div>
        </div>
    )
    }

    return(
            <>
                <Burger/>
                
                    <header>
                        <div className='header-content'>
                            <h1 className='header-title' style= {{textAlign: 'center'}}>
                                <HeadlineTransition/>
                                &nbsp;software development & design </h1>
                            <h1>
                                
                            </h1>
                            { /* <EmblaCarousel options={OPTIONS} slides={SLIDES} autoplayOptions={AUTOPLAYOPTIONS}/> */ }
                            <div className='image-content-flex'>
                                <div className='header-image-container '>
                                    <div className='image-wrapper '>
                                        <img className='header-image' src={CollageOfAll}/>
                                    </div>
                                </div>
                                <div className='portrait-items'>
                                        <div className='button-and-arrow'>
                                            <button className='button' onClick={executeScroll}>
                                                <h3 className='button-label'>Check out my projects!</h3> 
                                            </button>
                                            <img src={downarrow}/>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </header>
                
                <div className ="home-body">
                    <div className="section-grid" ref={projectRef}>
                        <SectionInfo
                            title="'Rajaton Taide' Music Festival" 
                            tech='Technologies: HTML, CSS, JS'
                            role='Role: Web design and development'
                        />

                        <div className='section-grid-item'>
                                <AnimatedSection 
                                    delay={0}
                                    image={rajatonCollage}
                                    threshold={0.3}
                                />
                        </div>

                        <SectionInfo
                            title='Qaia asset management solution'
                            tech='Technologies: Figma'
                            role='Role: UI design'
                        />

                        <div className='section-grid-item'>
                            <AnimatedSection 
                                delay={0}
                                image={dashboardCollage}
                                threshold={0.3}
                            />
                        </div>

                        <SectionInfo
                            title='Earthpeople: Gamified app for sustainability'
                            tech='Technologies: Figma'
                            role='Role: Concept ideation, UI & Experience design'
                        />

                        <div className='section-grid-item'>
                            <AnimatedSection 
                                delay={0}
                                image={earthPeopleCollage}
                                threshold={0.3}
                            />
                        </div>

                        <SectionInfo
                            title="Master's thesis - Learnability evaluation of VR applications"
                            role="Roles: Evaluation moderation, design, research & analysis"
                        />

                        <div className='section-grid-item'>
                            <AnimatedSection 
                                delay={0}
                                image={thesisFrontpage}
                                threshold={0.3}
                            />
                        </div>

                        <SectionInfo
                            title="BarrelRoll: 2D space shooter"
                            tech="Technologies: Unity, C#"
                            role="Roles: Game logic programming"
                        />

                        <div className='section-grid-item'>
                            <AnimatedSection 
                                delay={0}
                                video={barrelrollDemo}
                                threshold={0.3}
                            />
                        </div>

                        <SectionInfo
                            title="SoundScape: VR musical playground"
                            tech="Technologies: Unity, C#"
                            role="Roles: Programming, Sound design, Concept ideation"
                        />

                        <div className='section-grid-item'>
                            <AnimatedSection 
                                delay={0}
                                video={soundscapeDemo}
                                threshold={0.3}
                            />
                        </div>
                    </div>
                </div>
                <Footer></Footer>
                
            </>
    )
}