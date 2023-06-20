import './AnimatedSection.css'
import {useSpring, animated} from 'react-spring'
import {useEffect, useRef} from 'react';
import { config } from 'react-transition-group';


export default function AnimatedSection() 
{
    
    const [ springs, api] = useSpring(() => ({  
        from: {opacity: 0}
    }))
    
    const sectionRef = useRef(null);

    useEffect(() => {
        
    })

    const handleScroll = () => {

        console.log("scroll happened");
        
        api.start({
            from: {opacity: 0},
            to: {opacity: 1},
            config: {duration: 1000}
        })
    }

    return(
        <div className='section-container' onScroll={handleScroll()}>
            <animated.h1 style={{...springs}}>title that should animate</animated.h1>
        </div>
    )
}