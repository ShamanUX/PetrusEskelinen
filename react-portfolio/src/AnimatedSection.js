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
                    from: {x: -50, opacity: 0},
                    to: {x: 0, opacity: 1},
                    delay: props.delay,
                    config: {
                        duration: 500,
                        easing: easings.easeInCubic
                    }
                }
            )
        } 
    }
    
    const { ref: sectionRef, inView } = useInView({
        threshold: 0.25,
        onChange: handleVisibilityChange,
        triggerOnce: true,
      });

    return(
        <animated.div className='section-container'  style={{...springs}}  ref={sectionRef} >
            <animated.h1>{props.title}</animated.h1>
            <img src={props.image} style={{width: "80%"}}></img>
        </animated.div>
    )
}