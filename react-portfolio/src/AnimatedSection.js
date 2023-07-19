import './AnimatedSection.css'
import {useSpring, animated} from 'react-spring'
import {useEffect, useRef, useState} from 'react';
import { InView, defaultFallbackInView, useInView } from 'react-intersection-observer';
import { easings } from '@react-spring/web'
import rajatonCollage from './images/Rajatontaidecollage.png' 


export default function AnimatedSection(props) 
{
    

    const [ springs, api] = useSpring(() => ({  
        from: {x:0, opacity: 0}
    }))
    
    

    const handleVisibilityChange = (inView) => {
        if (inView) {
            api.start(
                {
                    from: {x: -20, opacity: 0},
                    to: {x: 0, opacity: 1},
                    delay: props.delay,
                    config: {
                        duration: 500,
                        easing: easings.easeInOutQuart
                    }
                }
            )
        } 
    }
    
    const { ref: sectionRef, inView } = useInView({
        threshold: 1,
        onChange: handleVisibilityChange,
        triggerOnce: true,
      });

    return(
        <animated.div className='section-container'  style={{...springs}}  ref={sectionRef} >
            <animated.h1>{props.title}</animated.h1>
            <img src={props.image} style={{width: "80%"}}></img>
            {/* If a video prop exists, display the video element. */}
            {props.video ? 
                <video autoPlay loop muted  style={{width: "80%", borderRadius: "20px"}}>
                    <source src={props.video} type="video/mp4" />
                </video> 
                :
                null
            }
        </animated.div>
    )
}