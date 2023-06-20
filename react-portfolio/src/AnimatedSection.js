import './AnimatedSection.css'
import {useSpring, animated} from 'react-spring'
import {useEffect, useRef, useState} from 'react';
import { InView, defaultFallbackInView, useInView } from 'react-intersection-observer';


export default function AnimatedSection() 
{
    
    const [ springs, api] = useSpring(() => ({  
        from: {opacity: 0}
    }))
    
    
 
    const handleVisibilityChange = (inView) => {
        if (inView) {
            api.start({
                from: {opacity: 0},
                to: {opacity: 1},
                config: {duration: 1000}
            })
        } 
    }
    
    const { ref: sectionRef, inView: sectionIsVisible } = useInView({
        threshold: 0,
        onChange: handleVisibilityChange,
      });

    return(
        <div className='section-container' ref={sectionRef} >
            <animated.h1 style={{...springs}}>title that should animate</animated.h1>
        </div>
    )
}