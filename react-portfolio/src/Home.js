import './Home.css'
import "./styles.css"
import Carousel from "./Carousel";
import AnimatedSection from "./AnimatedSection";
import rajatonCollage from "./images/Rajatontaidecollage.png"

export default function Home() {
    return(
            <div>
                <header>
                    <div className='header-content'>
                        <h1> I'm Petrus and welcome to my portfolio </h1>
                        <Carousel></Carousel>
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