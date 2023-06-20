import Page from "./Page";
import "./styles.css"
import Carousel from "./Carousel";
import AnimatedSection from "./AnimatedSection";

export default function Home() {
    return(
        <Page pagebody={
            <div>
                <header>
                    <div className='header-content'>
                        <h1> I'm Petrus and welcome to my portfolio </h1>
                        <Carousel></Carousel>
                    </div>
                </header>
                <AnimatedSection/>
                <AnimatedSection/>
                <AnimatedSection/>
                <AnimatedSection/>
                <AnimatedSection/>
                <AnimatedSection/>
            </div>
        }/>
    )
}