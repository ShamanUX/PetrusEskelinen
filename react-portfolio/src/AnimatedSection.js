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
        threshold: props.threshold,
        onChange: handleVisibilityChange,
        triggerOnce: true,
      });

    return(
        <animated.div className='section-container'  style={{...springs}}  ref={sectionRef} >
            <animated.h1 className={'section-text'}>{props.title}</animated.h1>

            <div className='media-container'> 
                <div className='media-wrapper' >
                    {props.image ? 
                        <img src={props.image} className='section-media' ></img>
                        :
                        null
                    }   
                    
                    {/* If a video prop exists, display the video element. */}
                    {props.video ? 
                        <video autoPlay loop muted className='section-media' style={{borderRadius: "20px"}}>
                            <source src={props.video} type="video/mp4" />
                        </video> 
                        :
                        null
                    }
                </div>
            </div>
        </animated.div>
    )
}