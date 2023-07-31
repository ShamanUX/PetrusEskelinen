import './Home.css'
import "./styles.css"
import Carousel from "./Carousel";
import  EmblaCarousel  from './EmblaCarousel';
import { useRef } from 'react';
import Zoom from 'react-medium-image-zoom'

import Burger from './Burger';
import AnimatedSection from "./AnimatedSection";
import rajatonCollage from "./images/Rajatontaidecollage.png"
import dashboardCollage from "./images/Dashboardcollage.png"
import barrelrollDemo from "./videos/Barrelroll\ demo.mp4"
import soundscapeDemo from "./videos/Soundscape\ demo.mp4"
import earthPeopleCollage from "./images/EarthPeopleCollage.png"
import thesisFrontpage from "./images/ThesisFrontpage.png"
import portrait from './images/pe1.jpg'
import downarrow from './images/icons/down-arrow.png'

const OPTIONS = { loop: true, dragFree: true,}
const AUTOPLAYOPTIONS = {delay: 2000}
const SLIDE_COUNT = 9
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
    const projectRef = useRef(null);

    const executeScroll = () => projectRef.current.scrollIntoView({ behavior: "smooth" })

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
                            <SectionInfo
                                title="'Rajaton Taide' Music Festival" 
                                tech='Technologies: HTML, CSS, JS'
                                role='Role: Web design and development'
                            />

                            <div className='section-grid-item'>
                                    <AnimatedSection 
                                        delay={0}
                                        image={rajatonCollage}
                                        threshold={0.5}
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
                                    threshold={0.5}
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
                    </div>
            </>
    )
}